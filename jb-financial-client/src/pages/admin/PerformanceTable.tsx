import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER_URL } from "../../Constants.tsx";

interface PerformanceData {
    _id: string;
    Date: string;
    [key: string]: string | number;
}

interface PerformanceTableProps {
    chartType: 'value-eq' | 'short-term' | 'money-market';
}

const PerformanceTable: React.FC<PerformanceTableProps> = ({ chartType }) => {
    const [data, setData] = useState<PerformanceData[]>([]);
    const [newEntry, setNewEntry] = useState<PerformanceData>({ _id: '', Date: '' });
    const [isUpdating, setIsUpdating] = useState<boolean>(false); // State to track if we are updating

    useEffect(() => {
        fetchData();
    }, [chartType]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${SERVER_URL}/api/performance-${chartType}`);
            const sortedData = response.data.sort((a: PerformanceData, b: PerformanceData) => {
                // Sort by Date in descending order
                return new Date(b.Date).getTime() - new Date(a.Date).getTime();
            });
            setData(sortedData.slice(0, 5)); // Get only the most recent 5 entries
            if (sortedData.length > 0) {
                const initialEntry = { _id: '', Date: '', ...Object.keys(sortedData[0]).reduce((acc, key) => {
                        if (key !== '_id' && key !== 'Date' && key !== '__v') {
                            acc[key] = ''; // Initialize other fields
                        }
                        return acc;
                    }, {} as PerformanceData) };
                setNewEntry(initialEntry);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewEntry((prevEntry) => ({
            ...prevEntry,
            [name]: value,
        }));

        // Check if the selected date already exists in the data
        if (name === 'Date') {
            const existingEntry = data.find(entry => entry.Date === value);
            if (existingEntry) {
                // Populate newEntry with the existing entry's values
                setNewEntry(existingEntry);
                setIsUpdating(true); // Set to update mode
            } else {
                // Reset newEntry if the date is new
                setNewEntry((prev) => ({
                    ...prev,
                    Date: value,
                    ...Object.keys(prev).reduce((acc, key) => {
                        if (key !== '_id' && key !== 'Date' && key !== '__v') {
                            acc[key] = ''; // Reset other fields
                        }
                        return acc;
                    }, {} as PerformanceData)
                }));
                setIsUpdating(false); // Set to add mode
            }
        }

        // Debugging: Log the newEntry state after each change
        console.log('Current newEntry state:', { ...newEntry, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const entryToSend: Partial<PerformanceData> = { ...newEntry };
            delete entryToSend._id; // Remove _id if present

            // Log the entry being sent for debugging
            console.log('Submitting entry:', entryToSend);

            if (isUpdating) {
                // Update the existing entry
                await axios.put(`${SERVER_URL}/api/performance-${chartType}/${newEntry._id}`, entryToSend);
            } else {
                // Add a new entry
                await axios.post(`${SERVER_URL}/api/performance-${chartType}`, entryToSend);
            }

            await fetchData();
            // Reset newEntry to initial state after submission
            setNewEntry({ _id: '', Date: '', ...Object.keys(data[0]).reduce((acc, key) => {
                    if (key !== '_id' && key !== 'Date' && key !== '__v') {
                        acc[key] = ''; // Reset other fields
                    }
                    return acc;
                }, {} as PerformanceData) });
            setIsUpdating(false); // Reset to add mode after submission
        } catch (error) {
            console.error('Error adding/updating entry:', error);
        }
    };

    const renderTable = () => (
        <table>
            <thead>
            <tr>
                <th>Date</th>
                {data.length > 0 && Object.keys(data[0]).filter(key => key !== '_id' && key !== 'Date' && key !== '__v').map(key => (
                    <th key={key}>{key}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map(entry => (
                <tr key={entry._id}>
                    <td>{entry.Date}</td>
                    {Object.entries(entry).filter(([key]) => key !== '_id' && key !== 'Date' && key !== '__v').map(([key, value]) => (
                        <td key={key}>{value}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );

    const renderForm = () => (
        <form onSubmit={handleSubmit}>
            <input
                type="date"
                name="Date"
                value={newEntry.Date}
                onChange={handleInputChange}
                required
            />
            {data.length > 0 && Object.keys(data[0]).filter(key => key !== '_id' && key !== 'Date' && key !== '__v').map(key => (
                <input
                    key={key}
                    type="number"
                    name={key}
                    placeholder={key}
                    value={newEntry[key] as string}
                    onChange={handleInputChange}
                    required
                />
            ))}
            <button type="submit">{isUpdating ? 'Update Entry' : 'Add Entry'}</button> {/* Change button text */}
        </form>
    );

    return (
        <div>
            <h2>{`Performance Data - ${chartType.replace('-', ' ').toUpperCase()}`}</h2>
            {renderTable()}
            <h3>{isUpdating ? 'Update Entry' : 'Add New Entry'}</h3> {/* Change heading based on mode */}
            {renderForm()}
        </div>
    );
};

export default PerformanceTable;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface PerformanceData {
    _id?: string;
    Date: string;
    [key: string]: string | number;
}

interface PerformanceTableProps {
    chartType: 'value-eq' | 'short-term' | 'money-market';
}

const PerformanceTable: React.FC<PerformanceTableProps> = ({ chartType }) => {
    const [data, setData] = useState<PerformanceData[]>([]);
    const [newEntry, setNewEntry] = useState<PerformanceData>({ _id: '', Date: '' });

    useEffect(() => {
        fetchData();
    }, [chartType]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/performance-${chartType}`);
            setData(response.data);
            // Initialize newEntry with keys from the fetched data
            if (response.data.length > 0) {
                const initialEntry = { _id: '', Date: '', ...Object.keys(response.data[0]).reduce((acc, key) => {
                        if (key !== '_id' && key !== 'Date') {
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

        // Debugging: Log the newEntry state after each change
        console.log('Current newEntry state:', { ...newEntry, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const entryToSend = { ...newEntry };
            delete entryToSend._id; // Remove _id if present

            // Log the entry being sent for debugging
            console.log('Submitting entry:', entryToSend);

            await axios.post(`http://localhost:5000/api/performance-${chartType}`, entryToSend);
            await fetchData();
            // Reset newEntry to initial state after submission
            setNewEntry({ _id: '', Date: '', ...Object.keys(data[0]).reduce((acc, key) => {
                    if (key !== '_id' && key !== 'Date') {
                        acc[key] = ''; // Reset other fields
                    }
                    return acc;
                }, {} as PerformanceData) });
        } catch (error) {
            console.error('Error adding new entry:', error);
        }
    };

    const renderTable = () => (
        <table>
            <thead>
            <tr>
                <th>Date</th>
                {data.length > 0 && Object.keys(data[0]).filter(key => key !== '_id' && key !== 'Date').map(key => (
                    <th key={key}>{key}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map(entry => (
                <tr key={entry._id}>
                    <td>{entry.Date}</td>
                    {Object.entries(entry).filter(([key]) => key !== '_id' && key !== 'Date').map(([key, value]) => (
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
            {data.length > 0 && Object.keys(data[0]).filter(key => key !== '_id' && key !== 'Date').map(key => (
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
            <button type="submit">Add Entry</button>
        </form>
    );

    return (
        <div>
            <h2>{`Performance Data - ${chartType.replace('-', ' ').toUpperCase()}`}</h2>
            {renderTable()}
            <h3>Add New Entry</h3>
            {renderForm()}
        </div>
    );
};

export default PerformanceTable;
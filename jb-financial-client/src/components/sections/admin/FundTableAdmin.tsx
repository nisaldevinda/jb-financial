import React, { useState } from "react";

interface TableDataProps {
  headers: string[];
  rows: string[][];
}

const FundTableAdmin: React.FC<TableDataProps> = ({ headers, rows }) => {
  const [tableHeaders, setTableHeaders] = useState<string[]>(headers);
  const [tableRows, setTableRows] = useState<string[][]>(rows);
  const [date, setDate] = useState<string>("30th September 2024");

  const handleHeaderChange = (index: number, value: string) => {
    const newHeaders = [...tableHeaders];
    newHeaders[index] = value;
    setTableHeaders(newHeaders);
  };

  const handleCellChange = (
    rowIndex: number,
    cellIndex: number,
    value: string
  ) => {
    const newRows = [...tableRows];
    newRows[rowIndex][cellIndex] = value;
    setTableRows(newRows);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleSubmit = () => {
    // Placeholder for submission logic to the backend
    const updatedData = {
      headers: tableHeaders,
      rows: tableRows,
      date: date,
    };
    console.log("Submitting data to backend:", updatedData);
    // Here you can implement the submission logic with an API request
  };

  return (
    <div className="flex flex-col gap-6 md:gap-8 lg:gap-16">
      <h2 className={`subtitleText text-neutral-mid text-left`}>
        Fund Performance Summary
      </h2>
      <p className="bodyText">Edit fund performance summary table</p>

      <div className="flex flex-col gap-4">
        {/* Date Input */}
        <div className="flex gap-4 items-center">
          <label htmlFor="date" className="bodyText text-left">
            As at:
          </label>
          <input
            type="text"
            id="date"
            value={date}
            onChange={handleDateChange}
            className="switzer-r px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Table Editor */}
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="switzer-r min-w-full bg-white text-left border-collapse">
            <thead className="bg-gray-200">
              <tr>
                {tableHeaders.map((header, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 text-sm font-medium text-gray-700 uppercase tracking-wider border-b border-gray-300"
                  >
                    <input
                      type="text"
                      value={header}
                      onChange={(e) =>
                        handleHeaderChange(index, e.target.value)
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded-md"
                    />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tableRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-6 py-4 text-sm text-gray-700"
                    >
                      <input
                        type="text"
                        value={cell}
                        onChange={(e) =>
                          handleCellChange(rowIndex, cellIndex, e.target.value)
                        }
                        className="w-full px-2 py-1 border border-gray-300 rounded-md"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Submit Button */}
        <button onClick={handleSubmit} className="primary-button md:mt-4">
          Submit Changes
        </button>
      </div>
    </div>
  );
};

export default FundTableAdmin;

import React from "react";

interface TableDataProps {
  headers: string[];
  rows: string[][];
}

const FundTableSection: React.FC<TableDataProps> = ({ headers, rows }) => {
  return (
    <div className="bg-white px-4 py-8 md:px-8 lg:p-20 2xl:px-40 2xl:py-20 flex flex-col gap-6 md:gap-8 lg:gap-16">
      <h2 className={`subtitleText text-neutral-mid text-left`}>
        Fund performance summary
      </h2>
      <p className="bodyText text-left">
        As at :{" "}
        <span className="text-primary-900 switzer-md">30th September 2024</span>
      </p>

      {/* Outer div with overflow and width management */}
      <div className="w-full overflow-x-auto shadow-md rounded-sm md:rounded-lg">
        {/* Inner div with shadow, rounded corners and min-width */}
        <div className="min-w-max  rounded-lg">
          <table className="w-full bg-white text-left border-collapse switzer-r">
            <thead className="bg-gray-200">
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="px-2 md:px-6 py-3 md:py-6 switzer-sb text-xs md:text-base font-medium text-gray-700 uppercase tracking-wider border-b border-gray-300"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-2 md:px-6 py-3 md:py-6 text-neutral-mid text-xs md:text-base text-gray-700 whitespace-nowrap"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <p className="regularText text-left">
          Returns shown are after all taxes, fees and expenses and based on NAV
        </p>
        <p className="regularText text-left">
          All returns shown are annualized
        </p>
        <p className="regularText text-left">*SI – Since Inception</p>
        <p className="regularText text-left">
          **TER - Total Expense Ratio, and is calculated by dividing total fund
          costs by total fund assets.
        </p>
      </div>
    </div>
  );
};

export default FundTableSection;

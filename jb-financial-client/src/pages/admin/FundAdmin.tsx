import { Button, Label, TextInput, Datepicker, Table } from "flowbite-react";

const FundCard: React.FC<{
  title: string;
  subtitle: string;
  buyPrice2?: boolean;
  fundData: {
    date: string;
    buyPrice1: number;
    buyPrice2?: number;
    sellPrice: number;
    nav: number;
  }[];
}> = ({ title, subtitle, buyPrice2, fundData }) => {
  return (
    <div className="flex flex-col bg-[#fbfbfd] rounded-2xl border-2 border-solid border-gray-300 gap-8 pb-8">
      <div className="flex flex-col py-8 rounded-t-2xl shadow-md w-full">
        <span className="bodyText text-neutral-light text-center">{title}</span>
        <span className="switzer-sb text-lg md:text-2xl text-primary-900 text-center">
          {subtitle}
        </span>

        {/* Data Table */}
        <div className="p-4 md:p-8">
          <div className="flex flex-col overflow-x-auto">
            <Table className="switzer-r min-w-full">
              <Table.Head>
                <Table.HeadCell>Date</Table.HeadCell>
                <Table.HeadCell>BP1</Table.HeadCell>
                {buyPrice2 && <Table.HeadCell>BP2</Table.HeadCell>}
                <Table.HeadCell>SP</Table.HeadCell>
                <Table.HeadCell>NAV</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {fundData.map((data, index) => (
                  <Table.Row
                    key={index}
                    className={`${index === 0 ? "bg-neutral-lightest" : ""}`}
                  >
                    <Table.Cell className="table-cell-nowrap">
                      {data.date}
                    </Table.Cell>
                    <Table.Cell className="table-cell-nowrap">
                      {data.buyPrice1}
                    </Table.Cell>
                    {buyPrice2 && (
                      <Table.Cell className="table-cell-nowrap">
                        {data.buyPrice2}
                      </Table.Cell>
                    )}
                    <Table.Cell className="table-cell-nowrap">
                      {data.sellPrice}
                    </Table.Cell>
                    <Table.Cell className="table-cell-nowrap">
                      {data.nav}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8 flex flex-col gap-4">
        {/* Date Picker */}
        <div className="flex-grow">
          <div className="mb-2 block">
            <Label htmlFor="date" value="Select Date" className="switzer-md" />
          </div>
          <Datepicker weekStart={1} shadow className="switzer-r" />
        </div>

        {/* Buy Price 1 */}
        <div className="flex-grow">
          <div className="mb-2 block">
            <Label
              htmlFor="buyPrice1"
              value="Buy Price 1"
              className="switzer-md"
            />
          </div>
          <TextInput
            id="buyPrice1"
            type="number"
            required
            shadow
            className="switzer-r"
          />
        </div>

        {/* Conditional Buy Price 2 */}
        {buyPrice2 && (
          <div className="flex-grow">
            <div className="mb-2 block">
              <Label
                htmlFor="buyPrice2"
                value="Buy Price 2"
                className="switzer-md"
              />
            </div>
            <TextInput
              id="buyPrice2"
              type="number"
              required
              shadow
              className="switzer-r"
            />
          </div>
        )}

        {/* Sell Price */}
        <div className="flex-grow">
          <div className="mb-2 block">
            <Label
              htmlFor="sellPrice"
              value="Sell Price"
              className="switzer-md"
            />
          </div>
          <TextInput
            id="sellPrice"
            type="number"
            required
            shadow
            className="switzer-r"
          />
        </div>

        {/* Net Asset Value */}
        <div className="flex-grow">
          <div className="mb-2 block">
            <Label
              htmlFor="nav"
              value="Net Asset Value"
              className="switzer-md"
            />
          </div>
          <TextInput
            id="nav"
            type="number"
            required
            shadow
            className="switzer-r"
          />
        </div>

        {/* Submit Button */}
        <Button className="primary-button-2">Submit</Button>
      </div>
    </div>
  );
};

const ChartCard: React.FC<{
  title: string;
  subtitle: string;
  fundType: "Value Equity Fund" | "Money Market Fund" | "Short Term Gilt Fund";
  fundData: {
    date: string;
    performance1: number;
    performance2?: number;
    performance3?: number;
  }[];
  buyPrice2?: boolean;
}> = ({ title, subtitle, fundType, fundData, buyPrice2 }) => {
  // Define columns and labels based on the fundType
  let columns: string[];
  let labels: string[];


  switch (fundType) {
    case "Value Equity Fund":
      columns = ["JBVEF", "SPSL20 TRI", "ASTRI"];
      labels = ["JBVEF", "SPSL20 TRI", "ASTRI"];
      break;
    case "Money Market Fund":
      columns = ["JBMMF", "NDBIB", "AWFDR"];
      labels = ["JBMMF", "NDBIB CRISIL 90 DAY T-BILL INDEX", "AWFDR"];
      break;
    case "Short Term Gilt Fund":
      columns = ["JBGILT", "NDBIB", "T-BILL"];
      labels = ["JBGILT", "NDBIB CRISIL 90 DAY T-BILL INDEX", "T-BILL"];
      break;
    default:
      columns = [];
      labels = [];
  }

  return (
    <div className="flex flex-col bg-[#fbfbfd] rounded-2xl border-2 border-solid border-gray-300 gap-8 pb-8">
      <div className="flex flex-col py-8 rounded-t-2xl shadow-md w-full">
        <span className="bodyText text-neutral-light text-center">{title}</span>
        <span className="switzer-sb text-lg md:text-2xl text-primary-900 text-center">
          {subtitle}
        </span>

        {/* Data Table */}
        <div className="p-4 md:p-8">
          <div className="flex flex-col overflow-x-auto">
            <Table className="switzer-r min-w-full">
              <Table.Head>
                <Table.HeadCell>Date</Table.HeadCell>
                {columns.map((col, idx) => (
                  <Table.HeadCell key={idx}>{col}</Table.HeadCell>
                ))}
              </Table.Head>
              <Table.Body className="divide-y">
                {fundData.map((data, index) => (
                  <Table.Row
                    key={index}
                    className={`${index === 0 ? "bg-neutral-lightest" : ""}`}
                  >
                    <Table.Cell className="table-cell-nowrap">
                      {data.date}
                    </Table.Cell>
                    <Table.Cell className="table-cell-nowrap">
                      {data.performance1}%
                    </Table.Cell>
                    {buyPrice2 && (
                      <>
                        <Table.Cell className="table-cell-nowrap">
                          {data.performance2 ?? "-"}%
                        </Table.Cell>
                        <Table.Cell className="table-cell-nowrap">
                          {data.performance3 ?? "-"}%
                        </Table.Cell>
                      </>
                    )}
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8 flex flex-col gap-4">
        {/* Date Picker */}
        <div className="flex-grow">
          <div className="mb-2 block">
            <Label htmlFor="date" value="Select Date" className="switzer-md" />
          </div>
          <Datepicker weekStart={1} shadow className="switzer-r" />
        </div>

        {/* Performance Fields */}
        <div className="flex-grow">
          <div className="mb-2 block">
            <Label
              htmlFor="performance1"
              value={labels[0]}
              className="switzer-md"
            />
          </div>
          <TextInput
            id="performance1"
            type="number"
            required
            step="0.01"
            min="-100"
            max="100"
            shadow
            className="switzer-r"
          />
        </div>

        {buyPrice2 && (
          <>
            <div className="flex-grow">
              <div className="mb-2 block">
                <Label
                  htmlFor="performance2"
                  value={labels[1]}
                  className="switzer-md"
                />
              </div>
              <TextInput
                id="performance2"
                type="number"
                required
                step="0.01"
                min="-100"
                max="100"
                shadow
                className="switzer-r"
              />
            </div>

            <div className="flex-grow">
              <div className="mb-2 block">
                <Label
                  htmlFor="performance3"
                  value={labels[2]}
                  className="switzer-md"
                />
              </div>
              <TextInput
                id="performance3"
                type="number"
                required
                step="0.01"
                min="-100"
                max="100"
                shadow
                className="switzer-r"
              />
            </div>
          </>
        )}

        {/* Submit Button */}
        <Button className="primary-button-2">Submit</Button>
      </div>
    </div>
  );
};

function FundAdmin() {
  // Sample data for each fund
  const valueEquityFundData = [
    {
      date: "2024-08-12",
      buyPrice1: 123.45,
      buyPrice2: 122.45,
      sellPrice: 120.45,
      nav: 118.0,
    },
    {
      date: "2024-08-11",
      buyPrice1: 123.4,
      buyPrice2: 122.4,
      sellPrice: 120.4,
      nav: 118.1,
    },
    {
      date: "2024-08-10",
      buyPrice1: 123.3,
      buyPrice2: 122.3,
      sellPrice: 120.3,
      nav: 118.2,
    },
    {
      date: "2024-08-09",
      buyPrice1: 123.2,
      buyPrice2: 122.2,
      sellPrice: 120.2,
      nav: 118.3,
    },
    {
      date: "2024-08-08",
      buyPrice1: 123.1,
      buyPrice2: 122.1,
      sellPrice: 120.1,
      nav: 118.4,
    },
  ];

  const moneyMarketFundData = [
    { date: "2024-08-12", buyPrice1: 678.9, sellPrice: 670.8, nav: 665.0 },
    { date: "2024-08-11", buyPrice1: 678.8, sellPrice: 670.7, nav: 664.9 },
    { date: "2024-08-10", buyPrice1: 678.7, sellPrice: 670.6, nav: 664.8 },
    { date: "2024-08-09", buyPrice1: 678.6, sellPrice: 670.5, nav: 664.7 },
    { date: "2024-08-08", buyPrice1: 678.5, sellPrice: 670.4, nav: 664.6 },
  ];

  const shortTermGiltFundData = [
    { date: "2024-08-12", buyPrice1: 234.56, sellPrice: 230.45, nav: 229.0 },
    { date: "2024-08-11", buyPrice1: 234.5, sellPrice: 230.4, nav: 228.9 },
    { date: "2024-08-10", buyPrice1: 234.4, sellPrice: 230.3, nav: 228.8 },
    { date: "2024-08-09", buyPrice1: 234.3, sellPrice: 230.2, nav: 228.7 },
    { date: "2024-08-08", buyPrice1: 234.2, sellPrice: 230.1, nav: 228.6 },
  ];

  const valueEquityFundData2 = [
    {
      date: "2024-01-01",
      performance1: 12.34,
      performance2: 15.67,
      performance3: 8.9,
    },
    {
      date: "2024-02-01",
      performance1: 14.56,
      performance2: 16.78,
      performance3: 9.1,
    },
    {
      date: "2024-03-01",
      performance1: -5.23,
      performance2: 7.45,
      performance3: -2.34,
    },
    {
      date: "2024-04-01",
      performance1: 8.67,
      performance2: -1.23,
      performance3: 4.56,
    },
    {
      date: "2024-05-01",
      performance1: 10.12,
      performance2: 12.34,
      performance3: 6.78,
    },
  ];

  const moneyMarketFundData2 = [
    {
      date: "2024-01-01",
      performance1: 1.23,
      performance2: 2.34,
      performance3: 1.45,
    },
    {
      date: "2024-02-01",
      performance1: 1.56,
      performance2: 2.67,
      performance3: 1.78,
    },
    {
      date: "2024-03-01",
      performance1: -0.45,
      performance2: 1.34,
      performance3: -0.56,
    },
    {
      date: "2024-04-01",
      performance1: 1.89,
      performance2: 2.45,
      performance3: 1.23,
    },
    {
      date: "2024-05-01",
      performance1: 2.01,
      performance2: 1.78,
      performance3: 1.67,
    },
  ];

  const shortTermGiltFundData2 = [
    {
      date: "2024-01-01",
      performance1: 3.45,
      performance2: 2.56,
      performance3: 1.67,
    },
    {
      date: "2024-02-01",
      performance1: 3.78,
      performance2: 2.89,
      performance3: 1.9,
    },
    {
      date: "2024-03-01",
      performance1: -1.12,
      performance2: 1.45,
      performance3: -0.9,
    },
    {
      date: "2024-04-01",
      performance1: 2.34,
      performance2: 1.78,
      performance3: 1.23,
    },
    {
      date: "2024-05-01",
      performance1: 3.0,
      performance2: 2.12,
      performance3: 1.56,
    },
  ];
  return (
    <>
      <div className="w-full h-[72px]"></div>
      <section className="bg-white px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col gap-6 md:gap-16 items-center">
        <div className="flex flex-col gap-4">
          <h2 className={`subtitleText text-neutral-mid text-center`}>
            Fund Prices
          </h2>
          <p className={`bodyText text-center text-neutral-light`}>
            Add or update fund prices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 w-full">
          <FundCard
            title="JB Vantage"
            subtitle="Value Equity Fund"
            buyPrice2
            fundData={valueEquityFundData}
          />
          <FundCard
            title="JB Vantage"
            subtitle="Money Market Fund"
            fundData={moneyMarketFundData}
          />
          <FundCard
            title="JB Vantage"
            subtitle="Short Term Gilt Fund"
            fundData={shortTermGiltFundData}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className={`subtitleText text-neutral-mid text-center`}>
            Fund Charts
          </h2>
          <p className={`bodyText text-center text-neutral-light`}>
            Add or update values for charts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 w-full">
          {/* Value Equity Fund Card */}
          <ChartCard
            title="JB Vantage"
            subtitle="Value Equity Fund"
            fundType="Value Equity Fund"
            fundData={valueEquityFundData2}
            buyPrice2={true} // Adjust based on whether you need additional performance fields
          />

          {/* Money Market Fund Card */}
          <ChartCard
            title="JB Vantage"
            subtitle="Money Market Fund"
            fundType="Money Market Fund"
            fundData={moneyMarketFundData2}
            buyPrice2={true} // Adjust based on whether you need additional performance fields
          />

          {/* Short Term Gilt Fund Card */}
          <ChartCard
            title="JB Vantage"
            subtitle="Short Term Gilt Fund"
            fundType="Short Term Gilt Fund"
            fundData={shortTermGiltFundData2}
            buyPrice2={true} // Adjust based on whether you need additional performance fields
          />
        </div>
      </section>
    </>
  );
}

export default FundAdmin;

import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Label, TextInput, Datepicker, Table } from "flowbite-react";

// FundCard Component
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
  onSubmit: (data: {
    date: string;
    buyPrice1: number;
    buyPrice2?: number;
    sellPrice: number;
    nav: number;
  }) => void;
}> = ({ title, subtitle, buyPrice2, fundData, onSubmit }) => {
  const [formData, setFormData] = useState({
    date: "",
    buyPrice1: 0,
    buyPrice2: 0,
    sellPrice: 0,
    nav: 0,
  });

  interface DatePickerProps {
    onChange: (selectedDate: Date | null) => void;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: Number(value) });
  };

  const handleDateChange: DatePickerProps["onChange"] = (selected) => {
    if (selected) {
      const year = selected.getFullYear();
      const month = String(selected.getMonth() + 1).padStart(2, '0');
      const day = String(selected.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      console.log(formattedDate);
      setFormData(prevData => ({ ...prevData, date: formattedDate }));
    } else {
      setFormData(prevData => ({ ...prevData, date: "" }));
    }
  };

  const handleSubmit = () => {
    const submissionData = {
      ...formData,
      date: formData.date,
    };
    onSubmit(submissionData);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

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
                          {formatDate(data.date)}
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
            <Datepicker
                weekStart={1}
                shadow
                className="switzer-r"
                onSelectedDateChanged={handleDateChange}
            />
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
                onChange={handleChange}
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
                    onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <Button className="primary-button-2" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
  );
};

// ChartCard Component
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
  onSubmit: (data: {
    date: string;
    performance1: number;
    performance2?: number;
    performance3?: number;
  }) => void;
}> = ({ title, subtitle, fundType, fundData, buyPrice2, onSubmit }) => {
  const [formData, setFormData] = useState({
    date: "",
    performance1: 0,
    performance2: 0,
    performance3: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: Number(value) });
  };

  interface DatePickerProps {
    onChange: (selectedDate: Date | null) => void;
  }

  const handleDateChange: DatePickerProps["onChange"] = (selected) => {
    const date = selected ? selected.toLocaleDateString().split("T")[0] : "";
    console.log(date);
    setFormData({ ...formData, date });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

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
                          {data.performance1}
                        </Table.Cell>
                        {buyPrice2 && (
                            <Table.Cell className="table-cell-nowrap">
                              {data.performance2}
                            </Table.Cell>
                        )}
                        {buyPrice2 && (
                            <Table.Cell className="table-cell-nowrap">
                              {data.performance3}
                            </Table.Cell>
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
            <Datepicker
                weekStart={1}
                shadow
                className="switzer-r"
                onSelectedDateChanged={handleDateChange}
            />
          </div>

          {/* Performance Inputs */}
          {columns.map((col, idx) => (
              <div className="flex-grow" key={idx}>
                <div className="mb-2 block">
                  <Label
                      htmlFor={`performance${idx + 1}`}
                      value={`${labels[idx]}`}
                      className="switzer-md"
                  />
                </div>
                <TextInput
                    id={`performance${idx + 1}`}
                    type="number"
                    required
                    shadow
                    className="switzer-r"
                    onChange={handleChange}
                />
              </div>
          ))}

          {/* Submit Button */}
          <Button className="primary-button-2" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
  );
};

// Main FundAdmin Component
const FundAdmin: React.FC = () => {
  const [valueEquityFundData, setValueEquityFundData] = useState([]);
  const [moneyMarketFundData, setMoneyMarketFundData] = useState([]);
  const [shortTermGiltFundData, setShortTermGiltFundData] = useState([]);

  useEffect(() => {
    // Fetch data on component mount
    const fetchData = async () => {
      try {
        const valueEquityResponse = await axios.get(
            "http://localhost:5000/funds/Value Equity Fund"
        );
        setValueEquityFundData(valueEquityResponse.data);

        const moneyMarketResponse = await axios.get(
            "http://localhost:5000/funds/Money Market Fund"
        );
        setMoneyMarketFundData(moneyMarketResponse.data);

        const shortTermGiltResponse = await axios.get(
            "http://localhost:5000/funds/Short Term Gilt Fund"
        );
        setShortTermGiltFundData(shortTermGiltResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (data, fundType) => {
    try {
      await axios.post("http://localhost:5000/funds", { ...data, type: fundType });
      alert("Data updated successfully!");

      // Re-fetch data to update the UI
      const fetchData = async () => {
        const valueEquityResponse = await axios.get(
            "http://localhost:5000/funds/Value Equity Fund"
        );
        setValueEquityFundData(valueEquityResponse.data);

        const moneyMarketResponse = await axios.get(
            "http://localhost:5000/funds/Money Market Fund"
        );
        setMoneyMarketFundData(moneyMarketResponse.data);

        const shortTermGiltResponse = await axios.get(
            "http://localhost:5000/funds/Short Term Gilt Fund"
        );
        setShortTermGiltFundData(shortTermGiltResponse.data);
      };

      fetchData();
    } catch (error) {
      console.error("Error updating data", error);
    }
  };

  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
        <FundCard
            title="Fund Data Table"
            subtitle="JB VEF"
            buyPrice2
            fundData={valueEquityFundData}
            onSubmit={(data) => handleSubmit(data, "Value Equity Fund")}
        />
        <FundCard
            title="Fund Data Table"
            subtitle="Money Market Fund"
            fundData={moneyMarketFundData}
            onSubmit={(data) => handleSubmit(data, "Money Market Fund")}
        />
        <FundCard
            title="Fund Data Table"
            subtitle="Short Term Gilt Fund"
            fundData={shortTermGiltFundData}
            onSubmit={(data) => handleSubmit(data, "Short Term Gilt Fund")}
        />
        <ChartCard
            title="Fund Performance"
            subtitle="JBVEF"
            fundType="Value Equity Fund"
            fundData={valueEquityFundData}
            buyPrice2
            onSubmit={(data) => handleSubmit(data, "Value Equity Fund")}
        />
        <ChartCard
            title="Fund Performance"
            subtitle="Money Market Fund"
            fundType="Money Market Fund"
            fundData={moneyMarketFundData}
            onSubmit={(data) => handleSubmit(data, "Money Market Fund")}
        />
        <ChartCard
            title="Fund Performance"
            subtitle="Short Term Gilt Fund"
            fundType="Short Term Gilt Fund"
            fundData={shortTermGiltFundData}
            onSubmit={(data) => handleSubmit(data, "Short Term Gilt Fund")}
        />
      </div>
  );
};

export default FundAdmin;

import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../../Constants.tsx";

interface FundYtdAdminProps {}

const FundYtdAdmin: React.FC<FundYtdAdminProps> = () => {
  const [fundData, setFundData] = useState({
    valueEquityFund: "",
    moneyMarketFund: "",
    moneyMarketFundDate: "",
    shortTermGiltFund: "",
    shortTermGiltFundDate: "",
  });

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${SERVER_URL}/api/fundYTDScheme-performance`
        );
        setFundData(response.data);
      } catch (error) {
        console.error("Error fetching fund data:", error);
      }
    };
    fetchData();
  }, []);

  // Handle form submission
  const handleSubmit = async () => {
    try {
      await axios.put(`${SERVER_URL}/api/fundYTDScheme-performance`, fundData);
      alert("Fund data updated successfully");
    } catch (error) {
      console.error("Error updating fund data:", error);
    }
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFundData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-6 md:gap-8 lg:gap-16">
      <h2 className="subtitleText text-neutral-mid text-left">Fund YTD</h2>
      <p className="bodyText text-neutral-mid">
        Update the Fund YTD Return Value and Date
      </p>
      <div className="flex gap-4 md:gap-8">
        <div className="bg-[#fbfbfd] p-4 border border-neutral-lighter rounded shadow-sm flex flex-col flex-grow gap-4">
          <p className="bodyText text-neutral-mid">Value Equity Fund</p>
          <input
            name="valueEquityFund"
            value={fundData.valueEquityFund}
            onChange={handleChange}
            placeholder="Value Equity Fund percentage"
            type="text"
            className="switzer-r border border-neutral-lighter rounded-lg text-sm w-fit"
          />
        </div>
        <div className="bg-[#fbfbfd] p-4 border border-neutral-lighter rounded shadow-sm flex flex-col flex-grow gap-4">
          <p className="bodyText text-neutral-mid">Money Market Fund</p>
          <input
            name="moneyMarketFund"
            value={fundData.moneyMarketFund}
            onChange={handleChange}
            placeholder="Money Market Fund percentage"
            type="text"
            className="switzer-r border border-neutral-lighter rounded-lg text-sm w-fit"
          />
          <input
            name="moneyMarketFundDate"
            value={fundData.moneyMarketFundDate}
            onChange={handleChange}
            placeholder="Money Market Fund Date"
            type="text"
            className="switzer-r border border-neutral-lighter rounded-lg text-sm w-fit"
          />
        </div>
        <div className="bg-[#fbfbfd] p-4 border border-neutral-lighter rounded shadow-sm flex flex-col flex-grow gap-4">
          <p className="bodyText text-neutral-mid">Short Term Gilt Fund</p>
          <input
            name="shortTermGiltFund"
            value={fundData.shortTermGiltFund}
            onChange={handleChange}
            placeholder="Short Term Gilt Fund percentage"
            type="text"
            className="switzer-r border border-neutral-lighter rounded-lg text-sm w-fit"
          />
          <input
            name="shortTermGiltFundDate"
            value={fundData.shortTermGiltFundDate}
            onChange={handleChange}
            placeholder="Short Term Gilt Fund Date"
            type="text"
            className="switzer-r border border-neutral-lighter rounded-lg text-sm w-fit"
          />
        </div>
      </div>
      <button className="primary-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FundYtdAdmin;

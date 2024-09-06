import React, { useEffect, useState } from "react";
import { UnitTrustCard, unitTrustCardData } from "../cards/UnitTrustCard";
import { FundPriceCard } from "../cards/FundPriceCard";
import { BlogCard } from "../cards/BlogCard";
import { TeamCard, teamCardData } from "../cards/TeamCard";
import { ContactCard, contactCardData } from "../cards/ContactCard";
import { SERVER_URL } from "../../Constants";
import axios from "axios";

interface ColumnsSectionProps {
  subtitleText: string;
  bodyText?: string;
  buttonText?: string;
  buttonType?: "primary" | "secondary";
  buttonLink?: string;
  cardType: string;
  alignText?: "left" | "center";
}

const cardDataMapping: Record<string, any[]> = {
  unitTrust: unitTrustCardData,
  contact: contactCardData,
  team: teamCardData,
};

const cardComponentMapping: Record<string, React.FC<any>> = {
  unitTrust: UnitTrustCard,
  fundPrice: FundPriceCard,
  contact: ContactCard,
  blog: BlogCard,
  team: TeamCard,
};

const ColumnsSection: React.FC<ColumnsSectionProps> = ({
  subtitleText,
  bodyText,
  buttonText,
  buttonType = "secondary",
  buttonLink,
  cardType,
  alignText = "center",
}) => {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (cardType === "fundPrice") {
        try {
          const [
            valueEquityResponse,
            moneyMarketResponse,
            shortTermGiltResponse,
          ] = await Promise.all([
            axios.get(`${SERVER_URL}/funds/Value Equity Fund`),
            axios.get(`${SERVER_URL}/funds/Money Market Fund`),
            axios.get(`${SERVER_URL}/funds/Short Term Gilt Fund`),
          ]);

          const fundData = [
            mapFundData(valueEquityResponse.data, "Value Equity Fund"),
            mapFundData(moneyMarketResponse.data, "Money Market Fund"),
            mapFundData(shortTermGiltResponse.data, "Short Term Gilt Fund"),
          ];

          setCards(fundData);
        } catch (error) {
          console.error("Error fetching fund data:", error);
          setCards([]);
        }
      } else if (cardType === "blog") {
        const response = await fetch(`${SERVER_URL}/api/blogs`);
        const data = await response.json();
        setCards(data);
      } else {
        const data = cardDataMapping[cardType];
        setCards(data || []);
      }
    };

    fetchData();
  }, [cardType]);

  const mapFundData = (data: any[], fundType: string) => {
    // Sort the data by date in descending order
    const sortedData = data.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Use the most recent entry (first after sorting)
    const latestData = sortedData[0];
    console.log(latestData);

    return {
      buyPrices: [latestData.buyPrice1, latestData.buyPrice2].filter(Boolean), // Filter out undefined or null values
      link: "/learn-more",
      sellPrice: latestData.sellPrice,
      nav: latestData.nav, // Add nav to the returned object
      showSecondBuyPrice: !!latestData.buyPrice2,
      subtitle: fundType,
      title: "JB Vantage",
      _id: latestData._id,
    };
  };

  const applyPrimaryTextClass = (text: string) => {
    const words = text.split(" ");
    return (
      <>
        {words.map((word, index) =>
          word.includes("*") ? (
            <span key={index} className="primaryText">
              {word.replace("*", "")}
            </span>
          ) : (
            <span key={index}>{word} </span>
          )
        )}
      </>
    );
  };

  const CardComponent = cardComponentMapping[cardType] || (() => null);

  return (
    <section
      className={`bg-white px-4 py-8 md:px-8 lg:p-20 xl:px-40 2xl:py-20 flex flex-col gap-6 md:gap-8 lg:gap-16 items-${alignText}`}
    >
      <h2 className={`subtitleText text-neutral-mid text-${alignText}`}>
        {applyPrimaryTextClass(subtitleText)}
      </h2>
      {bodyText && <p className={`bodyText text-${alignText}`}>{bodyText}</p>}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12 w-full">
        {cards.map((card, index) => {
          return <CardComponent key={index} {...card} />;
        })}
      </div>
      {buttonText && (
        <a
          href={buttonLink}
          rel="noopener noreferrer"
          className="w-full text-center"
        >
          <button className={`${buttonType}-button text-${alignText}`}>
            {buttonText}
          </button>
        </a>
      )}
    </section>
  );
};

export default ColumnsSection;

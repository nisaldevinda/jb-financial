import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  link: string;
  buyPrices: number[]; // Array to accommodate one or more buy prices
  sellPrice: number;
  showSecondBuyPrice?: boolean; // Optional flag to show the second buy price
}

const fundPriceCardData: CardProps[] = [
  {
    title: "JB Vantage",
    subtitle: "Value Equity Fund",
    link: "/learn-more",
    buyPrices: [123.45, 122.45], // Two buy prices for Value Equity Fund
    sellPrice: 120.45,
    showSecondBuyPrice: true,
  },
  {
    title: "JB Vantage",
    subtitle: "Money Market Fund",
    link: "/learn-more",
    buyPrices: [678.9], // Single buy price for other funds
    sellPrice: 670.8,
  },
  {
    title: "JB Vantage",
    subtitle: "Short Term Gilt Fund",
    link: "/learn-more",
    buyPrices: [234.56],
    sellPrice: 230.45,
  },
];

const FundPriceCard: React.FC<CardProps> = ({
  title,
  subtitle,
  link,
  buyPrices,
  sellPrice,
  showSecondBuyPrice = false, // Default to false if not provided
}) => {
  return (
    <div className="flex flex-col bg-[#fbfbfd] rounded-2xl border-2 border-solid border-gray-300 gap-8 pb-8">
      <div className="flex flex-col py-8 rounded-t-2xl shadow-md w-full">
        <span className="bodyText text-neutral-light text-center">{title}</span>
        <span className="switzer-sb text-lg md:text-2xl text-primary-900 text-center">
          {subtitle}
        </span>
      </div>

      {/* Conditionally render buy prices */}
      <div
        className={`flex ${
          showSecondBuyPrice
            ? "gap-4 md:gap-8 justify-center"
            : "justify-center"
        }`}
      >
        <div>
          <p className="switzer-sb text-base uppercase text-neutral-mid text-center">
            Buy Price {showSecondBuyPrice ? "1" : ""}
          </p>
          <h4 className="zodiak-r text-[40px] text-center text-primary-900">
            <span className="switzer-md text-xl">LKR</span>
            {buyPrices[0].toFixed(2)}
          </h4>
        </div>

        {showSecondBuyPrice && (
          <div>
            <p className="switzer-sb text-base uppercase text-neutral-mid text-center">
              Buy Price 2
            </p>
            <h4 className="zodiak-r text-[40px] text-center text-primary-900">
              <span className="switzer-md text-xl">LKR</span>
              {buyPrices[1].toFixed(2)}
            </h4>
          </div>
        )}
      </div>

      {/* For Both */}
      <div>
        <p className="switzer-sb text-base uppercase text-neutral-mid text-center">
          Sell Price
        </p>
        <h4 className="zodiak-r text-[40px] text-center text-neutral-mid">
          <span className="switzer-md text-xl">LKR</span>
          {sellPrice.toFixed(2)}
        </h4>
      </div>

      {/* For Both */}
      <div>
        <p className="switzer-sb text-base uppercase text-neutral-mid text-center">
          Net Asset Value
        </p>
        <h4 className="zodiak-r text-[40px] text-center text-neutral-mid">
          <span className="switzer-md text-xl">LKR</span>
          {sellPrice.toFixed(2)}
        </h4>
      </div>

      <a
        href={link}
        className="switzer-md text-center text-neutral-light hover:text-neutral-mid"
      >
        Learn More &nbsp;→
      </a>
    </div>
  );
};

export { FundPriceCard, fundPriceCardData };

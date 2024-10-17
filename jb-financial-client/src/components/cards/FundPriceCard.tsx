import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  link: string;
  buyPrices: number[]; // Array to accommodate one or more buy prices
  sellPrice: number;
  nav?: number; // Make nav optional for conditional rendering
  showSecondBuyPrice?: boolean; // Optional flag to show the second buy price
}

const FundPriceCard: React.FC<CardProps> = ({
  title,
  subtitle,
  link,
  buyPrices,
  sellPrice,
  nav, // Nav is destructured here
  showSecondBuyPrice = false, // Default to false if not provided
}) => {
  return (
    <div className="flex flex-col bg-[#fbfbfd] rounded-2xl border-2 border-solid border-gray-300 gap-8 pb-8">
      <div className="flex flex-col p-8 rounded-t-2xl shadow-md w-full">
        <span className="bodyText text-neutral-light text-center">{title}</span>
        <span className="switzer-sb text-lg md:text-2xl text-primary-900 text-center">
          {subtitle}
        </span>
      </div>

      {/* Conditionally render buy prices */}
      <div
        className={`flex flex-wrap ${
          showSecondBuyPrice
            ? "gap-4 md:gap-8 justify-center"
            : "justify-center"
        }`}
      >
        {buyPrices.length > 0 && (
          <div className="flex-1 min-w-[200px]">
            <p className="switzer-sb text-base uppercase text-neutral-mid text-center">
              Buy Price {showSecondBuyPrice ? "1" : ""}
            </p>
            <h4 className="zodiak-r text-[40px] text-center text-primary-900">
              <span className="switzer-md text-xl">LKR</span>
              {buyPrices[0].toFixed(2)}
            </h4>
          </div>
        )}

        {showSecondBuyPrice && buyPrices[1] !== undefined && (
          <div className="flex-1 min-w-[200px]">
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

      {/* Sell Price and Net Asset Value in one row */}
      <div className="flex justify-center gap-8 mt-4">
        <div className="flex-1 min-w-[200px]">
          <p className="switzer-sb text-base uppercase text-neutral-mid text-center">
            Sell Price
          </p>
          <h4 className="zodiak-r text-[40px] text-center text-neutral-mid">
            <span className="switzer-md text-xl">LKR</span>
            {sellPrice.toFixed(2)}
          </h4>
        </div>

        {nav !== undefined && (
          <div className="flex-1 min-w-[200px]">
            <p className="switzer-sb text-base uppercase text-neutral-mid text-center">
              Net Asset Value
            </p>
            <h4 className="zodiak-r text-[40px] text-center text-neutral-mid">
              <span className="switzer-md text-xl">LKR</span>
              {nav.toFixed(2)}
            </h4>
          </div>
        )}
      </div>

      {/* Link to learn more */}
      <a
        href={link}
        className="switzer-md text-center text-neutral-light hover:text-neutral-mid"
      >
        Learn More &nbsp;→
      </a>
    </div>
  );
};

export { FundPriceCard };

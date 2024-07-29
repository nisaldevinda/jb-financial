import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  link: string;
  buyPrice: number;
  sellPrice: number;
}

const fundPriceCardData: CardProps[] = [
  {
    title: "JB Vantage",
    subtitle: "Value Equity Fund",
    link: "/learn-more",
    buyPrice: 123.45,
    sellPrice: 120.45,
  },
  {
    title: "JB Vantage",
    subtitle: "Money Market Fund",
    link: "/learn-more",
    buyPrice: 678.9,
    sellPrice: 670.8,
  },
  {
    title: "JB Vantage",
    subtitle: "Short Term Gilt Fund",
    link: "/learn-more",
    buyPrice: 234.56,
    sellPrice: 230.45,
  },
];

const FundPriceCard: React.FC<CardProps> = ({
  title,
  subtitle,
  link,
  buyPrice,
  sellPrice,
}) => {
  return (
    <div className="flex flex-col bg-[#fbfbfd] rounded-2xl border-2 border-solid border-gray-300 gap-8 p-8 ">
      <div className="flex flex-col pb-8 rounded-t-2xl shadow-sm">
        <span className="bodyText text-neutral-light text-center">{title}</span>
        <span className="switzer-sb text-lg md:text-2xl text-primary-900 text-center">
          {subtitle}
        </span>
      </div>
      <h4 className="zodiak-r text-[40px] text-center text-primary-900">
        <span className="switzer-md text-xl">LKR</span>
        {buyPrice.toFixed(2)}
      </h4>
      <div>
        <p className="switzer-sb text-base uppercase text-neutral-mid text-center">
          Sell Price
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

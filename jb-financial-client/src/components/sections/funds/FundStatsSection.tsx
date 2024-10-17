import React, { useState } from "react";

interface FundStatsSectionProps {
  objective: string;
  strategy: string;
  benchmark: string;
  investment: string;
  investmentTooltip?: string;
  fundSize: string;
  totalRatio: string;
}

const CustomTooltip: React.FC<{ text: string; children: React.ReactNode }> = ({
  text,
  children,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className="absolute z-10 w-48 px-2 py-1 -mt-1 text-sm text-white transform -translate-x-1/2 translate-y-full bg-neutral-dark w-fit rounded-md left-1/2 bottom-0">
          {text}
          <div className="absolute bottom-full left-1/2 -ml-1 border-4 border-transparent border-b-gray-800" />
        </div>
      )}
    </div>
  );
};

const FundStatsSection: React.FC<FundStatsSectionProps> = ({
  objective,
  strategy,
  benchmark,
  investment,
  investmentTooltip,
  fundSize,
  totalRatio,
}) => {
  const InvestmentContent = () => {
    if (investmentTooltip) {
      return (
        <CustomTooltip text={investmentTooltip}>
          <span className="switzer-sb text-neutral-dark text-sm md:text-2xl cursor-help">
            {investment}
          </span>
        </CustomTooltip>
      );
    }
    return (
      <span className="switzer-sb text-neutral-dark text-sm md:text-2xl">
        {investment}
      </span>
    );
  };

  return (
    <section className="bg-white px-4 pt-0 pb-8 md:px-8 lg:px-20 md:pt-0 md:pb-20 2xl:px-40 2xl:pt-0 2xl:pb-20 flex flex-col md:flex-row gap-6 md:gap-16">
      <div className="w-full md:w-1/4 hidden lg:block"></div>
      <div className="w-full lg:w-3/4 flex flex-col gap-4 md:gap-10 justify-center">
        <div className="flex justify-between border-y border-neutral-light">
          <p className="switzer-sb text-neutral-light text-sm md:text-2xl px-4 py-2">
            Objective
          </p>
          <p className="switzer-sb text-neutral-dark text-sm md:text-2xl px-4 py-2 text-right">
            {objective}
          </p>
        </div>
        <div className="flex justify-between border-y border-neutral-light">
          <p className="switzer-sb text-neutral-light text-sm md:text-2xl px-4 py-2">
            Strategy
          </p>
          <p className="switzer-sb text-neutral-dark text-sm md:text-2xl px-4 py-2 text-right">
            {strategy}
          </p>
        </div>
        <div className="flex justify-between border-y border-neutral-light">
          <p className="switzer-sb text-neutral-light text-sm md:text-2xl px-4 py-2">
            Benchmark
          </p>
          <p className="switzer-sb text-neutral-dark text-sm md:text-2xl px-4 py-2 text-right">
            {benchmark}
          </p>
        </div>
        <div className="flex justify-between border-y border-neutral-light">
          <p className="switzer-sb text-neutral-light text-sm md:text-2xl px-4 py-2">
            Investment Style
          </p>
          <div className="px-4 py-2 text-right">
            <InvestmentContent />
          </div>
        </div>
        <div className="flex justify-between border-y border-neutral-light">
          <p className="switzer-sb text-neutral-light text-sm md:text-2xl px-4 py-2">
            Fund Size
          </p>
          <p className="switzer-sb text-neutral-dark text-sm md:text-2xl px-4 py-2 text-right">
            {fundSize}
          </p>
        </div>
        <div className="flex justify-between border-y border-neutral-light">
          <p className="switzer-sb text-neutral-light text-sm md:text-2xl px-4 py-2">
            Total Expense Ratio
          </p>
          <p className="switzer-sb text-neutral-dark text-sm md:text-2xl px-4 py-2 text-right">
            {totalRatio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FundStatsSection;

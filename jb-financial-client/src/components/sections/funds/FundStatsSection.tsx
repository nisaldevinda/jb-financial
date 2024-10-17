import React from "react";

interface FundStatsSectionProps {
  objective: string;
  strategy: string;
  benchmark: string;
  investment: string;
  fundSize: string;
  totalRatio: string;
}

const FundStatsSection: React.FC<FundStatsSectionProps> = ({
  objective,
  strategy,
  benchmark,
  investment,
  fundSize,
  totalRatio,
}) => {
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
          <p className="switzer-sb text-neutral-dark text-sm md:text-2xl px-4 py-2 text-right">
            {investment}
          </p>
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

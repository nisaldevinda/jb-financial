import React from "react";

interface FundStatsSectionProps {
  objective: string;
  strategy: string;
  benchmark: string;
  investment: string;
}

const FundStatsSection: React.FC<FundStatsSectionProps> = ({
  objective,
  strategy,
  benchmark,
  investment,
}) => {
  return (
    <section className="bg-white px-4 pt-0 pb-8 md:px-20 md:pt-0 md:pb-20 2xl:px-40 2xl:pt-0 2xl:pb-20 flex flex-col md:flex-row gap-6 md:gap-16">
      <div className="w-full md:w-1/4"></div>
      <div className="w-full md:w-3/4 flex flex-col gap-4 md:gap-10 justify-center">
        <div className="flex justify-between border-y border-neutral-light">
          <p className="switzer-sb text-neutral-light text-sm md:text-2xl px-4 py-2">
            Objective
          </p>
          <p className="switzer-sb text-neutral-dark text-sm md:text-2xl px-4 py-2">
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
          <p className="switzer-sb text-neutral-dark text-sm md:text-2xl px-4 py-2">
            {benchmark}
          </p>
        </div>
        <div className="flex justify-between border-y border-neutral-light">
          <p className="switzer-sb text-neutral-light text-sm md:text-2xl px-4 py-2">
            Investment
          </p>
          <p className="switzer-sb text-neutral-dark text-sm md:text-2xl px-4 py-2">
            {investment}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FundStatsSection;

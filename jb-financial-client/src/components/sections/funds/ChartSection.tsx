import React from "react";

interface ChartSectionProps {
  groups: Array<{ title: string; description: string }>;
  mainTitle?: string;
  mainDescription?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const ChartSection: React.FC<ChartSectionProps> = ({ groups }) => {
  return (
    <section className="bg-white px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col md:flex-row gap-16">
      <div className="flex flex-col justify-center gap-12 w-full md:w-[60%]">
        <img src="/chart-demo.jpg" alt="" />
      </div>
      <div className="w-full md:w-[40%] flex flex-col gap-4 md:gap-16 justify-center">
        {groups.map((group, index) => (
          <div key={index}>
            {group.title && (
              <h2 className="subtitleText text-primary-900">{group.title}</h2>
            )}
            {group.description && (
              <p className="text-base md:text-2xl switzer-sb w-[80%]">
                {group.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChartSection;

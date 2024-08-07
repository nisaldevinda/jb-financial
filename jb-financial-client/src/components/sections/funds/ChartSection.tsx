import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

// Register all necessary components
Chart.register(...registerables);

interface ChartSectionProps {
  groups: Array<{ title: string; description: string }>;
  mainTitle?: string;
  mainDescription?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const ChartSection: React.FC<ChartSectionProps> = ({ groups }) => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/chartdata.json");
      const data = await response.json();
      const labels = data.data.map((item: any) => item.Date);
      const jbvefData = data.data.map((item: any) => item.JBVEF);
      const spsl20triData = data.data.map((item: any) => item.SPSL20TRI);
      const astriData = data.data.map((item: any) => item.ASTRI);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "JBVEF",
            data: jbvefData,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,
          },
          {
            label: "SPSL20TRI",
            data: spsl20triData,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: true,
          },
          {
            label: "ASTRI",
            data: astriData,
            borderColor: "rgba(153, 102, 255, 1)",
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            fill: true,
          },
        ],
      });
    };

    fetchData();

    // Cleanup function to avoid memory leaks
    return () => {
      setChartData(null);
    };
  }, []);

  return (
    <section className="bg-white px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col md:flex-row gap-16">
      <div className="flex flex-col justify-center gap-12 w-full md:w-[60%]">
        {chartData && <Line data={chartData} />}
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

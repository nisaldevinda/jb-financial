import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables, ChartData, ChartOptions } from "chart.js";

// Register all necessary components
Chart.register(...registerables);

interface FundChart2Props {
  groups: Array<{ title: string; description: string }>;
  mainTitle?: string;
  mainDescription?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const FundChart2: React.FC<FundChart2Props> = ({ groups }) => {
  const [chartData, setChartData] = useState<ChartData<"line"> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/chartData2.json");
      const data = await response.json();
      const labels = data.data.map((item: any) => item.Date);
      const jbvefData = data.data.map((item: any) => item.JBMMF);
      const spsl20triData = data.data.map((item: any) => item.NDBIB);
      const astriData = data.data.map((item: any) => item.AWFDR);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "JBMMF",
            data: jbvefData,
            borderColor: "#930010",
            backgroundColor: "rgba(147, 0, 16, 0.2)",
            fill: true,
          },
          {
            label: "NDBIB CRISIL 90 DAY T-BILL INDEX",
            data: spsl20triData,
            borderColor: "#444444",
            backgroundColor: "rgba(68, 68, 68, 0.2)",
            fill: true,
          },
          {
            label: "AWFDR",
            data: astriData,
            borderColor: "#AAAAAA",
            backgroundColor: "rgba(170, 170, 170, 0.2)",
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

  const chartOptions: ChartOptions<"line"> = {
    scales: {
      x: {
        ticks: {
          callback: function (value, index) {
            return index % 3 === 0
              ? this.getLabelForValue(value as number)
              : "";
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function (tooltipItems) {
            return tooltipItems[0].label || "";
          },
        },
      },
    },
  };

  return (
    <section className="bg-white px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col md:flex-row gap-16">
      <div className="flex flex-col justify-center gap-12 w-full md:w-[60%]">
        {chartData && <Line data={chartData} options={chartOptions} />}
      </div>
      <div className="w-full md:w-[40%] flex flex-col gap-4 md:gap-16 justify-center">
        {groups.map((group, index) => (
          <div key={index}>
            {group.title && (
              <h2 className="subtitleText text-primary-900">{group.title}</h2>
            )}
            {group.description && (
              <p className="text-base md:text-2xl text-neutral-dark switzer-md w-[80%]">
                {group.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FundChart2;

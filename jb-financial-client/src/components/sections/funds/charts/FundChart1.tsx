import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables, ChartData, ChartOptions } from "chart.js";
import { SERVER_URL } from "../../../../Constants.tsx";

// Register all necessary components
Chart.register(...registerables);

interface FundChart1Props {
  groups: Array<{ title: string; description: string }>;
  mainTitle?: string;
  mainDescription?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const FundChart1: React.FC<FundChart1Props> = ({ groups }) => {
  const [chartData, setChartData] = useState<ChartData<"line"> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${SERVER_URL}/export-json-value-equity`);
      const data = await response.json();
      const labels = data.data.map((item: any) => item.Date);
      const jbvefData = data.data.map((item: any) => item.JBVEF);
      const spsl20triData = data.data.map((item: any) => item.SPSL20TRI);
      // const astriData = data.data.map((item: any) => item.ASTRI);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "JBVEF",
            data: jbvefData,
            borderColor: "#930010",
            fill: true,
            pointRadius: 2,
          },
          {
            label: "SPSL20TRI",
            data: spsl20triData,
            borderColor: "#444444",
            fill: true,
          },
          // {
          //   label: "ASTRI",
          //   data: astriData,
          //   borderColor: "#AAAAAA",
          //   fill: true,
          // },
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
        title: {
          display: true,
          text: "Date",
          font: {
            size: 12,
            family: "Switzer-Semibold",
          },
        },
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: true, // Automatically skip labels to prevent overlap
          maxTicksLimit: 10, // Limit the number of ticks displayed
          callback: function (value, index) {
            const date = new Date(this.getLabelForValue(value as number));
            return index % 3 === 0
              ? new Intl.DateTimeFormat("en", {
                  year: "numeric",
                  month: "short",
                }).format(date)
              : "";
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Return Percentage (%)",
          font: {
            size: 12,
            family: "Switzer-Semibold",
          },
        },
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            return `${value}%`;
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
    <section className="bg-white px-4 py-8 md:p-8 lg:px-20 2xl:px-40 2xl:py-20 flex flex-col lg:flex-row gap-16">
      <div className="flex flex-col justify-center gap-12 w-full lg:w-[60%]">
        {chartData && (
          <Line data={chartData} options={chartOptions} className="" />
        )}
      </div>
      <div className="w-full lg:w-[40%] flex flex-col gap-4 md:gap-16 justify-center">
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

export default FundChart1;

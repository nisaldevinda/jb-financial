import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables, ChartData, ChartOptions } from "chart.js";
import { SERVER_URL } from "../../../../Constants.tsx";

// Register all necessary components
Chart.register(...registerables);

interface FundChart3Props {
  groups: Array<{ title: string; description: string }>;
  mainTitle?: string;
  mainDescription?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const FundChart3: React.FC<FundChart3Props> = ({ groups }) => {
  const [chartData, setChartData] = useState<ChartData<"line"> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${SERVER_URL}/export-json-short-term`);
      const data = await response.json();
      const labels = data.data.map((item: any) => item.Date);
      const jbvefData = data.data.map((item: any) => item.JBGILT);
      const spsl20triData = data.data.map((item: any) => item.NDBIB);
      // const astriData = data.data.map((item: any) => item.TBILL);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "JBGILT",
            data: jbvefData,
            borderColor: "#930010",
            backgroundColor: "rgba(147, 0, 16, 0.2)",
            fill: true,
            pointRadius: 2,
          },
          {
            label: "NDBIB CRISIL 90 DAY T-BILL INDEX",
            data: spsl20triData,
            borderColor: "#444444",
            backgroundColor: "rgba(68, 68, 68, 0.2)",
            fill: true,
            pointRadius: 2,
          },
          // {
          //   label: "T-BILL",
          //   data: astriData,
          //   borderColor: "#AAAAAA",
          //   backgroundColor: "rgba(170, 170, 170, 0.2)",
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
          display: true, // Ensure the label is shown
          text: "Date", // The label text for the x-axis
          font: {
            size: 12, // Adjust font size if needed
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
          display: true, // Ensure the label is shown
          text: "Return Percentage (%)", // The label text for the y-axis
          font: {
            size: 12, // Adjust font size if needed
            family: "Switzer-Semibold",
          },
        },
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            return `${value}%`; // Add percentage sign to y-axis ticks
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
        {chartData && <Line data={chartData} options={chartOptions} />}
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

export default FundChart3;

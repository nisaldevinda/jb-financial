import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables, ChartData, ChartOptions } from "chart.js";
import { SERVER_URL } from "../../../../Constants.tsx";

// Register all necessary components
Chart.register(...registerables);

interface FundChart1Props {
  mainTitle?: string;
  mainDescription?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const FundChart1: React.FC<FundChart1Props> = ({}) => {
  const [chartData, setChartData] = useState<ChartData<"line"> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${SERVER_URL}/export-json-value-equity`);
      const rawData = await response.json();

      // Sort the data array by date
      const sortedData = rawData.data.sort((a: any, b: any) => {
        return new Date(a.Date).getTime() - new Date(b.Date).getTime();
      });

      const labels = sortedData.map((item: any) => item.Date);
      const jbvefData = sortedData.map((item: any) => item.JBVEF);
      const spsl20triData = sortedData.map((item: any) => item.SPSL20TRI);

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
            pointRadius: 2,
          },
        ],
      });
    };

    fetchData();

    return () => {
      setChartData(null);
    };
  }, []);

  const chartOptions: ChartOptions<"line"> = {
    plugins: {
      title: {
        display: true,
        text: "Performance Since Inception",
        font: {
          size: 18,
          family: "Switzer-Semibold",
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      tooltip: {
        callbacks: {
          title: function (tooltipItems) {
            return tooltipItems[0].label || "";
          },
        },
      },
    },
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
          drawTicks: true,
          tickLength: 3,
          tickWidth: 5,
        },
        ticks: {
          maxTicksLimit: 200,
          callback: function (value) {
            if (!this.getLabelForValue) return "";
            const date = new Date(this.getLabelForValue(value as number));
            const startDate = new Date("2012-05-01");
            const endDate = new Date("2024-05-31");

            // Skip if date is outside our range
            if (date < startDate || date > endDate) return "";

            // Only show May (month 4) every two years
            if (
              date.getMonth() === 4 &&
              (date.getFullYear() - startDate.getFullYear()) % 2 === 0
            ) {
              return new Intl.DateTimeFormat("en", {
                year: "numeric",
                month: "short",
              }).format(date);
            }
            return "";
          },
          autoSkip: false,
          maxRotation: 0, // Horizontal labels
          minRotation: 0, // Ensure labels stay horizontal
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
  };

  return (
    <section className="bg-white px-4 py-8 md:p-8 lg:px-20 2xl:px-40 2xl:py-20 flex flex-col lg:flex-row gap-16">
      <div className="overflow-x-auto w-full lg:w-[60%]">
        <div className="flex flex-col justify-center gap-12 w-[200%] lg:w-full">
          {chartData && (
            <Line data={chartData} options={chartOptions} className="" />
          )}
        </div>
      </div>
      <div className="w-full lg:w-[40%] flex flex-col gap-4 md:gap-16 justify-center">
        <div>
          <h2 className="subtitleText text-primary-900" id="ytd-value">
            30%
          </h2>
          <p className="text-base md:text-2xl text-neutral-dark switzer-md w-[80%]">
            YTD Return
          </p>
        </div>
        <div>
          <h2 className="subtitleText text-primary-900">30%</h2>
          <p className="text-base md:text-2xl text-neutral-dark switzer-md w-[80%]">
            12M Return
          </p>
        </div>
        <div>
          <h2 className="subtitleText text-primary-900">15%</h2>
          <p className="text-base md:text-2xl text-neutral-dark switzer-md w-[80%]">
            Benchmark 12M Return
          </p>
        </div>
      </div>
    </section>
  );
};

export default FundChart1;

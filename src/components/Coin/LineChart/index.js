import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // Don't get rid of this
import { settingChartData } from "../../../functions/settingChartData"; // Adjust the import path as necessary

const LineChart = ({ prices1, prices2, multiAxis }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    console.log("Prices1:", prices1, "Prices2:", prices2);
    settingChartData(setChartData, prices1, prices2);
  }, [prices1, prices2]);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  console.log("Chart data:", chartData);

  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        position: "left",
      },
      crypto2: multiAxis && {
        position: "right",
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;

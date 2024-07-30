import { gettingDate } from "./getDate";

export const settingChartData = (setChartData, prices1, prices2) => {
  if (prices1 && prices1.length > 0) {
    const labels = prices1.map((data) => gettingDate(data[0]));
    const datasets = [
      {
        label: "Crypto 1",
        data: prices1.map((data) => data[1]),
        borderWidth: 1,
        fill: false,
        backgroundColor: "rgba(58, 128, 233,0.1)",
        tension: 0.25,
        borderColor: "#3a80e9",
        pointRadius: 0,
        yAxisID: "crypto1",
      },
    ];

    if (prices2 && prices2.length > 0) {
      datasets.push({
        label: "Crypto 2",
        data: prices2.map((data) => data[1]),
        borderWidth: 1,
        fill: false,
        tension: 0.25,
        borderColor: "#61c96f",
        pointRadius: 0,
        yAxisID: "crypto2",
      });
    }

    setChartData({
      labels,
      datasets,
    });

    console.log("Chart data set:", { labels, datasets });
  } else {
    console.warn("Prices1 is empty or undefined");
  }
};

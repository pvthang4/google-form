import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart",
    },
  },
};

const labels = ["Option 1", "Option 2", "Option 3"];

export const data = {
  labels,
  datasets: [
    {
      label: "Option 1",
      data: [2000, 100, 1000],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Option 2",
      data: [500, 1100, 100],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Option 3",
      data: [700, 1400, 900],
      backgroundColor: "rgba(53, 62, 235, 0.5)",
    },
  ],
};

const BarChart = () => {
  return (
    <div className="chart__block">
      <Bar options={options} data={data} />
    </div>
  );
};
export default BarChart;

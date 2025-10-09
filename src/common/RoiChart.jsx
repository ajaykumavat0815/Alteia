import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const RoiChart = ({ roiData = [], months = [] }) => {
  const data = {
    labels: months,
    datasets: [
      {
        label: "ROI %",
        data: roiData,
        borderColor: "#22c55e",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(
            0,
            0,
            0,
            context.chart.height
          );
          gradient.addColorStop(0, "rgba(132, 204, 22, 0.5)");
          gradient.addColorStop(1, "rgba(132, 204, 22, 0.05)");
          return gradient;
        },
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#22c55e",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // allows height control via parent container
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          title: (tooltipItems) => tooltipItems[0].label + " 2025",
          label: (context) => context.parsed.y.toFixed(1) + "% ROI",
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#6b7280", font: { size: 11 } },
      },
      y: {
        beginAtZero: true,
        max: 14,
        grid: { color: "#e5e7eb", drawBorder: false },
        ticks: {
          color: "#6b7280",
          font: { size: 11 },
          callback: (v) => v + "%",
        },
      },
    },
  };

  return (
    <div className="w-full h-72 sm:h-80 md:h-96">
      <Line data={data} options={options} />
    </div>
  );
};

export default RoiChart;

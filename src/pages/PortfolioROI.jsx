import React from "react";
import { Input, Button, Card } from "antd";
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

const PortfolioROI = () => {
  const roiData = [
    0, 2.1, 3.1, 4.8, 6.5, 8.9, 12.4, 11.8, 12.4, 11.9, 11.5, 12.1,
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels: months,
    datasets: [
      {
        label: "ROI %",
        data: roiData,
        borderColor: "#22c55e",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(0, "rgba(132, 204, 22, 0.5)");
          gradient.addColorStop(1, "rgba(132, 204, 22, 0.1)");
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
    maintainAspectRatio: false,
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
          callback: (value) => value + "%",
        },
      },
    },
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h2 className="text-gray-600 text-sm font-semibold mb-1">
          ROI Overview
        </h2>
        <p className="text-gray-800 text-base">
          Track your portfolio's performance and analyze monthly returns at a
          glance.
        </p>
      </div>

      <Card className="border-2 border-cyan-500 rounded-lg p-6 bg-white">
        {/* Portfolio Header */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
          <div>
            <h3 className="text-cyan-900 text-lg font-semibold mb-1">
              Alteia Commodity Trade Fund SP ▲
            </h3>
            <p className="text-gray-400 text-xs">Portfolio Highlights</p>
          </div>
          <div className="flex gap-3 items-center">
            <Input
              placeholder="Search trades, sectors, or themes..."
              className="w-64 text-sm"
            />
            <Button className="text-sm">Sort by ▼</Button>
            <Button type="primary" className="text-sm bg-cyan-700 border-none">
              Add ROI
            </Button>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="text-xl font-bold text-green-600">
                  9.4% YTD Growth
                </div>
                <div className="text-gray-500 text-xs">Total Portfolio ROI</div>
              </div>
              <Button size="small" type="primary">
                View
              </Button>
            </div>
            <p className="text-gray-400 text-xs">
              Your portfolio's year-to-date return indicates steady growth.
            </p>
          </Card>

          <Card>
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="text-xl font-bold">0.8% average per month</div>
                <div className="text-gray-500 text-xs">Average Monthly ROI</div>
              </div>
              <Button size="small" type="primary">
                View
              </Button>
            </div>
            <p className="text-gray-400 text-xs">
              Consistent monthly returns help build long-term wealth.
            </p>
          </Card>

          <Card>
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="text-xl font-bold text-green-600">
                  ROI Peaked at 12.4%
                </div>
                <div className="text-gray-500 text-xs">Top Performer Month</div>
              </div>
              <Button size="small" type="primary">
                View
              </Button>
            </div>
            <p className="text-gray-400 text-xs">
              June delivered the highest return in the portfolio this year.
            </p>
          </Card>

          <Card>
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="text-xl font-bold text-red-600">
                  ROI Dipped to 3.1%
                </div>
                <div className="text-gray-500 text-xs">Toughest Month</div>
              </div>
              <Button size="small" type="primary">
                View
              </Button>
            </div>
            <p className="text-gray-400 text-xs">
              February was the most challenging month, with reduced returns.
            </p>
          </Card>
        </div>

        {/* Chart Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-gray-800 text-base font-semibold">
              Yearly ROI Performance
            </h4>
            <div className="flex gap-2">
              <Button size="small">3 Months</Button>
              <Button size="small">6 Months</Button>
              <Button size="small" type="primary">
                12 Months
              </Button>
              <Button size="small">📅</Button>
              <Button size="small">2025</Button>
              <Button size="small">August ▼</Button>
            </div>
          </div>

          <div className="flex gap-4 mb-4 border-b border-gray-200 pb-2">
            <span className="text-gray-500 text-sm cursor-pointer">Today</span>
            <span className="text-gray-500 text-sm cursor-pointer">
              This Week
            </span>
            <span className="text-gray-500 text-sm cursor-pointer">
              This Month
            </span>
            <span className="text-green-600 text-sm font-semibold border-b-2 border-green-600 cursor-pointer">
              This Year
            </span>
          </div>

          <div className="h-80 bg-white p-4 rounded-md">
            <Line data={data} options={options} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PortfolioROI;

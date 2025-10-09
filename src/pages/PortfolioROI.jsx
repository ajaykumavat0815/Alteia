import React from "react";
import { Button, Card, Input } from "antd";
import PortfolioMetrics from "../common/PortfolioMetrics";
import PortfolioChartSection from "../common/PortfolioChartSection";
import DashboardHeader from "../common/DashboardHeader";
import PrimaryButton from "../common/PrimaryButton";
import SearchInput from "../common/SearchInput";

const PortfolioROI = ({ searchValue, onSearchChange, onSearchSubmit }) => {
  // Dynamic mock data (replace later with API response)
  const portfolioData = {
    title: "Alteia Commodity Trade Fund SP ▲",
    roiData: [0, 2.1, 3.1, 4.8, 6.5, 8.9, 12.4, 11.8, 12.4, 11.9, 11.5, 12.1],
    months: [
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
    ],
    metrics: [
      {
        value: "9.4% YTD Growth",
        subtitle: "Total Portfolio ROI",
        color: "text-green-600",
        desc: "Your portfolio's year-to-date return indicates steady growth.",
      },
      {
        value: "0.8% average per month",
        subtitle: "Average Monthly ROI",
        color: "text-green-600",
        desc: "Consistent monthly returns help build long-term wealth.",
      },
      {
        value: "ROI Peaked at 12.4%",
        subtitle: "Top Performer Month",
        color: "text-green-600",
        desc: "June delivered the highest return in the portfolio this year.",
      },
      {
        value: "ROI Dipped to 3.1%",
        subtitle: "Toughest Month",
        color: "text-green-600",
        desc: "February was the most challenging month, with reduced returns.",
      },
    ],
    timeFilters: [
      "3 Months",
      "6 Months",
      "12 Months",
      "📅",
      "2025",
      "August ▼",
    ],
    rangeFilters: ["Today", "This Week", "This Month", "This Year"],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <DashboardHeader
        title="Track your portfolio's performance and analyze monthly returns at a
          glance."
        subtitle="ROI Overview"
      />
      <Card className="border-2 border-cyan-500 rounded-lg p-6 bg-white mt-4">
        <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6 mt-4">
          <div>
            <h3 className="text-cyan-900 text-lg font-semibold mb-1">
              Alteia Commodity Trade Fund SP ▲
            </h3>
            <p className="text-gray-400 text-xs">Portfolio Highlights</p>
          </div>
          <div className="flex gap-3 items-center">
            {" "}
            <SearchInput
              value={searchValue}
              onChange={onSearchChange}
              onSearch={onSearchSubmit}
              placeholder="Search trades, sectors, or themes"
            />
            <PrimaryButton
              text="Sort by ▼"
              onClick={() => navigate("/addNewCustomer")}
              noIcon={true}
              btnType="secondary"
              textClassName="!text-sm"
            />
            <PrimaryButton
              text="Add ROI"
              onClick={() => navigate("/addNewCustomer")}
              noIcon={true}
              textClassName="!text-sm text-white"
            />
          </div>
        </div>

        <PortfolioMetrics metrics={portfolioData.metrics} />
        <PortfolioChartSection
          roiData={portfolioData.roiData}
          months={portfolioData.months}
          timeFilters={portfolioData.timeFilters}
          rangeFilters={portfolioData.rangeFilters}
        />
      </Card>
    </div>
  );
};

export default PortfolioROI;

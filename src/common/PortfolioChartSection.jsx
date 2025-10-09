import React, { useState } from "react";
import { Button } from "antd";
import RoiChart from "./RoiChart";
import TimePeriodSelector from "./TimePeriodSelector";
import dayjs from "dayjs";

const PortfolioChartSection = ({
  roiData,
  months,
  timeFilters = [],
  rangeFilters = [],
  activeRange = "This Year",
  onRangeChange,
}) => {
  const periods = ["Today", "This Week", "This Month", "This Year"];
  const [selection, setSelection] = useState({
    period: "3 Months",
    date: dayjs("2025-08-01"),
  });

  return (
    <div>
      {/* Top Filter Bar */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-gray-800 text-base font-semibold">
          Yearly ROI Performance
        </h4>
        <div className="flex gap-2">
          <TimePeriodSelector
            defaultDate={selection.date}
            onSelectionChange={setSelection}
            showCalendar={true}
          />{" "}
        </div>
      </div>
      <div className="mb-4">
        <TimePeriodSelector
          defaultDate={selection.date}
          onSelectionChange={setSelection}
          periods={periods}
          periodSelectorWidth="100%"
          activePeriodTextColor="#14db4cff"
        />{" "}
      </div>
      {/* Range Filter */}
      <div className="flex gap-4 mb-4 border-b border-gray-200 pb-2">
        {rangeFilters.map((label) => (
          <span
            key={label}
            onClick={() => onRangeChange && onRangeChange(label)}
            className={`text-sm cursor-pointer ${
              label === activeRange
                ? "text-green-600 font-semibold border-b-2 border-green-600"
                : "text-gray-500"
            }`}
          >
            {label}
          </span>
        ))}
      </div>
      {/* Chart */}
      <div className="h-80 bg-white p-4 rounded-md">
        <RoiChart roiData={roiData} months={months} />
      </div>
    </div>
  );
};

export default PortfolioChartSection;

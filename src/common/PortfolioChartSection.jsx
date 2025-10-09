import React, { useState } from "react";
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
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
        <h4 className="text-gray-800 text-base sm:text-lg font-semibold flex-1 text-center sm:text-left">
          Yearly ROI Performance
        </h4>
        <div className="flex flex-wrap gap-2 flex-1 justify-center sm:justify-end">
          <TimePeriodSelector
            defaultDate={selection.date}
            onSelectionChange={setSelection}
            showCalendar={true}
            fullWidth={true}
          />
        </div>
      </div>

      <RoiChart
        title="Yearly ROI Performance"
        periods={["Today", "This Week", "This Month", "This Year"]}
        data={[
          { month: "Jan", roi: 7.5 },
          { month: "Feb", roi: 8.2 },
          { month: "Mar", roi: 9.5 },
          { month: "Apr", roi: 8.8 },
          { month: "May", roi: 10.2 },
          { month: "Jun", roi: 9.8 },
          { month: "Jul", roi: 11.0 },
          { month: "Aug", roi: 10.5 },
          { month: "Sep", roi: 12.3 },
          { month: "Oct", roi: 11.7 },
          { month: "Nov", roi: 13.0 },
          { month: "Dec", roi: 12.5 },
        ]}
        xDataKey="month"
        yDataKey="roi"
        gradientColor="#8BC34A"
        lineColor="#558B2F"
        height={300}
      />
    </div>
    // </div>
  );
};

export default PortfolioChartSection;

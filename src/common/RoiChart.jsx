import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import TimePeriodSelector from "./TimePeriodSelector";
import { Tabs } from "antd";

const RoiChart = ({
  title = "ROI Chart",
  data = [],
  xDataKey = "month",
  yDataKey = "roi",
  height = 350,
  gradientColor = "#9CCC65",
  lineColor = "#7CB342",
  periods = ["Today", "This Week", "This Month", "This Year"],
  defaultPeriod = "Today",
    
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState(defaultPeriod);

  const handleSelectionChange = ({ period }) => {
    setSelectedPeriod(period);
    // You can filter or fetch data based on the period here
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0];
      const currentIndex = data.findIndex(
        (d) => d[xDataKey] === dataPoint.payload[xDataKey]
      );
      const previousValue =
        currentIndex > 0 ? data[currentIndex - 1][yDataKey] : null;
      const change = previousValue ? dataPoint.value - previousValue : null;

      return (
        <div className="bg-white px-3 py-2 rounded shadow-lg border border-gray-200">
          <p className="text-sm font-medium text-gray-900">
            {dataPoint.payload[xDataKey]} — {dataPoint.value.toFixed(1)}%
            {change !== null && (
              <span className="text-gray-600">
                {" "}
                ({change >= 0 ? "+" : ""}
                {change.toFixed(1)}% from {data[currentIndex - 1][xDataKey]})
              </span>
            )}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-white rounded-lg  overflow-hidden">
        <div className="p-4">
          <TimePeriodSelector
            periods={periods}
            defaultPeriod={defaultPeriod}
            onSelectionChange={handleSelectionChange}
            periodBgColor="#E1E1E1"
            activePeriodBgColor="#D9F0D9"
            activePeriodTextColor="#1B386B"
            periodTextColor="#555555"
            borderColor="#FFFFFF"
            periodSelectorWidth="100%"
          />
        </div>

        {/* Chart */}
        <div className="">
          {/* <h4 className="text-gray-800 text-base font-semibold mb-4">
            {title} — {selectedPeriod}
          </h4> */}
          <ResponsiveContainer width="100%" height={height}>
            <AreaChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorRoi" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={gradientColor}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor={gradientColor}
                    stopOpacity={0.05}
                  />
                </linearGradient>
              </defs>
              <XAxis
                dataKey={xDataKey}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 13 }}
              />
              <YAxis hide={true} />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{
                  stroke: gradientColor,
                  strokeWidth: 1,
                  strokeDasharray: "3 3",
                }}
              />
              <Area
                type="monotone"
                dataKey={yDataKey}
                stroke={lineColor}
                strokeWidth={2.5}
                fill="url(#colorRoi)"
                dot={false}
                activeDot={{
                  r: 5,
                  fill: lineColor,
                  strokeWidth: 2,
                  stroke: "#fff",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RoiChart;

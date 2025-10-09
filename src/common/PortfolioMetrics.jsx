import React from "react";
import MetricCard from "./MetricCard";

const PortfolioMetrics = ({ metrics = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default PortfolioMetrics;

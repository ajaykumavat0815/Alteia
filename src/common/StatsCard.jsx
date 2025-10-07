import React from "react";
import { Card } from "antd";

const StatsCard = ({
  icon,
  title,
  subtitle,
  value,
  trend,
  trendColor = "text-green-600",
  valueColor = "text-purple-600",
  bgColor = "bg-purple-100",
  iconColor = "text-purple-600",
}) => {
  return (
    <Card className="!rounded-[18px] shadow-md border p-4">
      <div className="flex items-center">
        <div
          className={`flex items-center justify-center w-16 h-16 rounded-full ${bgColor} ${iconColor} text-2xl`}
        >
          {icon}
        </div>
        <div className="ml-4">
          <p className="text-gray-500 text-sm">{title}</p>
          <p className={`${trendColor} font-semibold text-sm`}>{trend}</p>
          <p className={`${valueColor} font-bold text-2xl`}>{value}</p>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;

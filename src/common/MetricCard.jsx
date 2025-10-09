import React from "react";
import { Card, Button } from "antd";
import PrimaryButton from "./PrimaryButton";

const MetricCard = ({
  value,
  subtitle,
  desc,
  color = "text-black",
  onView,
}) => {
  return (
    <Card>
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className={`text-xl font-bold ${color}`}>{value}</div>
          <div className="text-gray-500 text-xs">{subtitle}</div>
        </div>
        <PrimaryButton
          text="View"
          onClick={onView}
          noIcon={true}
          className="!px-4 text-sm"
          textClassName="!text-sm text-white"
        />
      </div>
      <p className="text-gray-400 text-xs">{desc}</p>
    </Card>
  );
};

export default MetricCard;

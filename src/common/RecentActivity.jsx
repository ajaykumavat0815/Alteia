import React from "react";
import DataTable from "./DataTable";
import { Card } from "antd";
import Calendar from "./Calendar";

const RecentActivity = ({ activities, title = "Recent Activity" }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name, record) => (
        <div className="flex items-start space-x-3">
          <div>
            <h4 className="font-sans font-bold text-[14px] leading-[20px] text-[#2B3674] tracking-tight">
              {name}
            </h4>
            {record.description && (
              <div className="text-xs font-normal text-[#A3AED0] mt-1 font-sans">
                {record.description}
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const colorMap = {
          "User Approved": "text-green-600 bg-green-50",
          "KYC Verified": "text-green-600 bg-green-50",
          "New Trade Added": "text-blue-600 bg-blue-50",
          "ROI Updated": "text-blue-600 bg-blue-50",
          "Lead Added": "text-purple-600 bg-purple-50",
          "User Rejected": "text-red-600 bg-red-50",
        };

        const className = colorMap[status] || "text-gray-600 bg-gray-50";
        const dotColorMap = {
          "text-green-600": "#16a34a",
          "text-blue-600": "#2563eb",
          "text-purple-600": "#7c3aed",
          "text-red-600": "#dc2626",
          "text-gray-600": "#4b5563",
        };
        const textColorClass = className.split(" ")[0];
        const dotColor = dotColorMap[textColorClass] || "#4b5563";

        return (
          <div className="flex justify-end">
            <span
              className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${className}`}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: dotColor }}
              ></span>
              {status}
            </span>
          </div>
        );
      },
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      render: (time) => (
        <span className="text-gray-500 text-sm whitespace-nowrap">{time}</span>
      ),
    },
  ];

  const handleDateChange = (date, dateString) => {
    console.log("Selected Date:", dateString);
  };

  return (
    <Card className="p-4 sm:p-6 rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <h4 className="font-sans font-bold text-[18px] leading-[28px] text-[#2B3674] tracking-tight">
          {title}
        </h4>
        <div className="flex justify-end">
          <Calendar
            onDateChange={handleDateChange}
            displayMode="icon"
            iconStyle={{ fontSize: "18px", color: "black" }}
            className="hover:bg-blue-50"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <DataTable
          columns={columns}
          data={activities}
          pagination={false}
          showHeader={false}
        />
      </div>
    </Card>
  );
};

export default RecentActivity;

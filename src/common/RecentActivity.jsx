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
        <div className="flex items-center space-x-3">
          <div>
            {/* <div className="font-medium text-gray-900">{name}</div> */}
            <h4 className="font-sans font-bold text-[14px] leading-[32px] text-[#2B3674] align-middle tracking-tight">
              {name}
            </h4>
            {record.description && (
              <div className="text-xs font-normal leading-[100%] tracking-normal text-[#A3AED0] mt-1 font-sans">
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
      render: (time) => <span className="text-gray-500 text-sm">{time}</span>,
    },
  ];

  const handleDateChange = (date, dateString) => {
    console.log("Selected Date:", dateString);
    // Use the selected date in parent component
  };
  return (
    <Card className="p-4">
      {/* Header: Title on left, Calendar on right */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-sans font-bold text-[18px] leading-[32px] text-[#2B3674] align-middle tracking-tight">
          {title}
        </h4>
        <Calendar
          onDateChange={handleDateChange}
          displayMode="icon"
          iconStyle={{ fontSize: "18px", color: "black" }}
          className="hover:bg-blue-50"
        />
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={activities}
        pagination={false}
        showHeader={false}
      />
    </Card>
  );
};

export default RecentActivity;

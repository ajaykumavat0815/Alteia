import React, { useState } from "react";
import { Card, DatePicker, Button, Popover } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

const Calendar = ({
  title = "Calendar",
  description = "Select dates and manage your schedule",
  dateFormat = "YYYY-MM-DD",
  showHeader = true,
  onDateChange,
  placeholder = "Select date",
  size = "large",
  displayMode = "input", // 'input' or 'icon'
  placement = "bottomRight", // for icon mode popover placement
  trigger = "click", // for icon mode popover trigger
  iconStyle = {}, // for icon mode styling
  popoverStyle = {}, // for icon mode popover styling
  className = "", // additional className
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);

  const handleDateChange = (date, dateString) => {
    setSelectedDate(date);
    if (onDateChange) {
      onDateChange(date, dateString);
    }
    if (displayMode === "icon") {
      setOpen(false); // Close popover after selection in icon mode
    }
  };

  const handleClear = () => {
    setSelectedDate(null);
    if (onDateChange) {
      onDateChange(null, "");
    }
  };

  const handleToday = () => {
    const today = new Date();
    setSelectedDate(today);
    if (onDateChange) {
      onDateChange(today, today.toISOString().split("T")[0]);
    }
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  // Calendar content for popover in icon mode
  const calendarContent = (
    <div style={popoverStyle} className="p-2">
      <DatePicker
        onChange={handleDateChange}
        value={selectedDate}
        size={size}
        allowClear
        placeholder={placeholder}
        format={dateFormat}
        style={{ width: 280 }}
      />
      {selectedDate && (
        <div className="mt-2 p-2 bg-blue-50 rounded text-xs">
          Selected: {selectedDate.format("MMM DD, YYYY")}
        </div>
      )}
    </div>
  );

  // Icon display mode
  if (displayMode === "icon") {
    return (
      <Popover
        content={calendarContent}
        trigger={trigger}
        placement={placement}
        open={open}
        onOpenChange={handleOpenChange}
      >
        <Button
          type="text"
          icon={<CalendarOutlined style={iconStyle} />}
          className={className}
        />
      </Popover>
    );
  }

  // Input display mode (default)
  return (
    <div className="w-full">
      {showHeader && (
        <div className="p-6 pt-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          {/* Date Picker */}
          <div className="mb-4">
            <DatePicker
              onChange={handleDateChange}
              value={selectedDate}
              style={{ width: "100%" }}
              size={size}
              allowClear
              placeholder={placeholder}
              format={dateFormat}
            />
          </div>

          {/* Selected Date Info */}
          {selectedDate && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-2">
                <CalendarOutlined className="text-blue-600" />
                <span className="text-sm font-medium text-blue-800">
                  Selected Date:
                </span>
                <span className="text-sm text-blue-700">
                  {selectedDate.format("dddd, MMMM DD, YYYY")}
                </span>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <button
                className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                onClick={handleClear}
              >
                Clear
              </button>
              <button
                className="px-3 py-1 text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 rounded transition-colors"
                onClick={handleToday}
              >
                Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

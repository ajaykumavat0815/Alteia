import React, { useRef, useState } from "react";
import { CalendarOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import "antd/dist/reset.css";

const TimePeriodSelector = ({
  showCalendar = false,
  periods = ["3 Months", "6 Months", "12 Months"],
  defaultPeriod = "3 Months",
  defaultDate = dayjs("2025-08-01"),
  onSelectionChange,
  periodBgColor = "#E1E1E1",
  periodTextColor = "#555555",
  activePeriodBgColor = "#ECECEC",
  activePeriodTextColor = "#000000",
  borderColor = "#FFFFFF",
  customWrapperClass = "",
  customCalendarClass = "",
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState(defaultPeriod);
  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const datePickerRef = useRef(null);

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    onSelectionChange?.({ period, date: selectedDate });
  };

  const handleDateChange = (date) => {
    if (date) {
      setSelectedDate(date);
      onSelectionChange?.({ period: selectedPeriod, date });
    }
  };

  const openCalendar = () => {
    if (datePickerRef.current) {
      const input = datePickerRef.current.querySelector("input");
      if (input) input.click();
    }
  };

  return (
    <div className={`flex items-center gap-4 w-full ${customWrapperClass}`}>
      {/* ===== Period Selector ===== */}
      <div
        className={`flex border rounded-full overflow-hidden flex-1`}
        style={{
          backgroundColor: periodBgColor.startsWith("#")
            ? periodBgColor
            : undefined,
          borderColor: borderColor.startsWith("#") ? borderColor : undefined,
        }}
      >
        {periods.map((period) => {
          const isActive = selectedPeriod === period;
          return (
            <button
              key={period}
              onClick={() => handlePeriodChange(period)}
              className={`flex-1 text-sm font-medium transition-all border-r last:border-none`}
              style={{
                padding: "0.5rem 0", // vertical padding
                backgroundColor: isActive
                  ? activePeriodBgColor.startsWith("#")
                    ? activePeriodBgColor
                    : undefined
                  : undefined,
                color: isActive
                  ? activePeriodTextColor.startsWith("#")
                    ? activePeriodTextColor
                    : undefined
                  : periodTextColor.startsWith("#")
                  ? periodTextColor
                  : undefined,
              }}
            >
              {period}
            </button>
          );
        })}
      </div>

      {/* ===== Optional Calendar Picker ===== */}
      {showCalendar && (
        <div
          className={`flex items-center border rounded-full overflow-hidden ${customCalendarClass}`}
          style={{
            backgroundColor: periodBgColor.startsWith("#")
              ? periodBgColor
              : undefined,
            borderColor: borderColor.startsWith("#") ? borderColor : undefined,
          }}
        >
          {/* Calendar Icon */}
          <div
            onClick={openCalendar}
            className="flex items-center justify-center w-10 h-10 cursor-pointer transition"
            style={{
              backgroundColor: "#e6f1f1",
              borderRight: "1px solid #d1d5db",
            }}
          >
            <CalendarOutlined className="text-[#004b50] text-lg" />
          </div>

          {/* Ant Design DatePicker */}
          <div ref={datePickerRef}>
            <DatePicker
              picker="month"
              value={selectedDate}
              onChange={handleDateChange}
              allowClear={false}
              suffixIcon={null}
              format="YYYY MMMM"
              className="!border-0 !bg-transparent !rounded-r-full !px-4 text-sm font-medium text-gray-800 hover:!bg-gray-100 focus:!shadow-none focus:!outline-none"
              popupClassName="rounded-lg shadow-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePeriodSelector;

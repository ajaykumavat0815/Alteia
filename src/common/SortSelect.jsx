import React from "react";
import { Select } from "antd";

const { Option } = Select;

const SortSelect = ({
  value,
  onChange,
  options = [],
  placeholder = "Sort by",
}) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ width: 150 }}
    >
      {options.map((opt) => (
        <Option key={opt.value} value={opt.value}>
          {opt.label}
        </Option>
      ))}
    </Select>
  );
};

export default SortSelect;

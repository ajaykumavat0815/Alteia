import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchInput = ({
  value,
  onChange,
  onSearch,
  placeholder = "Search trades, sectors, or themes...",
}) => {
  return (
    <Search
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      onSearch={onSearch}
      allowClear
      style={{ width: 200 }}
    />
  );
};

export default SearchInput;

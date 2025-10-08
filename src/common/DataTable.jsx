import React from "react";
import { Table } from "antd";
import SearchInput from "./SearchInput";
import SortSelect from "./SortSelect";

const DataTable = ({
  columns = [],
  data = [],
  title,
  description,
  bordered = false,
  pagination = false,
  rowKey = "key",
  showHeader = true,
  searchValue,
  onSearchChange,
  onSearchSubmit,
  sortOptions = [],
  selectedSort,
  onSortChange,
}) => {
  return (
    <div className="w-full">
      <div className={`${showHeader ? "p-6" : "p-0"}`}>
        {showHeader && (
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
            {/* Left side: Title */}
            <h4 className="font-sans font-bold text-[18px] leading-[32px] text-[#2B3674] tracking-tight">
              {title || "Table Data"}
            </h4>

            {/* Right side: Search + Sort */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
              <div className="flex-1 min-w-[150px]">
                <SearchInput
                  value={searchValue}
                  onChange={onSearchChange}
                  onSearch={onSearchSubmit}
                  placeholder="Search trades, sectors, or themes"
                />
              </div>
              <div className="w-full sm:w-auto min-w-[120px]">
                <SortSelect
                  value={selectedSort}
                  onChange={onSortChange}
                  options={sortOptions}
                />
              </div>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <Table
            columns={columns}
            dataSource={data}
            pagination={pagination}
            bordered={bordered}
            rowKey={rowKey}
            showHeader={showHeader}
            scroll={{ x: 500 }}
            className="custom-table min-w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default DataTable;

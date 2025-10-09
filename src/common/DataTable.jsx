import React, { useState, useMemo } from "react";
import { Table } from "antd";
import {
  DoubleRightOutlined,
  DoubleLeftOutlined,
  LeftOutlined,
  RightOutlined,
  DownOutlined,
} from "@ant-design/icons";

const DataTable = ({ columns = [], data = [], rowKey = "key" }) => {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const filteredData = useMemo(() => {
    if (!searchValue) return data;
    return data.filter((row) =>
      Object.values(row).some((val) =>
        String(val).toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [data, searchValue]);

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(filteredData.length / pageSize);

  const getPageNumbers = () =>
    Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full bg-white rounded-lg shadow-sm">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b gap-3">
        {/* Page Size Selector */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="appearance-none border border-gray-300 rounded px-3 py-1.5 pr-8 text-sm focus:outline-none focus:border-gray-400 w-full sm:w-auto"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
              <DownOutlined />
            </div>
          </div>
          <span className="text-sm text-gray-600">entries per page</span>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
            Search:
          </span>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded pl-16 pr-3 py-1.5 text-sm focus:outline-none focus:border-gray-400 w-full"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table
          columns={columns}
          dataSource={paginatedData}
          rowKey={rowKey}
          bordered={false}
          pagination={false}
          className="min-w-full"
        />
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-t gap-3">
        <div className="text-sm text-gray-600">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + pageSize, filteredData.length)} of{" "}
          {filteredData.length} entries
        </div>

        <div className="flex flex-wrap gap-1">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="p-1.5 rounded hover:bg-gray-100 disabled:opacity-50"
          >
            <DoubleLeftOutlined />
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-1.5 rounded hover:bg-gray-100 disabled:opacity-50"
          >
            <LeftOutlined />
          </button>

          {getPageNumbers().map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1.5 text-sm rounded ${
                currentPage === page
                  ? "bg-green-500 text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded hover:bg-gray-100 disabled:opacity-50"
          >
            <RightOutlined />
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded hover:bg-gray-100 disabled:opacity-50"
          >
            <DoubleRightOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;

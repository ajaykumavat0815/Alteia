import React, { useState } from "react";
import { Layout } from "antd";
import DashboardHeader from "../common/DashboardHeader";
import DataTable from "../common/DataTable";
import SealCheck from "../assets/icons/SealCheck.png";
import SealWarning from "../assets/icons/SealWarning.png";
import Prohibit from "../assets/icons/Prohibit.png";
import PrimaryButton from "../common/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Investors = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "KYC Status",
      dataIndex: "kycStatus",
      key: "kycStatus",
      render: (kycStatus) => {
        const statusConfig = {
          "KVC verified": {
            icon: (
              <img src={SealCheck} alt="KYC Verified" className="w-6 h-6" />
            ),
          },
          "Pending Approval": {
            icon: (
              <img src={SealWarning} alt="KYC Verified" className="w-6 h-6" />
            ),
          },
          Denied: {
            icon: <img src={Prohibit} alt="KYC Verified" className="w-6 h-6" />,
          },
        };

        const config = statusConfig[kycStatus] || {
          color: "text-gray-600 bg-gray-50",
          icon: "⚪",
        };

        return (
          <span
            className={`px-2 py-1 rounded-md text-xs font-medium ${config.color} flex items-center gap-2`}
          >
            <span>{config.icon}</span>
            {kycStatus}
          </span>
        );
      },
    },
    {
      title: "Investment Status",
      dataIndex: "investmentStatus",
      key: "investmentStatus",
      render: (investmentStatus) => {
        const colorMap = {
          "Active Investor": "text-green-600 bg-green-50",
          Dormant: "text-gray-600 bg-gray-50",
          Local: "text-blue-600 bg-blue-50",
        };
        const className =
          colorMap[investmentStatus] || "text-gray-600 bg-gray-50";

        // Map Tailwind text colors to actual color codes for dot
        const dotColorMap = {
          "text-green-600": "#16a34a",
          "text-blue-600": "#2563eb",
          "ttext-gray-600": "#dfdfe1ff",
          "text-red-600": "#dc2626",
        };

        const textColorClass = className.split(" ")[0];
        const dotColor = dotColorMap[textColorClass] || "#4b5563";

        return (
          <span
            className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${className} `}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: dotColor }}
            ></span>
            {investmentStatus}
          </span>
        );
      },
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
      key: "nationality",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
  ];

  // Data matching your image exactly
  const data = [
    {
      key: "1",
      name: "Séjal kalyani",
      email: "séjal.kalyani@example.com",
      phone: "+91 12345 67890",
      kycStatus: "KVC verified",
      investmentStatus: "Active Investor",
      nationality: "Indian",
      country: "UAE",
    },
    {
      key: "2",
      name: "Ravi Sharma",
      email: "ravi.sharma@example.com",
      phone: "+91 12345 67890",
      kycStatus: "Pending Approval",
      investmentStatus: "Local",
      nationality: "Indian",
      country: "India",
    },
    {
      key: "3",
      name: "Fatima Khan",
      email: "fatima.khan@example.com",
      phone: "+91 12345 67890",
      kycStatus: "KVC verified",
      investmentStatus: "Active Investor",
      nationality: "Pakistani",
      country: "UAE",
    },
    {
      key: "4",
      name: "Ahmed Abdullah",
      email: "ahmed.abdullah@example.com",
      phone: "+91 12345 67890",
      kycStatus: "Denied",
      investmentStatus: "Dormant",
      nationality: "Saudi Arabian",
      country: "Saudi Arabia",
    },
    {
      key: "5",
      name: "Priya Mehta",
      email: "priya.mehta@example.com",
      phone: "+91 12345 67890",
      kycStatus: "KVC verified",
      investmentStatus: "Active Investor",
      nationality: "British",
      country: "United Kingdom",
    },
    {
      key: "6",
      name: "James Wilson",
      email: "james.wilson@example.com",
      phone: "+91 12345 67890",
      kycStatus: "Pending Approval",
      investmentStatus: "Local",
      nationality: "American",
      country: "USA",
    },
  ];

  const sortOptions = [
    { label: "Name (A–Z)", value: "name" },
    { label: "Email", value: "email" },
  ];

  const handleSearchChange = (value) => setSearch(value);
  const handleSearchSubmit = () => console.log("Search:", search);
  const handleSortChange = (value) => setSortBy(value);

  return (
    <Layout>
      <DashboardHeader
        title="Track customer verification, investment activity, and key details."
        subtitle="Customers management"
      />
      <div className="mt-2">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 m-5">
          <DataTable
            title="Customer Investing"
            columns={columns}
            data={data}
            searchValue={search}
            onSearchChange={handleSearchChange}
            onSearchSubmit={handleSearchSubmit}
            sortOptions={sortOptions}
            selectedSort={sortBy}
            onSortChange={handleSortChange}
            pagination={true}
            bordered={true}
          />
          <div className="mt-2 flex justify-end p-3">
            <PrimaryButton
              text="Add New Customer"
              onClick={() => navigate("/addNewCustomer")}
              noIcon={true}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Investors;

import React, { useState } from "react";
import { Layout } from "antd";
import DashboardHeader from "../common/DashboardHeader";
import DataTable from "../common/DataTable";
import { useNavigate } from "react-router-dom";
import iblue1 from "../assets/icons/iblue1.svg";
import eys1 from "../assets/icons/eys1.svg";
import dollar1 from "../assets/icons/dollar1.svg";
import PrimaryButton from "../common/PrimaryButton";

const Funds = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const columns = [
    {
      title: "Trade Title",
      dataIndex: "tradeTitle",
      key: "tradeTitle",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "ROI %",
      dataIndex: "roi",
      key: "roi",
      render: (roi) => <span className="font-semibold">{roi}</span>,
    },
    {
      title: "Min Investment",
      dataIndex: "minInvestment",
      key: "minInvestment",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const colorMap = {
          Active: "text-green-600 bg-green-50",
          Upcoming: "text-blue-600 bg-blue-50",
        };
        const className = colorMap[status] || "text-gray-600 bg-gray-50";

        const dotColorMap = {
          "text-green-600": "#16a34a",
          "text-blue-600": "#2563eb",
          "text-gray-600": "#6b7280",
        };

        const textColorClass = className.split(" ")[0];
        const dotColor = dotColorMap[textColorClass] || "#6b7280";

        return (
          <span
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${className}`}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: dotColor }}
            ></span>
            {status}
          </span>
        );
      },
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      render: (action, record) => (
        <div className=" items-center justify-center gap-2">
          {renderActionIcons(action, record)}
        </div>
      ),
    },
  ];

  // Helper function to render multiple action icons
  const renderActionIcons = (action, record) => {
    // Handle both single action string and array of actions
    const actions = Array.isArray(action) ? action : [action];

    const actionConfig = {
      view: {
        icon: <img src={eys1} alt="View" className="w-10 h-10" />,
        tooltip: "View Details",
      },
      info: {
        icon: <img src={iblue1} alt="Info" className="w-10 h-10" />,
        tooltip: "More Information",
      },
      dollar: {
        icon: <img src={dollar1} alt="Investment" className="w-10 h-10" />,
        tooltip: "Investment Options",
      },
    };

    return actions.map((actionType, index) => {
      const config = actionConfig[actionType] || {
        icon: "⚪",
        tooltip: "Action",
      };

      return (
        <span
          key={index}
          className="inline-flex items-center justify-center p-1 rounded hover:bg-gray-100 cursor-pointer transition-colors"
          title={config.tooltip}
          onClick={() => handleActionClick(actionType, record)}
        >
          {config.icon}
        </span>
      );
    });
  };

  // Handle action icon click
  const handleActionClick = (action, record) => {
    switch (action) {
      case "view":
        navigate("/trade-details");
        break;
      case "info":
        // Handle info action
        console.log("Info clicked for:", record.tradeTitle);
        break;
      case "dollar":
        // Handle dollar/investment action
        console.log("Investment clicked for:", record.tradeTitle);
        break;
      default:
        console.log("Action clicked:", action);
    }
  };

  // Data from the table in your image
  const data = [
    {
      key: "1",
      tradeTitle: "Attela Fund Income Fund $P",
      category: "Fixed Income",
      roi: "23–55% Target (YTD 7%)",
      minInvestment: "$100,000",
      duration: "Daily Trading",
      status: "Active",
      action: ["view", "info"], // Multiple actions
    },
    {
      key: "2",
      tradeTitle: "Attela EN High Yield Fund $P",
      category: "Emerging Markets",
      roi: "24–56% Target",
      minInvestment: "$250,000",
      duration: "3–5 years",
      status: "Upcoming",
      action: ["info", "dollar"], // Multiple actions
    },
    {
      key: "3",
      tradeTitle: "Attela Community Trade Fund $P",
      category: "Commodities",
      roi: "20–25% Net (YTD 50.52%)",
      minInvestment: "$1,000,000",
      duration: "Avg. 30 days",
      status: "Active",
      action: "dollar", // Single action
    },
    {
      key: "4",
      tradeTitle: "Attela African PE Fund $P",
      category: "Private Equity",
      roi: "28–29% Target",
      minInvestment: "$500,000",
      duration: "5–7 years",
      status: "Upcoming",
      action: ["view", "info"], // Multiple actions
    },
    {
      key: "5",
      tradeTitle: "Attela Fund Income Fund $P",
      category: "Fixed Income",
      roi: "22–35% Target (YTD 7%)",
      minInvestment: "$150,000",
      duration: "Daily Trading",
      status: "Active",
      action: "view", // Single action
    },
    {
      key: "6",
      tradeTitle: "Attela EN High Yield Fund $P",
      category: "Emerging Markets",
      roi: "24–56% Target",
      minInvestment: "$250,000",
      duration: "3–5 years",
      status: "Upcoming",
      action: ["dollar", "info"], // Multiple actions
    },
    {
      key: "7",
      tradeTitle: "Attela Community Trade Fund $P",
      category: "Commodities",
      roi: "20–25% Net (YTD 50.52%)",
      minInvestment: "$1,000,000",
      duration: "Avg. 30 days",
      status: "Active",
      action: ["view", "dollar"], // Multiple actions
    },
    {
      key: "8",
      tradeTitle: "Attela African PE Fund $P",
      category: "Private Equity",
      roi: "28–29% Target",
      minInvestment: "$500,000",
      duration: "5–7 years",
      status: "Upcoming",
      action: "info", // Single action
    },
  ];

  const sortOptions = [
    { label: "Trade Title (A–Z)", value: "tradeTitle" },
    { label: "Category", value: "category" },
    { label: "Status", value: "status" },
    { label: "Minimum Investment", value: "minInvestment" },
  ];

  const handleSearchChange = (value) => setSearch(value);
  const handleSearchSubmit = () => console.log("Search:", search);
  const handleSortChange = (value) => setSortBy(value);

  return (
    <Layout>
      <DashboardHeader
        title="Browse and explore every available investment opportunity in one place."
        subtitle="Trades management"
      />
      <div className="mt-2">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 m-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
            {" "}
            <h4 className="font-sans font-bold text-[18px] leading-[32px] text-[#2B3674] tracking-tight">
              {"Trades Listing"}
            </h4>
            <PrimaryButton
              text="Add New Trades"
              onClick={() => navigate("/addNewTrade")}
              noIcon={true}
              className="!px-4 text-sm"
              textClassName="!text-sm text-white"
            />
          </div>

          <DataTable
            title="Trades Listing"
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
        </div>
      </div>
    </Layout>
  );
};

export default Funds;

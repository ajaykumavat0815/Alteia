import React from "react";
import { Layout, Row, Col, Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { RiCoinsFill } from "react-icons/ri";
import { MdBarChart } from "react-icons/md";
import { FileFilled } from "@ant-design/icons";
import DashboardHeader from "../common/DashboardHeader";
import StatsCard from "../common/StatsCard";
import RecentActivity from "../common/RecentActivity";
import ActiveTrades from "../common/ActiveTrades";
import Calendar from "../common/Calendar";
const { Content } = Layout;

const Dashboard = () => {
  // Stats Data
  const statsData = [
    {
      icon: <UserOutlined />,
      title: "New Leads",
      trend: "+12% this week",
      value: "1,245",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      valueColor: "text-purple-600",
    },
    {
      icon: <RiCoinsFill style={{ fontSize: "40px" }} />,
      title: "ADV PO",
      trend: "+Revenue Growth",
      value: "3.4%",
      bgColor: "bg-[#FDECC8]",
      iconColor: "text-[#E58B2B]",
      valueColor: "text-purple-600",
    },
    {
      icon: <MdBarChart style={{ fontSize: "40px" }} />,
      title: "Active Traders",
      trend: "+1 from last week",
      value: "24",
      trendColor: "text-red-600",
      bgColor: "bg-[#D5F5E3]",
      iconColor: "text-green-600",
      valueColor: "text-green-600",
    },
    {
      icon: <FileFilled />,
      title: "Pending Approvals",
      trend: "Review Now",
      value: "14",
      trendColor: "text-red-600",
      bgColor: "bg-[#D843431A]",
      iconColor: "text-[#D84343]",
      valueColor: "text-red-600",
    },
  ];

  // Activity Data
  const activityData = [
    {
      key: 1,
      name: "Ravi Sharma",
      description: "ATC Analyst",
      status: "User Approved",
      time: "2 hrs ago",
      type: "approval",
    },
    {
      key: 2,
      name: "Alteia African PE Fund SP",
      description: "L2 Fund",
      status: "New Trade Added",
      time: "1 day ago",
      type: "trade",
    },
    {
      key: 3,
      name: "Priya Mehta",
      description: "Portfolio Manager",
      status: "Lead Added",
      time: "3 days ago",
      type: "report",
    },
    {
      key: 4,
      name: "Rahul Verma",
      description: "Compliance Officer",
      status: "User Rejected",
      time: "5 days ago",
      type: "review",
    },
  ];

  // Trades Data
  const tradesData = [
    {
      status: "Active",
      description:
        "Alteia Commodity Trade Fund SP helps you diversify with global commodities while aiming for steady...",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=150&fit=crop&crop=entropy",
      duration: "9 mo",
      showCoins: false,
    },
    {
      status: "Active",
      description:
        "Alteia Fixed Income Fund SP leverages AI-driven strategies to target consistent fixed income growth of 12-15%.",
      duration: "9 mo",
      showCoins: true,
      coinText: "Original",
    },
  ];

  return (
    <Layout id="dashboardLayout">
      <DashboardHeader
        title="Welcome back, Sejal Kalyani!"
        subtitle="Dashboard Overview"
      />
      <Content id="dashboardContent">
        {/* Stats Cards */}
        <Row gutter={[16, 16]} className="mb-6">
          {statsData.map((stat, index) => (
            <Col key={index} xs={24} sm={12} lg={6}>
              <StatsCard {...stat} />
            </Col>
          ))}
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} lg={16}>
            {/* <Card> */}
            <div className="p-6">
              <div className="text-sm text-gray-600 mt-1">Recent Activity</div>
              <div className="font-medium text-gray-900">
                {" "}
                Your most recent approvals, updates, and changes.
              </div>
            </div>
            <RecentActivity
              activities={activityData}
              title="Today's Activity"
            />
            {/* </Card> */}
          </Col>
          <Col xs={24} lg={8}>
            <ActiveTrades trades={tradesData} activeCount={tradesData.length} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Dashboard;

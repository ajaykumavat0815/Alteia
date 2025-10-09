import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import Sidebar from "../../common/SideBar";
import {
  UserOutlined,
  BarChartOutlined,
  SettingOutlined,
  LogoutOutlined,
  AppstoreOutlined,
  LineChartOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import logo from "../../assets/images/Alteia Fund Logo.png";

const { Content } = Layout;

const MainLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { key: "/dashboard", icon: <AppstoreOutlined />, label: "Dashboard" },
    { key: "/investors", icon: <UserOutlined />, label: "Investors" },
    { key: "/funds", icon: <LineChartOutlined />, label: "Funds" },
    {
      key: "/portfolioROI",
      icon: <BarChartOutlined />,
      label: "Fund Performance",
    },
    { key: "/leads", icon: <UsergroupAddOutlined />, label: "Leads" },
  ];

  const footerItems = [
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
    },
  ];

  return (
    <Layout className="min-h-screen bg-[#F5F5F5] relative">
      {/* Sidebar (collapsible or drawer) */}
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        menuItems={menuItems}
        footerItems={footerItems}
        showFooter={true}
        logo={logo}
      />

      {/* Main Content Area */}
      <Layout
        style={{
          // On desktop, reserve sidebar width; on mobile, use full width
          marginLeft: isMobile ? "0px" : isCollapsed ? "80px" : "250px",
          transition: "margin-left 0.3s ease",
          minHeight: "100vh",
        }}
      >
        <Content
          style={{
            margin: isMobile ? "8px" : "0px",
            padding: isMobile ? "10px" : "0px",
            background: "transparent",
            borderRadius: "8px",
            minHeight: "calc(100vh - 32px)",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

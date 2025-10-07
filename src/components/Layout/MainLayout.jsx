import React, { useState } from "react";
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
const { Content } = Layout;
import logo from "../../assets/images/Alteia Fund Logo.png";

const MainLayout = ({ title, description, backButton, children }) => {
  // Track collapsed state here and pass to Sidebar
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { key: "/dashboard", icon: <AppstoreOutlined />, label: "Dashboard" },
    { key: "/investors", icon: <UserOutlined />, label: "Investors" },
    { key: "/funds", icon: <LineChartOutlined />, label: "Funds" },
    {
      key: "/performance",
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
      onClick: () => navigate("/settings"),
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      onClick: () => console.log("Logout clicked"),
    },
  ];
  return (
    <Layout style={{ minHeight: "100vh", background: "#F5F5F5" }}>
      {/* Sidebar (custom, not AntD Sider) */}
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        menuItems={menuItems}
        footerItems={footerItems}
        showFooter={true}
        logo={logo}
      />

      {/* Right-side layout */}
      <Layout
        style={{
          marginLeft: isCollapsed ? "24px" : "250px",
          transition: "margin-left 0.3s ease",
          paddingLeft: isCollapsed ? "50px" : "0px",
        }}
      >
        <Content
          style={{
            margin: "16px",
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

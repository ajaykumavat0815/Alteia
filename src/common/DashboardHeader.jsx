import React from "react";
import { Layout } from "antd";
import { BellOutlined, UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

const DashboardHeader = ({
  subtitle = "Dashboard Overview",
  title = "Welcome back, Sejal Kalyani!",
  showNotification = true,
  showUserAvatar = true,
  notificationCount = 0,
}) => {
  return (
    <Header
      id="dashboardHeader"
      className=" !px-6 !flex !justify-between !items-center"
    >
      <div>
        <p className="text-sm text-gray-500">{subtitle}</p>
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      </div>
      <div className="flex items-center gap-4">
        {showNotification && (
          <div className="relative cursor-pointer">
            <BellOutlined className="text-xl text-gray-600 hover:text-gray-800 transition-colors" />
            {notificationCount > 0 && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">{notificationCount}</span>
              </div>
            )}
          </div>
        )}

        {showUserAvatar && (
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-full p-1 transition-colors">
            <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
              <UserOutlined className="text-white text-sm" />
            </div>
            <span className="text-sm font-medium text-gray-700 hidden sm:block">
              Sejal Kalyani
            </span>
          </div>
        )}
      </div>
    </Header>
  );
};

export default DashboardHeader;

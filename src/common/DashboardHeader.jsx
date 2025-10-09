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
  reverseOrder = false, // new prop to control order
}) => {
  return (
    <Header
      id="dashboardHeader"
      className="!px-4 sm:!px-6 !py-3 flex items-center justify-between"
    >
      {/* Left side (title + subtitle) */}

      <div className="flex flex-col min-w-0 pl-5 sm:pl-0">
        {reverseOrder ? (
          <>
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 truncate">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 truncate mb-0">
              {subtitle}
            </p>
          </>
        ) : (
          <>
            <p className="text-xs sm:text-sm text-gray-500 truncate">
              {subtitle}
            </p>
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 truncate">
              {title}
            </h2>
          </>
        )}
      </div>

      {/* Right side (notifications + user) */}
      <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
        {showNotification && (
          <div className="relative cursor-pointer">
            <BellOutlined className="text-lg sm:text-xl text-gray-600 hover:text-gray-800 transition-colors" />
            {notificationCount > 0 && (
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] leading-none">
                  {notificationCount}
                </span>
              </div>
            )}
          </div>
        )}

        {showUserAvatar && (
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-full p-1 sm:p-2 transition-colors">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-500 rounded-full flex items-center justify-center">
              <UserOutlined className="text-white text-sm sm:text-base" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-700 hidden xs:block">
              Sejal Kalyani
            </span>
          </div>
        )}
      </div>
    </Header>
  );
};

export default DashboardHeader;

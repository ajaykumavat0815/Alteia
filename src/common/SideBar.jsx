import React from "react";
import { RightOutlined, LeftOutlined, MenuOutlined } from "@ant-design/icons";
import { Menu, Drawer } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({
  isCollapsed,
  setIsCollapsed,
  menuItems,
  footerItems,
  showFooter = false,
  logo,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = ({ key }) => {
    navigate(key);
    setIsDrawerOpen(false);
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#044F55] text-white">
      {/* Logo */}
      {!isCollapsed && (
        <div className="flex items-center justify-center mb-8 p-4">
          <img
            src={logo}
            alt="ALTEIA Logo"
            className="w-[200px] h-[85px] object-contain bg-transparent"
          />
        </div>
      )}

      {/* Section label */}
      {!isCollapsed && (
        <div className="px-4">
          <p className="text-xs text-teal-300 uppercase mb-2">Main</p>
        </div>
      )}

      {/* Menu */}
      <div className="flex-1 overflow-y-auto">
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={handleMenuClick}
          items={menuItems}
          className="sidebar-menu bg-transparent border-none text-white"
          inlineCollapsed={isCollapsed}
        />
      </div>

      {/* Footer Menu */}
      {showFooter && footerItems.length > 0 && (
        <div className="mt-auto px-2 pb-4">
          <Menu
            mode="inline"
            selectable={false}
            className="sidebar-menu bg-transparent border-none text-white"
            inlineCollapsed={isCollapsed}
            items={footerItems}
          />
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* 🔹 Desktop Sidebar */}
      <div
        className={`hidden md:flex flex-col fixed top-0 left-0 h-screen 
          ${isCollapsed ? "w-[80px]" : "w-[250px]"} 
          z-40 transition-all duration-300`}
      >
        <SidebarContent />

        {/* Collapse Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute top-4 right-[-16px] bg-[#044F55] text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-[#05666e]"
        >
          {isCollapsed ? <RightOutlined /> : <LeftOutlined />}
        </button>
      </div>

      {/* 🔹 Mobile Drawer Button (top-left corner) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="bg-[#044F55] text-white p-2 rounded-md shadow-md"
        >
          <MenuOutlined />
        </button>
      </div>

      {/* 🔹 Mobile Drawer */}
      <Drawer
        placement="left"
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        width={250}
        className="sidebar-drawer md:hidden"
        closeIcon={false}
        title={null}
        bodyStyle={{ padding: 0 }}
      >
        <SidebarContent />
      </Drawer>
    </>
  );
};

export default Sidebar;

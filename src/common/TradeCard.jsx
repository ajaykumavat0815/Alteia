import React from "react";
import { Card, Button } from "antd";
import { EyeOutlined, FileFilled } from "@ant-design/icons";
import { RiCoinsFill } from "react-icons/ri";

const TradeCard = ({
  status = "Active",
  description,
  image,
  duration = "9 mo",
  showCoins = false,
  coinText = "Original",
}) => {
  return (
    <Card className="shadow-md border p-4">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-green-600">{status}</span>
        </div>
        <p className="text-sm text-gray-600 mb-3">{description}</p>

        {image && (
          <div className="mb-3">
            <img
              src={image}
              alt="Trade visual"
              className="w-full h-24 object-cover rounded-md"
            />
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">
              <FileFilled /> {duration}
            </span>
            {showCoins && (
              <span className="text-xs text-gray-500">
                <RiCoinsFill style={{ fontSize: "16px" }} /> {coinText}
              </span>
            )}
          </div>
          <Button
            icon={<EyeOutlined />}
            className="!bg-[#6DBD44] !text-white hover:!bg-[#5aa63a] border-none"
          >
            View
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TradeCard;

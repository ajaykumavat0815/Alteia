import React from "react";
import { Card } from "antd";
import TradeCard from "./TradeCard";

const ActiveTrades = ({ trades, activeCount = 0 }) => {
  return (
    <Card
      title={
        <div>
          <div className="flex items-center gap-2 pt-[18px] pb-[18px]">
            <div className="flex items-center gap-2 mb-2 pt-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="text-gray-900 font-medium">Active Trades</span>
            </div>
            <span className="text-green-700 text-sm font-semibold bg-green-100 rounded-full px-2 py-0.5">
              {activeCount}
            </span>
          </div>
          <div className="mt-2 border-t-4 border-green-400 pb-[18px]"></div>
        </div>
      }
    >
      <div className="flex flex-col gap-6">
        {trades.map((trade, index) => (
          <TradeCard
            key={index}
            status={trade.status}
            description={trade.description}
            image={trade.image}
            duration={trade.duration}
            showCoins={trade.showCoins}
            coinText={trade.coinText}
          />
        ))}
      </div>
    </Card>
  );
};

export default ActiveTrades;

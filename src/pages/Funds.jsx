// src/pages/Funds.jsx
import React from "react";
import { Layout, Card } from "antd";

const { Header, Content } = Layout;

const Funds = () => {
  return (
    <Layout style={{ marginLeft: 280, minHeight: "100vh" }}>
      <Header
        style={{
          background: "#fff",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 1px 4px rgba(0,21,41,.08)",
        }}
      >
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Funds</h2>
        </div>
      </Header>

      <Content style={{ padding: "24px", background: "#f9fafb" }}>
        <Card>
          <h3>Funds Content</h3>
          <p>This is the funds page content.</p>
        </Card>
      </Content>
    </Layout>
  );
};

export default Funds;

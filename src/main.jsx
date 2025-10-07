// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { SuccessModalProvider } from "./context/SuccessModalProvider";
import { ConfigProvider } from "antd";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <SuccessModalProvider> */}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#a33434", // your theme red
          },
        }}
      >
        <App />
      </ConfigProvider>
      {/* </SuccessModalProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

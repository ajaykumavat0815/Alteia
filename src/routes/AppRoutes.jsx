// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Investors from "../pages/Investors";
import Funds from "../pages/Funds";
import MainLayout from "../components/Layout/mainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />
      <Route
        path="/investors"
        element={
          <MainLayout>
            <Investors />
          </MainLayout>
        }
      />
      <Route
        path="/funds"
        element={
          <MainLayout>
            <Funds />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./dashboard/layouts/MainLayout";
import AdminIndex from "./dashboard/pages/AdminIndex";
import Login from "./dashboard/pages/Login";
import ProtectDashboard from "./middleware/ProtectDashboard";
import Unable from "./dashboard/pages/Unable";
import News from "./dashboard/pages/News";
import Profile from "./dashboard/pages/Profile";
import AddWriter from "./dashboard/pages/Addwriter";
import Writers from "./dashboard/pages/Writers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectDashboard />}>
          <Route path="" element={<MainLayout />}>
            <Route path="" element={<Navigate to="/dashboard/admin" />} />
            <Route path="unable-access" element={<Unable />} />
            <Route path="news" element={<News />} />
            <Route path="profile" element={<Profile />} />

            <Route path="" element={<ProtectRole role="admin" />}>
              <Route path="admin" element={<AdminIndex />} />
              <Route path="writer/add" element={<AddWriter />} />
              <Route path="writers" element={<Writers />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

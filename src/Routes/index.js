import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../component/LandingPage";
import ProfileDetail from "../component/settings/Profile/Index";
import Layout from "../view/Layout";

const RoutesComponent = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/profile" element={<ProfileDetail />} />
      </Routes>
    </Layout>
  );
};
export default RoutesComponent;

import React from "react";
import { connect } from "react-redux";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import LandingPage from "../component/LandingPage";
import { PageNotFound } from "../component/pageNotFound";
import ProfileDetail from "../component/settings/Profile/Index";
import SignIn from "../component/SignIn";
import Layout from "../view/Layout";

export const ProtectedLayout = connect((state) => ({
  isAuth: state.auth.isAuthenticated,
}))(({ isAuth }) => {
  if (!isAuth) {
    return <Navigate to="/login" />;
  } else
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
});
const HomeLayout = connect((state) => ({
  isAuth: state.auth.isAuthenticated,
}))(({ isAuth }) => {
  if (isAuth) {
    return <Navigate to="/" />;
  } else return <Outlet />;
});
const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route element={<HomeLayout />}>
          <Route exact path="/login" element={<SignIn />} />
        </Route>
        <Route path="/" element={<ProtectedLayout />}>
          <Route exact path="" element={<LandingPage />} />
          <Route path="profile" element={<ProfileDetail />} />
        </Route>
      </Routes>
    </>
  );
};
export default connect((state) => ({
  isAuth: state.auth.isAuthenticated,
}))(RoutesComponent);

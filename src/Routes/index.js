import React from "react";
import { connect } from "react-redux";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Classroom from "../component/Admin/Classroom";
import AddStudent from "../component/Admin/Student/AddStudent";
import StudentList from "../component/Admin/Student/StudentList";
import UserDetailList from "../component/Admin/user list/UserDetailList";
import LandingPage from "../component/LandingPage";
import { PageNotFound } from "../component/pageNotFound";
import ProfileDetail from "../component/settings/Profile/Index";
import ThemeCustomization from "../component/settings/Profile/ThemeCustomization";
import SignIn from "../component/SignIn";
import VerifyEmail from "../component/SignIn/VerifyEmail";
import StudentDetail from "../component/Student Detail/StudentDetail";
import Layout from "../view/Layout";
import SettingView from "../view/setting";

export const ProtectedLayout = connect((state) => ({
  isAuth: state.auth?.isAuthenticated,
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

const SettingLayout = connect((state) => ({
  isAuth: state.auth?.isAuthenticated,
}))(({ isAuth }) => {
  if (!isAuth) {
    return <Navigate to="/login" />;
  } else
    return (
      <SettingView>
        <Outlet />
      </SettingView>
    );
});
const HomeLayout = connect((state) => ({
  isAuth: state.auth?.isAuthenticated,
}))(({ isAuth }) => {
  if (isAuth) {
    return <Navigate to="/" />;
  } else return <Outlet />;
});
const RoutesComponent = () => {
  const role = "ADMIN";
  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route element={<HomeLayout />}>
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/confirm/:code" element={<VerifyEmail />} />
        </Route>
        <Route path="/" element={<ProtectedLayout />}>
          {role === "ADMIN" ? (
            <>
              <Route exact path="" element={<LandingPage />} />
              <Route path="/profile" element={<ProfileDetail />} />
              <Route path="/userDetailList" element={<UserDetailList />} />
              <Route path="/studentDetail" element={<StudentDetail />} />
              <Route path="/student-list" element={<StudentList />} />
              <Route path="/add-student" element={<AddStudent />} />
            </>
          ) : role === "TEACHER" ? (
            <>
              <Route path="/profile" element={<ProfileDetail />} />
            </>
          ) : role === "STUDENT" ? (
            <>
              <Route path="/profile" element={<ProfileDetail />} />
            </>
          ) : null}
        </Route>
        <Route path="/setting" element={<SettingLayout />}>
          <Route path="/setting" element={<UserDetailList />} />
          <Route path="/setting/profile" element={<ProfileDetail />} />
          <Route path="/setting/theme" element={<ThemeCustomization />} />
          <Route path="/setting/class" element={<Classroom />} />
        </Route>
      </Routes>
    </>
  );
};
export default connect((state) => ({
  isAuth: state.auth.isAuthenticated,
}))(RoutesComponent);

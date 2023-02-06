import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "./header";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Sidebar from "./sidebar/sidebar";

const Layout = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <StyledMainContainer>
      <Sidebar />

      <div style={{ width: "100%" }}>
        <Header />
        <StyledContent>{props.children}</StyledContent>
      </div>
    </StyledMainContainer>
  );
};
export default Layout;
const StyledMainContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const StyledContent = styled.div`
  padding: 12px;
  /* margin-bottom: 8px; */
  height: calc(100vh - 61px);
  overflow-y: scroll;
  /* overflow-x: hidden; */
`;

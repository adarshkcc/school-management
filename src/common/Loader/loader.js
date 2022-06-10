import { Spin } from "antd";
import React from "react";
import styled from "styled-components";
const Loader = ({ children, loading = false }) => {
  return (
    <>
      <StyledSpin spinning={loading}>{children}</StyledSpin>
    </>
  );
};
export default Loader;
const StyledSpin = styled(Spin)``;

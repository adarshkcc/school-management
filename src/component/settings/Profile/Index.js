import React from "react";
import styled from "styled-components";
import ProfileComponent from "./ProfileComponent";
import ThemeCustomization from "./ThemeCustomization";
const ProfileDetail = () => {
  return (
    <StyledMainContainer>
      <ProfileComponent />
      <hr />
      <ThemeCustomization />
    </StyledMainContainer>
  );
};
export default ProfileDetail;

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1;
  hr {
    width: 100%;
    background: ${({ theme }) => theme.color.lightBlack};
    opacity: 0.5;
  }
`;

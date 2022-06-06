import React from "react";
import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";
import ProfilePage from "./ProfilePage";
const ProfileComponent = () => {
  return (
    <StyledProfileContainer>
      <div className="profile_page">
        <ProfilePage />
      </div>
      <div style={{ flexGrow: 2 }}>
        {" "}
        <ProfileInfo />
      </div>
    </StyledProfileContainer>
  );
};
export default ProfileComponent;

const StyledProfileContainer = styled.div`
  display: flex;
  .profile_page {
    flex-grow: 1;
    border-right: 1px solid;
    border-color: ${({ theme }) => theme.color.lightBlack};
  }
`;

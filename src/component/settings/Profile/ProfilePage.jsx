import { faCamera } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import styled from "styled-components";
import { FontAwesomeIcons } from "../../../common/FontAwesomeIcons";
import ToolTip from "../../../common/Tooltip/ToolTip";
const ProfilePage = () => {
  return (
    <>
      <StyledProfilePage>
        <div className="profile_div">
          <div className="profile_img_div">
            <img
              className="profile_img"
              src="https://images.statusfacebook.com/profile_pictures/stylish-boys/boys-profile-pics-456.jpg"
              alt=""
            />
            <span>
              <ToolTip title="Upload profile picture" placement="right">
                {FontAwesomeIcons(faCamera)}
              </ToolTip>
            </span>
          </div>
          <h3>Adarsh Modanwal</h3>
          <h3>rajlovesskfc@gmail.com</h3>
        </div>
      </StyledProfilePage>
    </>
  );
};
export default ProfilePage;
const StyledProfilePage = styled.div`
  .profile_div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h3 {
      color: ${({ theme }) => theme.color.lightBlack};
    }
  }
  .profile_img_div {
    // position: relative;
    border-radius: 50%;
    span {
      color: ${({ theme }) => theme.color.baseGrey};
      margin-left: 7px;
    }
  }
  .profile_img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid;
    border-color: ${({ theme }) => theme.color.second};
  }
`;

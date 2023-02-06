import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Dropdown, Select } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";
import { MdNotifications } from "react-icons/md";
import { logout } from "../../../reducer/authReducer";
import { AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Option = { Select };
const Header = ({ user }) => {
  console.log(user);
  const [language, setLanguage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  // useEffect(() => {
  //   setLanguage(myLanguage);
  //   i18n.changeLanguage(myLanguage);
  // }, [myLanguage]);
  // const changeMyLanguage = (e) => {
  //   dispatch({
  //     type: CHANGE_LANGUAGE,
  //     payload: e,
  //   });
  // };

  const items = [
    {
      key: "1",
      label: (
        <StyledMenu onClick={() => navigate("/setting")}>
          <AiOutlineSetting />
          <div>Setting</div>
        </StyledMenu>
      ),
    },
    {
      key: "2",
      label: (
        <StyledMenu onClick={() => dispatch(logout())}>
          <AiOutlineLogout />
          <div>Logout</div>
        </StyledMenu>
      ),
    },
  ];
  return (
    <StyledHeader>
      <div>School Management</div>
      <div className="header-left-content">
        <div>
          <Badge size="small" count={99}>
            <MdNotifications
              style={{ fontSize: "22px", marginTop: "4px", cursor: "pointer" }}
            />
          </Badge>
        </div>
        <div>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            arrow
          >
            <div className="user-dropdown">
              <Avatar
                src="https://images.statusfacebook.com/profile_pictures/stylish-boys/boys-profile-pics-456.jpg"
                icon={<UserOutlined />}
                style={{ verticalAlign: "middle" }}
                size={28}
              />

              <div>{user.firstName + " " + user.lastName}</div>

              <DownOutlined />
            </div>
          </Dropdown>
        </div>
      </div>
    </StyledHeader>
  );
};

export default connect((state) => ({
  user: state.auth.user,
}))(Header);
const StyledHeader = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  border-radius: 0 0 0 23px;
  background: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.second};

  .header-left-content {
    margin-left: auto;
    margin-right: 14px;
    display: flex;
    gap: 2rem;
    align-items: center;

    .ant-badge {
      color: #fff;
    }
  }

  .user-dropdown {
    color: #fff;
    /* background: #fff; */
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 3px;
    border-radius: 9px;
    cursor: pointer;
    font-weight: 500;
    .ant-avatar {
      background: ${({ theme }) => theme.color.main};
    }

    &:hover {
      color: #778899;
      background-color: #fff;
      transition: all 0.5s ease-out;
    }
  }
`;

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 18px;
`;

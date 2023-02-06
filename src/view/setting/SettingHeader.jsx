import styled from "styled-components";
import { AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { MdLocationOn, MdOutlineHelpOutline } from "react-icons/md";

import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { logout } from "../../reducer/authReducer";

const SettingHeader = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);

  const items = [
    {
      key: "1",
      label: (
        <StyledMenu>
          <MdOutlineHelpOutline />
          <div>Help</div>
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
      <div className="breadcrum-wrapper">
        <MdLocationOn />
        <p className="breadcrum">{location.pathname.substring(1)}</p>
      </div>
      <div className="change_language">
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
                size={32}
              />

              <div>{user?.firstName + " " + user?.lastName}</div>

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
}))(SettingHeader);

const StyledHeader = styled.header`
  height: 70px;
  border-bottom: 1px solid #ededed;
  background-color: ${({ theme }) => theme.color.main};
  color: #fff;
  display: flex;
  align-items: center;
  border-radius: 0 0 0 23px;
  .breadcrum-wrapper {
    font-size: 26px;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    .breadcrum {
      font-size: 18px;
    }
  }
  .change_language {
    margin-left: auto;
  }
  .user-dropdown {
    background: none;
    color: #fff;
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
  }
`;

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 18px;
`;

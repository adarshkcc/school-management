import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { FaPinterestP } from "react-icons/fa";

import { menuItems } from "./menuItems";
import { useLocation, useNavigate } from "react-router-dom";
const SettingSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <StyledSidebar>
      <div>
        <img className="logo" src="/assets/images/learning1.png" alt="logo" />
      </div>
      <br />
      <div className="sidebar-menu">
        <div className="menu-items" onClick={() => navigate("/")}>
          <MdDashboard /> <div>Dashboard</div>
        </div>

        <div
          className={
            pathname === "/setting/profile"
              ? "menu-items single-items active-item"
              : "menu-items single-items"
          }
          onClick={() => navigate("/setting/profile")}
        >
          <FaPinterestP /> <div>Profile</div>
        </div>

        {menuItems.map((data, i) => (
          <>
            <div
              key={data.key}
              className="menu-title"
              style={{ marginTop: i === 0 ? "23px" : "0px" }}
            >
              {data.title}
            </div>
            {data.items.map((item, index) => (
              <div
                key={item.key}
                className={
                  pathname === item.path
                    ? "menu-items active-item"
                    : "menu-items"
                }
                style={{
                  marginTop: index === 0 ? "7px" : "18px",
                }}
                onClick={() => navigate(item.path)}
              >
                {item.icon} <div>{item.content}</div>
              </div>
            ))}
            <br />
          </>
        ))}
      </div>
    </StyledSidebar>
  );
};
export default SettingSidebar;
const StyledSidebar = styled.div`
  min-width: 250px;
  height: 100vh;
  /* max-height: 100vh; */
  border-right: 1px solid #ededed;
  padding: 20px;

  overflow-y: scroll;

  .logo {
    width: 80px;
  }
  .menu-title {
    color: #9fa3ba;
    font-size: 18px;
    font-weight: 500;
  }
  .menu-items {
    color: #7e84a5;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    padding: 12px;
    &:hover {
      background-color: ${({ theme }) => theme.color.third};
      transition: all 0.2 ease-in-out;
      transform: scale(1.1);
    }
  }

  .active-item {
    background-color: ${({ theme }) => theme.color.third};
  }
  .single-items {
    margin-top: 18px;
  }
`;

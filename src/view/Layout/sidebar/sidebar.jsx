import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

// import { menuItems } from "./menuItems";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebarMenuItems } from "../menu";
import { useState } from "react";
const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [openList, setOpenList] = useState(null);
  return (
    <StyledSidebar>
      <div>
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/thumbnails/016/717/261/small/education-object-school-illustration-3d-png.png"
          alt="logo"
        />
      </div>
      {/* <br /> */}
      <div className="sidebar-menu">
        <div
          className={
            pathname === "/" ? " single-items active-item" : " single-items"
          }
          onClick={() => navigate("/")}
        >
          <MdDashboard /> <div>Dashboard</div>
        </div>

        {sidebarMenuItems.map((data, i) => (
          <>
            <div
              key={data.key}
              className={
                data.items.some((d) => pathname.includes(d.path))
                  ? "menu-title active-menu-title"
                  : "menu-title"
              }
              onClick={() => setOpenList(i === openList ? null : i)}
            >
              {data.icon} <div>{data.title}</div>
              {openList === i ? (
                <BiChevronDown style={{ marginLeft: "auto" }} />
              ) : (
                <BiChevronRight style={{ marginLeft: "auto" }} />
              )}
            </div>
            {openList === i &&
              data.items.map((item, index) => (
                <div
                  key={item.key}
                  className={
                    pathname === item.path
                      ? "menu-items active-item"
                      : "menu-items"
                  }
                  onClick={() => navigate(item.path)}
                >
                  {item.icon} <div>{item.content}</div>
                </div>
              ))}
            {/* <br /> */}
          </>
        ))}
      </div>
    </StyledSidebar>
  );
};
export default Sidebar;
const StyledSidebar = styled.div`
  min-width: 250px;
  height: 100vh;
  /* max-height: 100vh; */
  border-right: 1px solid #ededed;
  padding: 20px;

  overflow-y: scroll;

  .logo {
    width: 125px;
  }

  .sidebar-menu {
    margin-bottom: 40px;
  }
  .menu-title {
    margin-top: 20px;
    color: #7e84a5;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 12px;
    cursor: pointer;
  }

  .active-menu-title {
    color: ${({ theme }) => theme.color.main};
  }

  .menu-items {
    margin-top: 12px;
    color: #7e84a5;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    padding: 10px;
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
`;

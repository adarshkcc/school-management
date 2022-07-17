import { Layout as Layouts, Menu } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LOGOUT } from "../../action/api/action-types";
import Header from "./header";
import { useDispatch } from "react-redux";
import { MenuItems } from "./menu";
const { Sider, Content } = Layouts;
const Layout = (props) => {
  const history = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const logout = () => {
    console.log("first");
    dispatch({
      type: LOGOUT,
    });
  };
  return (
    <StyledMainContainer>
      <Header />

      <Layouts style={{ minHeight: "calc(100vh - 44px)" }}>
        <Sider
          className="site-layout-background"
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <br />
          <br />
          <Menu
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
            items={MenuItems}
            onClick={(e) => (e.key == "logout" ? logout() : history(e.key))}
          />
        </Sider>
        <Content className="layout_contents">{props.children}</Content>
      </Layouts>
    </StyledMainContainer>
  );
};
export default Layout;
const StyledMainContainer = styled.div`
  .site-layout-background {
    background: #f7f6fb;
    // border-right: 2px solid;
    // border-color: ${({ theme }) => theme.color.main};
  }
  .ant-menu {
    background: #f7f6fb;
  }
  .ant-menu-item {
    font-size: 18px;
    color: ${({ theme }) => theme.color.lightBlack};
    font-weight: 500;
  }
  .ant-menu-item .ant-menu-item-icon {
    color: ${({ theme }) => theme.color.main};
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: ${({ theme }) => theme.color.fourth};
  }
  .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-vertical-left .ant-menu-item::after,
  .ant-menu-vertical-right .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-right: 4px solid;
    border-color: ${({ theme }) => theme.color.main};
  }

  .ant-menu-light .ant-menu-item:hover,
  .ant-menu-light .ant-menu-item-active,
  .ant-menu-light .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  .ant-menu-light .ant-menu-submenu-active,
  .ant-menu-light .ant-menu-submenu-title:hover {
    color: ${({ theme }) => theme.color.main};
  }
  .ant-layout-sider-trigger {
    background: ${({ theme }) => theme.color.main};
  }
  .layout_contents {
    overflow: scroll;
    padding: 15px;
    background: ${({ theme }) => theme.color.lightWhite};
    height: calc(100vh - 44px);
  }
`;

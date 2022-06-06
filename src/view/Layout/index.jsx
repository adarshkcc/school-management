import { Layout as Layouts, Menu } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./header";
import { MenuItems } from "./menu";
const { Sider, Content } = Layouts;
const Layout = (props) => {
  const history = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
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
            onClick={(e) => history(e.key)}
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
    background: ${({ theme }) => theme.color.second};
    // border-right: 2px solid;
    // border-color: ${({ theme }) => theme.color.main};
  }
  .ant-menu {
    background: ${({ theme }) => theme.color.second};
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
    padding: 15px;
    background: ${({ theme }) => theme.color.lightWhite};
  }
`;

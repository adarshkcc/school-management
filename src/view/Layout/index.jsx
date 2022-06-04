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
        <Content>{props.children}</Content>
      </Layouts>
    </StyledMainContainer>
  );
};
export default Layout;
const StyledMainContainer = styled.div`
  .site-layout-background {
    background: #fff;
    border-right: 2px solid;
    border-color: ${({ theme }) => theme.color.main};
  }
  .ant-layout-sider-trigger {
    background: ${({ theme }) => theme.color.main};
  }
`;

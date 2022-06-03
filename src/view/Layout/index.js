import React from "react";
import styled from "styled-components";
import Header from "./header";

const Layout=(props)=>{
    return (<StyledMainContainer><Header/>{props.children}</StyledMainContainer>)
}
export default Layout
const StyledMainContainer=styled.div`
padding-bottom:5px;
`
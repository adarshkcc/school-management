import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { colorsConstants } from "./colorConstant";
let initialState = {
  font: {
    main: "SF UI Display",
  },
  color: {
    // theme colors start
    main: "#4169E1",
    second: "#F4EEEA",
    third: "#f1ece6",
    fourth: "#c1c8db",
    // theme colors end
    borderColor: "#cbcbcb",
    white: "#fff",
    lightWhite: "#FDFDFD",
    black: "#000",
    lime: "#15D500",
    blueDark: "#4169E1",
    brown: "#535353",
    lightBlack: "#535353",
    border: "#9B9B9B",
    background: "#f0f0f0",
    purple: "#A3B6ED",
    lightPurple: "#DDE4FA",
    orange: "#FA6D22",
    green: "#1CB954",
    error: "#c52e2e;",
    rowGrey: "#F7F7F7",
    rowGreyOver: "#EDEDED",
    lightGrey: "#9E9E9E",
    grey: "#B5B5B5",
    btnLightBlue: "#DBE9F5",
    lightLime: "#d4f6d0",
    btnGreen: "#16b757",
    btnGrey: "#efefef",
    listBorderGrey: "#e6e6e6",
    deleteRed: "#c52e2e",
    deleteBgBlue: "#b1e1ea",
    passGreen: "#3AA422",
    blockedRed: "#E5B800",
    red: "#E65454",
    stepBg: "#59A4B2",
    lineGrey: "#CACACA",
    baseGrey: "#8E8E8E",
    status: "#707070",
    warning: "#7E0730",
    buttonGrey: "#7E84A3",
  },
  borderRadius: "9px",
  browser: {
    isChrome: false,
  },
};
const ThemeConsumer = ({ children, colorIndex }) => {
  const [theme, setTheme] = useState(initialState);
  useEffect(() => {
    let { main, second, third, fourth } = colorsConstants[colorIndex];
    setTheme({
      ...theme,
      color: { ...theme.color, main, second, third, fourth },
    });
  }, [colorIndex]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default connect((state) => ({
  colorIndex: state.theme.colorIndex,
}))(ThemeConsumer);

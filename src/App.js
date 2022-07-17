import logo from "./logo.svg";
// import "./App.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { LoadingBar } from "react-redux-loading-bar";
import LandingPage from "./component/LandingPage";
import "antd/dist/antd.css";
import { DatePicker } from "antd";

import RoutesComponent from "./Routes/index.js";
import ThemeConsumer from "./common/GlobleStyle/ThemeConsumer";
const App = () => {
  const { t } = useTranslation("mains");

  return (
    <ThemeConsumer>
      <LoadingBar style={{ backgroundColor: "#e5d4c9" }} />

      <RoutesComponent />
    </ThemeConsumer>
  );
};

export default App;

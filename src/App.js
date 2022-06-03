import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { LoadingBar } from "react-redux-loading-bar";
import LandingPage from "./component/LandingPage";
import 'antd/dist/antd.css'

import RoutesComponent from "./Routes/index.js";
const App = () => {
  


  const { t } = useTranslation("mains");
  console.log("t", t);
  return (
    <div>
      <LoadingBar style={{ backgroundColor: "#e5d4c9" }} />

     <RoutesComponent/>
    </div>
  );
};

export default App;

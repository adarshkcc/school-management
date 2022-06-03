import React from "react";
import { Routes ,Route } from "react-router-dom";
import LandingPage from "../component/LandingPage";
import Layout from "../view/Layout";

const RoutesComponent=()=>{
    return(
        <Layout>

        <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
        </Routes>
        </Layout>

    )
}
export default RoutesComponent
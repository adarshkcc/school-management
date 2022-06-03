
import React from "react";
import { useTranslation } from "react-i18next";

const LandingPage=()=>{
   
    const {t} =useTranslation("mains")
   
  
    return(
        <div>
            
            <h3 style={{textAlign:"center"}}>{t("title")}</h3>
        </div>
    )
}
export default LandingPage
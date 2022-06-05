import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";
import { CHANGE_LANGUAGE } from "../../../action/api/action-types";
const Option = { Select };
const Header = ({ myLanguage }) => {
  const [language, setLanguage] = useState("");
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    setLanguage(myLanguage);
    i18n.changeLanguage(myLanguage);
  }, [myLanguage]);
  const changeMyLanguage = (e) => {
    dispatch({
      type: CHANGE_LANGUAGE,
      payload: e,
    });
  };
  return (
    <StyledHeader>
      <div>Welcome to React Localization</div>
      <div className="change_language">
        <div className="globe_icon">
          <FontAwesomeIcon icon={faGlobe} />
        </div>
        <div>
          <Select
            placeholder="Select language"
            value={language}
            onChange={changeMyLanguage}
          >
            <Option value="en">English</Option>
            <Option value="fn">French</Option>
          </Select>
        </div>
      </div>
    </StyledHeader>
  );
};

export default connect((state) => ({
  myLanguage: state.config.language,
}))(Header);
const StyledHeader = styled.div`
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  border-radius: 24px;
  background: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.second};

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background: none;
    border: none;
  }

  .change_language {
    position: absolute;
    right: 14px;
    display: flex;
  }
  .globe_icon {
    font-size: 20px;
  }
`;

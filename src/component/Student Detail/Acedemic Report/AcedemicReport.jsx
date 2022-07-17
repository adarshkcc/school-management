import {
  faAddressBook,
  faAward,
  faBookOpen,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Progress, Tabs } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcons } from "../../../common/FontAwesomeIcons";
import Attendance from "./Attendance/Attendance";
const { TabPane } = Tabs;
const AcedemicReport = () => {
  const [tabNo, setTabNo] = useState("1");

  const handleTab = (key) => {
    setTabNo(key);
  };
  return (
    <StyledMainContainer>
      <StyledTab defaultActiveKey="1" onChange={handleTab} tabPosition="left">
        <TabPane
          tab={
            <Button className="tab_btns">
              <span className="report-icon">
                {FontAwesomeIcons(faAddressBook)}
              </span>{" "}
              &nbsp;&nbsp;Attendance
            </Button>
          }
          key="1"
        >
          {tabNo == "1" && (
            <>
              {" "}
              <Attendance />
            </>
          )}
        </TabPane>
        <TabPane
          tab={
            <Button className="tab_btns">
              <span className="report-icon">
                {FontAwesomeIcons(faBookOpen)}
              </span>{" "}
              &nbsp;&nbsp;Report Card
            </Button>
          }
          key="2"
        >
          {tabNo == "2" && <>Report Card</>}
        </TabPane>
        <TabPane
          tab={
            <Button className="tab_btns">
              <span className="report-icon">
                {FontAwesomeIcons(faBookOpen)}
              </span>{" "}
              &nbsp;&nbsp;Sesstional Report
            </Button>
          }
          key="3"
        >
          {tabNo == "3" && <>Sesstional Report</>}
        </TabPane>
        <TabPane
          tab={
            <Button className="tab_btns">
              <span className="report-icon">{FontAwesomeIcons(faAward)}</span>{" "}
              &nbsp;&nbsp;Awards & Achievements
            </Button>
          }
          key="4"
        >
          {tabNo == "4" && <>Awards & Achievements</>}
        </TabPane>
      </StyledTab>
    </StyledMainContainer>
  );
};
export default AcedemicReport;
const StyledMainContainer = styled.div`
  margin: 0 12px 12px;
  box-shadow: 4px 7px 13px 2px lightgray;
  padding: 12px;
`;
const StyledTab = styled(Tabs)`
  .ant-tabs-tab-btn {
    // font-size: 16px;
  }
  .tab_btns {
    background: none;
    border: none;
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
    box-shadow: 4px 7px 13px 2px lightgray;
    border-radius: 8px;
  }
  .report-icon {
    // color: ${({ theme }) => theme.color.main};
    color: #faad14;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    .tab_btns {
      font-weight: 500;
      padding: 4px 10px;
      background: linear-gradient(to right, #32ded4ff 0%, #40a9ff 100%);
      color: ${({ theme }) => theme.color.lightWhite};
    }
    .report-icon {
      color: ${({ theme }) => theme.color.lightWhite};
    }
  }
`;

import { Badge, Button, Tabs } from "antd";
import { useState } from "react";
import styled from "styled-components";
import AcedemicReport from "./Acedemic Report/AcedemicReport";
import Details from "./Details";
const { TabPane } = Tabs;
const StudentDetail = () => {
  const [tabNo, setTabNo] = useState("1");
  const handleTab = (key) => {
    setTabNo(key);
  };
  return (
    <>
      <StyledCardContainer>
        <div
          className="school-background-img"
          style={{
            background:
              "url('https://uploads-ssl.webflow.com/5e96913c9bac7c0b5cb3391c/5f44a7398c0cdf460857e744_img-image.jpg') no-repeat center center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="student-details">
          <img
            src="https://smiletutor.sg/wp-content/uploads/2020/12/AdobeStock_292618444-scaled.jpeg"
            alt="student profile picture"
          />
          <div className="detail-head">
            Andrew simmons
            <br />
            <span className="detail-txt"> andrewsimmons@gmail.com</span>
          </div>
          <div className="detail-head">
            DOB
            <br />
            <span className="detail-txt">05 Oct,2000</span>
          </div>
          <div className="detail-head">
            Standard
            <br />
            <span className="detail-txt">5th</span>
          </div>
          <div className="detail-head">
            Contact No.
            <br />
            <span className="detail-txt">8081385129</span>
          </div>
          <div className="detail-head">
            Class Teacher
            <br />
            <span className="detail-txt">Susmita Sen</span>
          </div>
          <div className="detail-head">
            House
            <br />
            <span className="detail-txt">
              <Badge color="red" /> Red
            </span>
          </div>
        </div>

        <StyledTab defaultActiveKey="1" onChange={handleTab}>
          <TabPane
            tab={<Button className="tab_btn">Student Detail</Button>}
            key="1"
          >
            {tabNo == "1" && <Details />}
          </TabPane>
          <TabPane
            tab={<Button className="tab_btn">Acedemic Report</Button>}
            key="2"
          >
            {tabNo == "2" && <AcedemicReport />}
          </TabPane>
          <TabPane
            tab={<Button className="tab_btn">Fee Details</Button>}
            key="3"
          >
            {tabNo == "3" && <Details />}
          </TabPane>
          <TabPane
            tab={<Button className="tab_btn">Time Table</Button>}
            key="4"
          >
            {tabNo == "4" && <Details />}
          </TabPane>
        </StyledTab>
      </StyledCardContainer>
    </>
  );
};
export default StudentDetail;

const StyledCardContainer = styled.div`
  .school-background-img {
    height: 300px;
    width: 100%;
  }
  .student-details {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    gap: 0.5rem;
    padding: 20px;
    img {
      width: 180px;
      height: 180px;
      object-fit: cover;
      margin-top: -105px;
      border: 7px solid #778899b5;
    }

    .detail-head {
      flex-grow: 1;

      color: #778899;
      font-size: 18px;
      font-weight: 600;
      border-right: 1px solid #77889959;
      padding: 0 8px;
    }
    .detail-txt {
      color: #778899;
      font-size: 16px;
      font-weight: normal;
    }
  }
`;

const StyledTab = styled(Tabs)`
  .tab_btn {
    border-color: ${({ theme }) => theme.color.main};
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    .tab_btn {
      background: ${({ theme }) => theme.color.main};
      color: #fff;
    }
  }
`;

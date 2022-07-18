import { Progress, Card } from "antd";
import styled from "styled-components";

const Attendance = () => {
  const styleHead = {
    textAlign: "center",
    border: "none",
    color: "#778899",
  };
  return (
    <StyledDiv>
      <StyledCard
        title="Current Attendance"
        hoverable={true}
        style={{ width: 300 }}
        bodyStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        headStyle={styleHead}
        bordered={false}
      >
        <Progress
          type="circle"
          strokeColor={{
            "0%": "#32ded4ff",
            "100%": "#40a9ff",
          }}
          percent={75}
        />
      </StyledCard>
      <StyledCard
        title="Current Attendance Detail"
        hoverable={true}
        bordered={false}
        style={{ width: 300 }}
        bodyStyle={{
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
        headStyle={styleHead}
      >
        <div className="progress_div">
          <span className="progress_head">Present</span> : <span>75 days</span>
          <Progress
            strokeColor={{
              "0%": "#32ded4ff",
              "100%": "#40a9ff",
            }}
            percent={75}
          />
        </div>
        <div className="progress_div">
          <span className="progress_head">Absent</span> : <span>25 days</span>
          <Progress
            strokeColor={{
              "0%": "#fff",
              "100%": "red",
            }}
            percent={25}
          />
        </div>
      </StyledCard>
    </StyledDiv>
  );
};
export default Attendance;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StyledCard = styled(Card)`
  box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%),
    0 5px 12px 4px rgb(0 0 0 / 9%);
  .progress_div {
    width: 100%;
    .progress_head {
      font-weight: 500;
    }
  }
`;

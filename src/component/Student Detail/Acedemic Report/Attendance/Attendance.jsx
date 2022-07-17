import { Progress } from "antd";

const Attendance = () => {
  return (
    <>
      <Progress
        type="circle"
        strokeColor={{
          "0%": "#32ded4ff",
          "100%": "#40a9ff",
        }}
        percent={75}
      />
    </>
  );
};
export default Attendance;

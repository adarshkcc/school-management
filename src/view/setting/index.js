import styled from "styled-components";
import SettingHeader from "./SettingHeader";
import SettingSidebar from "./SettingSidebar";

const SettingView = (props) => {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <SettingSidebar />
      <div style={{ width: "100%" }}>
        <SettingHeader />
        <StyledContent>{props.children}</StyledContent>
      </div>
    </div>
  );
};
export default SettingView;

const StyledContent = styled.div`
  padding: 12px;
  margin-bottom: 8px;
  height: calc(100vh - 71px);
  overflow-y: scroll;
  /* overflow-x: hidden; */
`;

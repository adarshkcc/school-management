import { Tooltip } from "antd";
import React from "react";

const ToolTip = ({ title, placement = "top", children }) => {
  return (
    <Tooltip title={title} placement={placement}>
      {children}
    </Tooltip>
  );
};
export default ToolTip;

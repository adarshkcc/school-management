import { Tag } from "antd";
import React from "react";
import styled from "styled-components";

const UpdateBtn = ({
  editMode = false,
  color = "#15D500",
  onUpdate,
  onSave,
  onCancel,
  btnTxt = "Update",
  saveBtnTxt = "Save",
  cancelBtnTxt = "Dismiss",
  dismissColor = "#8E8E8E",
}) => {
  if (!editMode)
    return (
      <>
        <StyledTag color={color} onClick={onUpdate}>
          {btnTxt}
        </StyledTag>
      </>
    );
  else
    return (
      <div style={{ display: "flex", gap: "1rem" }}>
        <StyledTag color={color} onClick={onSave}>
          {saveBtnTxt}
        </StyledTag>
        <StyledTag
          className="dismiss_tag"
          color={dismissColor}
          onClick={onCancel}
        >
          {cancelBtnTxt}
        </StyledTag>
      </div>
    );
};
export default UpdateBtn;
const StyledTag = styled(Tag)`
  width: 68px;
  text-align: center;
  color: ${({ theme }) => theme.color.lightWhite};
  font-weight: 500;
  cursor: pointer;
`;

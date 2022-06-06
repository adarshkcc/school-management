import { Input } from "antd";
import React from "react";
import styled from "styled-components";

const ProfileInput = ({
  type,
  value,
  onChange,
  maxLength = 0,
  showCount = false,
  required = false,
  name,
}) => {
  if (maxLength)
    return (
      <StyledInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        showCount={showCount}
        maxLength={maxLength}
        required={required}
      />
    );
  else
    return (
      <StyledInput
        type={type}
        value={value}
        name={name}
        required={required}
        onChange={onChange}
      />
    );
};
export default ProfileInput;
const StyledInput = styled(Input)`
  width: 80%;
`;

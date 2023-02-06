import { Avatar, Tooltip } from "antd";
import styled from "styled-components";

export const UserAvatar = ({ profileImg, firstName = "", lastName = "" }) => {
  let initial = firstName.substring(0, 1) + lastName.substring(0, 1);
  return (
    <Tooltip title={`${firstName + " " + lastName}`}>
      <StyledAvatar src={profileImg}>{initial.toUpperCase()}</StyledAvatar>
    </Tooltip>
  );
};

const StyledAvatar = styled(Avatar)`
  background: ${({ theme }) => theme.color.main};
`;

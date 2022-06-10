import { Button, Card, Checkbox, Drawer, Modal } from "antd";
import styled from "styled-components";

export const StyledMainContainer = styled.div`
  height: 100vh;
  background: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .remember_pass {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.lightGrey};
  }
  .forgot_pass {
    cursor: pointer;
  }
  .create_account {
    text-align: center;
    color: ${({ theme }) => theme.color.lightGrey};
    font-size: 16px;
  }
  .create {
    color: #1f9bd7;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const StyledCard = styled(Card)`
  box-shadow: -3px 5px 13px rgb(121 139 220 / 40%);
  border-radius: 9px;
  .ant-card-head-title {
    color: #1f9bd7;
    font-size: 20px;
    font-weight: 600;
    // font-family: lato;
  }
  .ant-input-affix-wrapper {
    box-shadow: 4px 5px 17px #adb7e6;
    border-radius: 26px;
    height: 49px;
  }
  .ant-input-suffix {
    color: ${({ theme }) => theme.color.lightGrey};
  }
  .ant-input-prefix {
    color: #1f9bd7;
  }
  .ant-input {
    color: ${({ theme }) => theme.color.lightGrey};
    font-size: 16px;
    font-weight: 600;
  }
`;
export const StyledButton = styled(Button)`
  width: 100%;
  background: linear-gradient(to right, #32ded4ff 0%, #002bdcff 100%);
  color: ${({ theme }) => theme.color.lightWhite};
  height: 49px;
  border-radius: 26px;
  border: 2px solid;
  border-color: linear-gradient(to right, #32ded4ff 0%, #002bdcff 100%);
  font-weight: 600;
`;
export const StyledCheckbox = styled(Checkbox)`
  color: ${({ theme }) => theme.color.lightGrey};
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: linear-gradient(to right, #32ded4ff 0%, #002bdcff 100%);
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    // background: none;
  }
`;

// sign up form

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-title {
    color: #1f9bd7;
    font-size: 20px;
    font-weight: 600;
  }
`;
export const StyledSignUpMainContainer = styled.div`
  .user_name {
    display: flex;
    gap: 1rem;
  }
  .ant-input-affix-wrapper {
    box-shadow: 4px 5px 17px #adb7e6;
    border-radius: 26px;
    height: 39px;
  }
  .ant-input-prefix {
    color: #1f9bd7;
    display: none;
  }
  .ant-input-suffix {
    color: ${({ theme }) => theme.color.lightGrey};
  }
  .ant-input {
    color: ${({ theme }) => theme.color.lightGrey};
    font-size: 16px;
    font-weight: 600;
  }
`;
export const StyledModal = styled(Modal)`
  .ant-input-affix-wrapper {
    box-shadow: 4px 5px 17px #adb7e6;
    border-radius: 26px;
    height: 49px;
  }
  .ant-input-suffix {
    color: ${({ theme }) => theme.color.lightGrey};
  }
  .ant-input-prefix {
    color: #1f9bd7;
  }
  .ant-input {
    color: ${({ theme }) => theme.color.lightGrey};
    font-size: 16px;
    font-weight: 600;
  }
  h3 {
    text-align: center;
    color: ${({ theme }) => theme.color.lightGrey};
    font-size: 18px;
  }
`;

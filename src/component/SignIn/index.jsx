import {
  faEnvelopeOpen,
  faEye,
  faEyeSlash,
  faUnlockKeyhole,
} from "@fortawesome/free-solid-svg-icons";
import { Input, Modal, notification } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { USER_AUTHENTICATION } from "../../action/api/action-types";
import signInBackground from "../../assets/images/signInBackground.svg";
import { FontAwesomeIcons } from "../../common/FontAwesomeIcons";
import Loader from "../../common/Loader/loader";
import { styledNotification } from "../../common/Styles/styledNotification";
import SignUp from "./SignUp";
import "./styledSignIn";
import {
  StyledButton,
  StyledCard,
  StyledCheckbox,
  StyledMainContainer,
  StyledDrawer,
  StyledModal,
} from "./styledSignIn";
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState({
    signInLoading: false,
    signUpLoading: false,
    resetLoading: false,
  });
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setVisible(false);
  };
  const loginHandler = () => {
    dispatch({
      type: USER_AUTHENTICATION,
      payload: true,
    });
    notification["success"]({
      message: "Login Successful",
      description: "",
      duration: 3,
      style: styledNotification,
    });

    navigate("/profile");
  };
  return (
    <>
      <StyledMainContainer
        style={{ backgroundImage: `url(${signInBackground})` }}
      >
        <Loader loading={loading.signInLoading}>
          <StyledCard title="SIGN IN" bordered={false} style={{ width: 400 }}>
            <Input
              type="text"
              placeholder="Email"
              prefix={FontAwesomeIcons(faEnvelopeOpen)}
            />
            <br />
            <br />
            <Input.Password
              type="password"
              placeholder="Password"
              prefix={FontAwesomeIcons(faUnlockKeyhole)}
              iconRender={(visible) =>
                visible ? FontAwesomeIcons(faEye) : FontAwesomeIcons(faEyeSlash)
              }
            />
            <br />
            <br />
            <div className="remember_pass">
              <StyledCheckbox>Remember me</StyledCheckbox>
              <>
                <span
                  className="forgot_pass"
                  onClick={() => setShowModal(true)}
                >
                  forgot password?
                </span>
              </>
            </div>
            <br />

            <StyledButton onClick={loginHandler}>Login</StyledButton>
            <br />
            <br />
            <div className="create_account">
              <span>
                Don't have account ?
                <span className="create" onClick={() => setVisible(true)}>
                  {" "}
                  Create
                </span>{" "}
              </span>
            </div>
          </StyledCard>
        </Loader>
      </StyledMainContainer>

      <StyledDrawer
        title="SIGN UP"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <Loader loading={loading.signUpLoading}>
          <SignUp />
        </Loader>
      </StyledDrawer>
      <StyledModal
        centered={true}
        visible={showModal}
        footer={null}
        onCancel={() => setShowModal(false)}
        maskClosable={false}
      >
        <Loader loading={loading.resetLoading}>
          <div>
            <h3>Reset Password</h3>
            <Input
              type="email"
              placeholder=" *Email Address"
              prefix={FontAwesomeIcons(faEnvelopeOpen)}
            />
            <br />
            <br />

            <StyledButton>Send Recovery Email</StyledButton>
          </div>
        </Loader>
      </StyledModal>
    </>
  );
};
export default SignIn;

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
import { useLoginMutation } from "../../apis/schoolManagementApi";

import signInBackground from "../../assets/images/signInBackground.svg";
import { FontAwesomeIcons } from "../../common/FontAwesomeIcons";
import Loader from "../../common/Loader/loader";
import { styledNotification } from "../../common/Styles/styledNotification";
import { userAuthentication } from "../../reducer/authReducer";
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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const [login] = useLoginMutation();

  const loginHandler = async (e) => {
    e.preventDefault();
    const { data, error } = await login({
      ...formData,
    });
    console.log(data, error);
    if (error) {
      notification["error"]({
        message: error?.data?.message || "Something went wrong",
        description: "",
        duration: 3,
        style: styledNotification,
      });
    } else if (data.success) {
      dispatch(userAuthentication({ loggedIn: true, data }));
      notification["success"]({
        message: data.message || "Login Successful",
        description: "",
        duration: 3,
        style: styledNotification,
      });

      navigate("/profile");
    } else {
      notification["error"]({
        message: "Something went wrong",
        description: "",
        duration: 3,
        style: styledNotification,
      });
    }
  };
  return (
    <>
      <StyledMainContainer
        style={{ backgroundImage: `url(${signInBackground})` }}
      >
        <Loader loading={loading.signInLoading}>
          <form onSubmit={loginHandler}>
            <StyledCard title="SIGN IN" bordered={false} style={{ width: 400 }}>
              <Input
                type="text"
                placeholder="Email"
                prefix={FontAwesomeIcons(faEnvelopeOpen)}
                name="email"
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                required
              />
              <br />
              <br />
              <Input.Password
                type="password"
                placeholder="Password"
                prefix={FontAwesomeIcons(faUnlockKeyhole)}
                iconRender={(visible) =>
                  visible
                    ? FontAwesomeIcons(faEye)
                    : FontAwesomeIcons(faEyeSlash)
                }
                name="password"
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                required
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

              <StyledButton htmlType="submit">Login</StyledButton>
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
          </form>
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

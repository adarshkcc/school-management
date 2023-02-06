import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
import { Input, notification } from "antd";
import React from "react";
import { useState } from "react";
import { useRegisterMutation } from "../../../apis/schoolManagementApi";
import { FontAwesomeIcons } from "../../../common/FontAwesomeIcons";
import { styledNotification } from "../../../common/Styles/styledNotification";
import { StyledButton, StyledSignUpMainContainer } from "../styledSignIn";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [registerUser, { isLoading }] = useRegisterMutation();
  const onSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("signup-form").reset();

    const user_obj = {
      firstName: formData?.firstName,
      lastName: formData?.lastName,
      email: formData?.email,
      password: formData?.password,
      confirmPassword: formData?.confirmPassword,
      phone: formData?.phone,
    };
    const { data, error } = await registerUser({ ...user_obj });
    if (error) {
      notification["error"]({
        message: "Something went wrong",
        description: "",
        duration: 3,
        style: styledNotification,
      });
      return;
    }
    if (data.success) {
      notification["success"]({
        message: data.message,
        description: "",
        duration: 3,
        style: styledNotification,
      });
    } else {
      notification["error"]({
        message: data.message,
        description: "",
        duration: 3,
        style: styledNotification,
      });
    }
  };
  return (
    <>
      <StyledSignUpMainContainer>
        <form id="signup-form" onSubmit={onSubmit}>
          <div className="user_name">
            <Input
              type="text"
              placeholder="First Name"
              prefix={FontAwesomeIcons(faUser)}
              name="firstName"
              required
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Last Name"
              prefix={FontAwesomeIcons(faUser)}
              name="lastName"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          </div>
          <br />

          <Input
            type="email"
            placeholder="Email"
            prefix={FontAwesomeIcons(faUser)}
            name="email"
            required
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <br />
          <br />
          <Input
            type="text"
            placeholder="Phone"
            prefix={FontAwesomeIcons(faUser)}
            name="phone"
            required
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <br />
          <br />
          <Input.Password
            placeholder="Password"
            prefix={FontAwesomeIcons(faUser)}
            iconRender={(visible) =>
              visible ? FontAwesomeIcons(faEye) : FontAwesomeIcons(faEyeSlash)
            }
            name="password"
            required
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <br />
          <br />
          <Input.Password
            type="password"
            placeholder="Confirm password"
            prefix={FontAwesomeIcons(faUser)}
            iconRender={(visible) =>
              visible ? FontAwesomeIcons(faEye) : FontAwesomeIcons(faEyeSlash)
            }
            name="confirmPassword"
            required
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <br />
          <br />
          <StyledButton htmlType="submit">Register</StyledButton>
        </form>
      </StyledSignUpMainContainer>
    </>
  );
};
export default SignUp;

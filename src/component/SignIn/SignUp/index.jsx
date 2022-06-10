import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
import { Input } from "antd";
import React from "react";
import { FontAwesomeIcons } from "../../../common/FontAwesomeIcons";
import { StyledButton, StyledSignUpMainContainer } from "../styledSignIn";

const SignUp = () => {
  return (
    <>
      <StyledSignUpMainContainer>
        <div className="user_name">
          <Input
            type="text"
            placeholder="First Name"
            prefix={FontAwesomeIcons(faUser)}
          />
          <Input
            type="text"
            placeholder="Last Name"
            prefix={FontAwesomeIcons(faUser)}
          />
        </div>
        <br />

        <Input
          type="email"
          placeholder="Email"
          prefix={FontAwesomeIcons(faUser)}
        />
        <br />
        <br />
        <Input.Password
          placeholder="Password"
          prefix={FontAwesomeIcons(faUser)}
          iconRender={(visible) =>
            visible ? FontAwesomeIcons(faEye) : FontAwesomeIcons(faEyeSlash)
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
        />
        <br />
        <br />
        <StyledButton>Register</StyledButton>
      </StyledSignUpMainContainer>
    </>
  );
};
export default SignUp;

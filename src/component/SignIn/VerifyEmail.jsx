import styled from "styled-components";
import { MdVerified, MdError } from "react-icons/md";
import { Button, Spin } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useVerifyEmailQuery } from "../../apis/schoolManagementApi";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { code } = useParams();

  const { data, isLoading, error } = useVerifyEmailQuery(code);
  if (isLoading)
    return (
      <Spin
        tip="Verifying email"
        size="large"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      ></Spin>
    );

  return (
    <StyledDiv>
      {data ? (
        <>
          <div>
            <MdVerified style={{ fontSize: "52px", color: "#01bb01" }} />
          </div>
          <h1>Your email has been verified!</h1>
          <Button
            className="login-btn"
            type="primary"
            onClick={() => navigate("/login")}
          >
            LOGIN
          </Button>
        </>
      ) : (
        <>
          <div>
            <MdError style={{ fontSize: "52px", color: "#ea3333" }} />
          </div>
          <h1>Oops! something went wrong</h1>
        </>
      )}
    </StyledDiv>
  );
};
export default VerifyEmail;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  .login-btn {
    background: "#002bdcff";
    font-weight: 500;
    font-size: 16px;
    /* padding: 16px; */
  }
`;

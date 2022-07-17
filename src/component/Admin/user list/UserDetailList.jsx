import { Avatar } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const UserDetailList = () => {
  const navigate = useNavigate();
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map(() => (
        <StyledListContainer onClick={() => navigate("/studentDetail")}>
          <div>
            <Avatar
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              size={{ xs: 24, sm: 32, md: 40, lg: 50, xl: 50, xxl: 64 }}
            />
          </div>
          <div>
            <span>Adarsh</span>
          </div>
          <div>
            <span>rajlovesskfc@gmail.com</span>
          </div>
          <div>
            <span>05 Oct,1998</span>
          </div>
          <div>
            <span>7355515638</span>
          </div>
        </StyledListContainer>
      ))}
    </>
  );
};
export default UserDetailList;

const StyledListContainer = styled.div`
  width: 100%;
  padding: 3px 6px;
  margin: 15px 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  div {
    font-family: Poppins, sans-serif;
  }
  &:hover {
    transition: all 0.5s ease-in-out;
    transform: scaley(1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border: 1px solid;
    border-color: ${({ theme }) => theme.color.main};
  }

  .ant-avatar img {
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid;
    border-color: ${({ theme }) => theme.color.fourth};
  }
`;

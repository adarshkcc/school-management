import { Button, Input, Select, Space } from "antd";
import styled from "styled-components";
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
const AddStudent = () => {
  return (
    <StyledMainContainer>
      <div className="left-section">
        <form>
          <h1>Add Student</h1>

          <Space
            direction="vertical"
            size="middle"
            style={{ maxWidth: "500px" }}
          >
            <div className="name-wrapper">
              <div>
                <label className="lable">First Name</label>
                <Input
                  placeholder="Enter first name"
                  prefix={<AiOutlineUser />}
                />
              </div>
              <div>
                <label className="lable">Last Name</label>
                <Input placeholder="Enter last name" />
              </div>
            </div>

            <div>
              <label className="lable">Email</label>
              <Input placeholder="Enter email" prefix={<AiOutlineMail />} />
            </div>

            <div>
              <label className="lable">Phone number</label>
              <Input
                placeholder="Enter phone no."
                prefix={<AiOutlinePhone />}
              />
            </div>
            <div>
              <label className="lable">Parent's phone number</label>
              <Input
                placeholder="Enter phone no."
                prefix={<AiOutlinePhone />}
              />
            </div>

            <div className="class-wrapper">
              <div className="sm-class">
                <label className="lable">Select class</label>
                <Select
                  defaultValue="default"
                  style={{
                    width: "100%",
                  }}
                  options={[]}
                />
              </div>
              <div className="sm-class">
                <label className="lable">Select Section</label>

                <Select
                  defaultValue="default"
                  style={{
                    width: "100%",
                  }}
                  options={[]}
                />
              </div>
            </div>

            <div>
              <label className="lable">Address</label>
              <Input
                placeholder="Enter address"
                prefix={<FaRegAddressCard />}
              />
            </div>
            <Button className="add-btn" type="primary">
              SUBMIT
            </Button>
          </Space>
        </form>
      </div>
      <div className="right-section">
        <img src="/assets/images/add-student.jpg" alt="Add Student" />
      </div>
    </StyledMainContainer>
  );
};
export default AddStudent;

const StyledMainContainer = styled.div`
  display: flex;
  align-items: center;
  /* height: 100%; */
  /* width: 100vw; */
  .left-section {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 16px;
    box-shadow: 3px 3px 6px #ebebeb;

    label {
      line-height: 2;
    }
    .name-wrapper {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .class-wrapper {
      display: flex;
      align-items: center;
      gap: 1rem;
      .sm-class {
        flex: 1;
      }
    }

    .add-btn {
      background-color: ${({ theme }) => theme.color.main};
      color: #fff;
      font-weight: 500;
      height: 40px;
      font-size: 16px;
      &:hover {
        background-color: #fff;
        color: ${({ theme }) => theme.color.main};
        border: 1px solid ${({ theme }) => theme.color.main};
      }
    }
  }

  .right-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-left: 1px solid black; */
    img {
      width: 100%;
      min-width: 300px;
      max-width: 550px;
      z-index: -1;
      /* height: 350px;
      object-fit: cover; */
    }
  }
`;

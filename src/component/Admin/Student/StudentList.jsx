import { Badge, Button, Space, Table, Tooltip } from "antd";
import { UserAvatar } from "../../../common/UserAvatar";
import FilterStudent from "./FilterStudent";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const dataSource = [
  {
    key: "1",
    account_id: "11240918",
    name: "Hu Yanbin",
    class: "XII",
    section: "A",
    status: "PENDING",
    email: "rajlovesskfc@gmail.com",
  },
  {
    key: "2",
    account_id: "11240918",
    name: "Hu Yanzu",
    class: "XII",
    section: "A",
    status: "PENDING",
    email: "rajlovesskfc@gmail.com",
  },
  {
    key: "3",
    account_id: "11240918",
    name: "Hu Yanzu",
    class: "XII",
    section: "A",
    status: "ACTIVE",
    email: "rajlovesskfc@gmail.com",
  },
  {
    key: "4",
    account_id: "11240918",
    name: "Hu Yanzu",
    class: "XII",
    section: "A",
    status: "INACTIVE",
    email: "rajlovesskfc@gmail.com",
  },
  {
    key: "5",
    account_id: "11240918",
    name: "Hu Yanzu",
    class: "XII",
    section: "A",
    status: "ACTIVE",
    email: "rajlovesskfc@gmail.com",
  },
];

const columns = [
  {
    title: "ACCOUNT ID",
    dataIndex: "account_id",
    key: "account",
    //width: 150,
    render: (account) => (
      <div style={{ fontWeight: "700", cursor: "pointer" }}>{account}</div>
    ),
  },
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
    //width: 250,
    ellipsis: {
      showTitle: false,
    },
    render: (text, record) => {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <UserAvatar
            firstName="Adarsh"
            lastName="Modanwal"
            profileImg="https://picsum.photos/200/200"
          />
          <div>Adarsh Modanwal</div>
        </div>
      );
    },
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "email",
    //width: 250,

    ellipsis: {
      showTitle: false,
    },
    render: (email) => (
      <Tooltip placement="topLeft" title={email}>
        {email}
      </Tooltip>
    ),
  },
  {
    title: "CLASS",
    dataIndex: "class",
    key: "class",
    width: 100,
  },
  // {
  //   title: "SECTION",
  //   dataIndex: "section",
  //   key: "section",
  // },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    //width: 150,

    render: (status) => {
      return (
        <dv style={{ fontWeight: 600 }}>
          <Badge
            status={
              status === "PENDING"
                ? "warning"
                : status === "ACTIVE"
                ? "success"
                : "error"
            }
            size="large"
          />{" "}
          {status}
        </dv>
      );
    },
  },
  {
    title: "ACTION",
    key: "action",
    //width: 150,

    render: (action) => {
      return (
        <Space>
          {/* <Button type="primary" icon={<AiFillEdit />} /> */}
          {/* <Tag color="#2db7f5"> */}
          <div
            style={{
              display: "flex",
              background: "#f1f1f8",
              padding: "3px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            <AiOutlineEdit style={{ fontSize: "22px" }} />
          </div>

          <div
            style={{
              display: "flex",
              background: "#f1f1f8",
              padding: "3px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            <AiOutlineDelete style={{ fontSize: "22px" }} />
          </div>
        </Space>
      );
    },
  },
];
const StudentList = () => {
  const navigate = useNavigate();
  return (
    <StyledMainContainer>
      <div className="btn-wrapper">
        <Button
          className="add-btn"
          type="primary"
          onClick={() => navigate("/add-student")}
        >
          Add Student
        </Button>
      </div>

      <div>
        <FilterStudent />
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          hideOnSinglePage: false,
          pageSize: 5,
          defaultCurrent: 1,
          total: 9,
        }}
      />
    </StyledMainContainer>
  );
};

export default StudentList;
const StyledMainContainer = styled.div`
  .btn-wrapper {
    display: flex;
    .add-btn {
      margin-left: auto;
      background: ${({ theme }) => theme.color.main};
      font-weight: 500;

      &:hover {
        border-color: ${({ theme }) => theme.color.main};
        color: ${({ theme }) => theme.color.main};
        background: none;
      }
    }
  }
`;

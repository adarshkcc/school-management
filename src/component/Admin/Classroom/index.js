import {
  Button,
  Input,
  Modal,
  notification,
  Select,
  Space,
  Table,
  Tag,
} from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { SiGoogleclassroom } from "react-icons/si";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {
  useAddClassMutation,
  useGetClassQuery,
  useRemoveClassMutation,
} from "../../../apis/schoolManagementApi";
import { styledNotification } from "../../../common/Styles/styledNotification";
import moment from "moment";

const colors = ["geekblue", "volcano", "gold", "green"];

const Classroom = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    classroom: [{ className: "", section: [] }],
  });
  const [dataSource, setDataSource] = useState([]);
  const OPTIONS = ["A", "B", "C", "D"];

  const columns = [
    {
      title: "Class Name",
      dataIndex: "className",
      key: "class",
    },
    {
      title: "Section",
      dataIndex: "section",
      key: "section",
      render: (section) => {
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {section.map((data, i) => (
              <Tag
                color={colors[i]}
                style={{ boxShadow: "4px 4px 6px #d9d9d9" }}
              >
                {data}
              </Tag>
            ))}
          </div>
        );
      },
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => {
        return <span>{moment(createdAt).format("Do MMM, YY")}</span>;
      },
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },
    {
      title: "Actions",
      key: "actions",
      render: (action, record) => {
        return (
          <Space>
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
              onClick={() => deleteClass(record._id)}
            >
              <AiOutlineDelete style={{ fontSize: "22px" }} />
            </div>
          </Space>
        );
      },
    },
  ];

  const { isLoading, data } = useGetClassQuery();
  useEffect(() => {
    if (data && data.success) {
      setDataSource(data.data);
    }
  }, [data]);

  const [removeClassroom, { isLoading: loadOnRemove }] =
    useRemoveClassMutation();

  const changeHandler = (e, i, mode) => {
    var arr = [...formData.classroom];

    if (mode === "select") {
      arr[i] = { ...arr[i], section: e };
    } else {
      const { name, value } = e.target;
      arr[i] = { ...arr[i], [name]: value };
    }
    setFormData({ ...formData, classroom: arr });
  };
  const addClass = () => {
    var arr = [...formData.classroom];
    arr.splice(arr.length, 0, { className: "", section: [] });
    setFormData({ ...formData, classroom: arr });
  };
  const removeClass = (i) => {
    var arr = [...formData.classroom];
    arr.splice(i, 1);
    setFormData({ ...formData, classroom: arr });
  };

  const [addClassroom, { isLoading: loading }] = useAddClassMutation();
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.classroom);
    const { data } = await addClassroom(formData.classroom);
    console.log(data);
    if (data && data.success) {
      notification["success"]({
        message: data?.message || "Classroom added successfully",
        description: "",
        duration: 3,
        style: styledNotification,
      });
      setFormData({ ...formData, classroom: [{ className: "", section: [] }] });
      setOpen(false);
    } else if (data && !data.success) {
      notification["error"]({
        message: data?.message || "Something went wrong",
        description: "",
        duration: 3,
        style: styledNotification,
      });
    } else
      notification["error"]({
        message: data?.message || "Something went wrong",
        description: "",
        duration: 3,
        style: styledNotification,
      });
  };

  const deleteClass = async (id) => {
    const { data } = await removeClassroom(id);
    if (data && data.success) {
      notification["success"]({
        message: data?.message || "success",
        description: "",
        duration: 3,
        style: styledNotification,
      });
    } else if (data && !data.success) {
      notification["error"]({
        message: data?.message || "Something went wrong",
        description: "",
        duration: 3,
        style: styledNotification,
      });
    } else
      notification["error"]({
        message: data?.message || "Something went wrong",
        description: "",
        duration: 3,
        style: styledNotification,
      });
  };
  return (
    <StyledClassroom>
      <div className="top-header">
        <h1>Classroom</h1>
        <Button
          className="add-btn"
          type="primary"
          onClick={() => setOpen(true)}
        >
          + Add Class
        </Button>
      </div>
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
          loading={isLoading || loadOnRemove}
        />
      </div>

      <Modal
        maskClosable={false}
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              // color: "#7e84a5",
              fontSize: "20px",
            }}
          >
            <SiGoogleclassroom />
            Add Classroom
          </div>
        }
        open={open}
        onOk={() => {}}
        confirmLoading={false}
        onCancel={() => setOpen(false)}
        footer={null}
        width={800}
      >
        <form
          onSubmit={onSubmit}
          style={{ maxHeight: "65vh", overflowY: "scroll" }}
        >
          {formData.classroom.map((data, index) => (
            <StyledFormContainer>
              <div>
                <label className="lable">Class Name</label>
                <Input
                  placeholder="Enter class name"
                  value={data.className}
                  required
                  name="className"
                  onChange={(e) => changeHandler(e, index)}
                />
              </div>
              <div>
                <div>
                  <label className="lable">Section</label>
                </div>
                <Select
                  name="class"
                  onChange={(e) => changeHandler(e, index, "select")}
                  mode="multiple"
                  placeholder="Select section"
                  value={data.section}
                  style={{
                    width: "250px",
                  }}
                  options={OPTIONS.map((item) => ({
                    value: item,
                    label: item,
                  }))}
                />
              </div>
              {formData.classroom.length - 1 === index ? (
                <div className="add-more" onClick={() => addClass()}>
                  +
                </div>
              ) : (
                <div className="add-more" onClick={() => removeClass(index)}>
                  -
                </div>
              )}
            </StyledFormContainer>
          ))}
          <br />
          <div>
            <Button
              className="add-btn"
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              Add
            </Button>
          </div>
        </form>
      </Modal>
    </StyledClassroom>
  );
};
export default Classroom;

const StyledClassroom = styled.div`
  .top-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

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

const StyledFormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 15px;
  .add-more {
    background-color: ${({ theme }) => theme.color.main};
    color: #fff;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    border-radius: 50%;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
  }
`;

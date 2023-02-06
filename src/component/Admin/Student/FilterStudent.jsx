import styled from "styled-components";
import { Button, Input, Select } from "antd";
import { CiSearch } from "react-icons/ci";
const FilterStudent = () => {
  const options = [
    {
      value: "default",
      label: "Select class",
      disabled: true,
    },
    {
      value: "all",
      label: "All",
    },
    {
      value: "nursery",
      label: "Nursery",
    },
    {
      value: "ukg",
      label: "LKG",
    },
    {
      value: "lkg",
      label: "UKG",
    },
    {
      value: "1",
      label: "Class I",
    },
    {
      value: "2",
      label: "Class II",
    },
    {
      value: "3",
      label: "Class III",
    },
  ];
  const options1 = [
    {
      value: "default",
      label: "Select section",
      disabled: true,
    },
    {
      value: "all",
      label: "All",
    },
    {
      value: "A",
      label: "A",
    },
    {
      value: "B",
      label: "B",
    },
  ];
  return (
    <StyledDiv>
      {/* <h1>Filter</h1> */}
      <div className="select-wrapper">
        <div className="label" style={{ visibility: "hidden" }}>
          Search
        </div>
        <Input
          placeholder="Search"
          style={{ width: 200 }}
          prefix={<CiSearch />}
          allowClear
        />
      </div>
      <div className="select-wrapper">
        <div className="label">Class</div>
        <Select
          defaultValue="default"
          style={{
            width: 150,
          }}
          options={options}
        />
      </div>
      <div className="select-wrapper">
        <div className="label">Section</div>
        <Select
          defaultValue="default"
          style={{
            width: 150,
          }}
          options={options1}
        />
      </div>
      <div className="btn-wrapper">
        <Button className="apply-btn" type="primary">
          Apply
        </Button>
      </div>
    </StyledDiv>
  );
};
export default FilterStudent;

const StyledDiv = styled.div`
  padding: 10px;
  background: #f9f9fb;
  margin: 20px 0 20px 0;
  border-radius: 9px 9px 0 0;
  display: flex;
  align-items: center;
  gap: 1rem;

  .select-wrapper {
    .label {
      color: #7e84a5;
      font-size: 14px;
    }
  }

  .btn-wrapper {
    align-self: end;
    .apply-btn {
      background: ${({ theme }) => theme.color.main};
      font-weight: 500;
      &:hover {
        background: none;
        color: ${({ theme }) => theme.color.main};
        border: 1px solid ${({ theme }) => theme.color.main};
      }
    }
  }
`;

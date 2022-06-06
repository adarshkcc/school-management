import { Col, Row, Tag } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import UpdateBtn from "../../../common/Button/updateBtn";
import ProfileInput from "./ProfileInput";

const ProfileInfo = () => {
  const [editMode, setEditMode] = useState(false);
  const [details, setDetails] = useState({
    phone: "7355515638",
    dob: "1998-10-05",
    address: "Khatra mahal samsan gali k saamne,Mumbai",
  });
  const [oldValues, setOldValues] = useState({});
  const changeHandler = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const onUpdate = () => {
    setOldValues(details);
    setEditMode(true);
  };
  const onCancel = () => {
    setDetails(oldValues);
    setEditMode(false);
  };
  const onSave = () => {
    setEditMode(false);
  };
  return (
    <>
      <StyledProfileDiv>
        <StyledProfileDetails>
          <h2>Profile Details</h2>
          <div>
            <UpdateBtn
              editMode={editMode}
              onUpdate={onUpdate}
              onCancel={onCancel}
              onSave={onSave}
            />
          </div>
        </StyledProfileDetails>
        <Row style={{ marginTop: "12px" }}>
          <Col span={16}>
            {!editMode ? (
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={9}>
                  <span className="details">Contact No. : </span>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <span>{details["phone"]}</span>
                </Col>

                <Col xs={24} sm={24} md={9}>
                  <span className="details">Date of Birth : </span>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <span>{details["dob"]}</span>
                </Col>

                <Col xs={24} sm={24} md={9}>
                  <span className="details">Address : </span>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <span>{details["address"]}</span>
                </Col>
              </Row>
            ) : (
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={9}>
                  <span className="details">Contact No. : </span>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <ProfileInput
                    name="phone"
                    type="number"
                    value={details["phone"]}
                    onChange={changeHandler}
                    maxLength={10}
                    showCount={true}
                  />
                </Col>

                <Col xs={24} sm={24} md={9}>
                  <span className="details">Date of Birth : </span>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <ProfileInput
                    name="dob"
                    type="date"
                    value={details["dob"]}
                    onChange={changeHandler}
                  />
                </Col>

                <Col xs={24} sm={24} md={9}>
                  <span className="details">Address : </span>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <ProfileInput
                    name="address"
                    type="text"
                    value={details["address"]}
                    onChange={changeHandler}
                    maxLength={60}
                    showCount={true}
                  />
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </StyledProfileDiv>
    </>
  );
};
export default ProfileInfo;
const StyledProfileDiv = styled.div`
  padding-left: 12px;
  display: flex;
  flex-direction: column;
  .details {
    font-weight: 500;
  }
`;
const StyledProfileDetails = styled.div`
  display: flex;
  gap: 1rem;
  h2 {
    color: ${({ theme }) => theme.color.lightBlack};
    font-family: lato;
    line-height: 1.2;
  }
`;

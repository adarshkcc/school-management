import { Col, Row, Table } from "antd";
import styled from "styled-components";
import { FontAwesomeIcons } from "../../common/FontAwesomeIcons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Details = ({ tab }) => {
  console.log(tab);
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <StyledMainContainer>
      <h1>{FontAwesomeIcons(faFile)} Student Details</h1>
      <Row>
        <Col span={12}>
          <Row gutter={[16, 16]}>
            <Col className="key-txt" span={12}>
              Name :
            </Col>
            <Col className="value-txt" span={12}>
              Adarsh Modanwal
            </Col>
            <Col className="key-txt" span={12}>
              Email :
            </Col>
            <Col className="value-txt" span={12}>
              rajlovesskfc@gmail.com
            </Col>
            <Col className="key-txt" span={12}>
              Roll No :
            </Col>
            <Col className="value-txt" span={12}>
              44
            </Col>
            <Col className="key-txt" span={12}>
              Date of Birth :
            </Col>
            <Col className="value-txt" span={12}>
              05 October,1998
            </Col>
            <Col className="key-txt" span={12}>
              Address :
            </Col>
            <Col className="value-txt" span={12}>
              Sigra main colony,Varanasi
            </Col>
            <Col className="key-txt" span={12}>
              Student Contact No. :
            </Col>
            <Col className="value-txt" span={12}>
              7355515638
            </Col>
            <Col className="key-txt" span={12}>
              Parent Contact No. :
            </Col>
            <Col className="value-txt" span={12}>
              7355515638
            </Col>
            <Col className="key-txt" span={12}>
              Gender :
            </Col>
            <Col className="value-txt" span={12}>
              Male
            </Col>
            <Col className="key-txt" span={12}>
              Religion :
            </Col>
            <Col className="value-txt" span={12}>
              Hindu
            </Col>
            <Col className="key-txt" span={12}>
              Nationality :
            </Col>
            <Col className="value-txt" span={12}>
              Indian
            </Col>
            <Col className="key-txt" span={12}>
              State :
            </Col>
            <Col className="value-txt" span={12}>
              Uttar Pradesh
            </Col>
            <Col className="key-txt" span={12}>
              City :
            </Col>
            <Col className="value-txt" span={12}>
              Varanasi
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row gutter={[16, 16]}>
            <Col className="key-txt" span={12}>
              Joined on :
            </Col>
            <Col className="value-txt" span={12}>
              04 April,2005
            </Col>

            <Col className="key-txt" span={12}>
              Standard Joined :
            </Col>
            <Col className="value-txt" span={12}>
              2nd
            </Col>
            <Col className="key-txt" span={12}>
              Son of/Daughter of :
            </Col>
            <Col className="value-txt" span={12}>
              Mr. Sanjay Kumar
            </Col>
            <Col className="key-txt" span={12}>
              Registration Date :
            </Col>
            <Col className="value-txt" span={12}>
              04 March,2005
            </Col>
            <Col className="key-txt" span={12}>
              Registration No :
            </Col>
            <Col className="value-txt" span={12}>
              AZ65527E421JP67
            </Col>
            <Col className="key-txt" span={12}>
              Blood Group :
            </Col>
            <Col className="value-txt" span={12}>
              B+
            </Col>
            <Col className="key-txt" span={12}>
              Language :
            </Col>
            <Col className="value-txt" span={12}>
              Hindi,English
            </Col>
            <Col className="key-txt" span={12}>
              School Bus Opted :
            </Col>
            <Col className="value-txt" span={12}>
              Yes
            </Col>
            <Col className="key-txt" span={12}>
              Standard :
            </Col>
            <Col className="value-txt" span={12}>
              5th
            </Col>
            <Col className="key-txt" span={12}>
              Section :
            </Col>
            <Col className="value-txt" span={12}>
              A
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledMainContainer>
  );
};
export default Details;
const StyledMainContainer = styled.div`
  h1 {
    color: ${({ theme }) => theme.color.main};
  }
  margin: 0 12px 12px;
  box-shadow: 4px 7px 13px 2px lightgrey;
  padding: 12px;
  .key-txt {
    font-size: 16px;
    font-weight: 600;
  }
  .value-txt {
    color: #778899;
    font-size: 16px;
  }
`;

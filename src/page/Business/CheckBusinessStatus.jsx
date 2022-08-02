import AcceptModal from "components/Business/accept.modal";
import BusinessNavBarComponent from "components/Business/BusinessNavBarComponent";
import Keys from "helper/Keys";
import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  ListGroup,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import HttpService from "service/shared/HttpClient";
import { getToken } from "service/shared/LocalStorage";
const CheckBusinessStatus = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [datas, setDatas] = useState([]);
  const toggle = () => setIsToggle(!isToggle);
  var response = HttpService.getService(
    Keys.getmyBusinessInfo,
    `${getToken()}`,
    ""
  )
    .then((res) => {
      setDatas(res.data);
    })
    .catch((err) => {
      //alert("noooo");
    });
  console.log(datas, "those datas");
  const DisplayData = datas?.businessData?.map((data) => {
    return (
      <tr>
        <td>{data.business.business_name}</td>
        <td>{data.business.date_of_issuance}</td>
        <td>{data.business.nationality}</td>
        <th>
          <Link to={`/BusinessDetailStatusPage/${data.applicationID}`}>
            <Button size="sm" className="me-2" variant="success">
              View Your Certificate
            </Button>
          </Link>{" "}
        </th>
      </tr>
    );
  });
  return (
    <>
      <BusinessNavBarComponent />
      <AcceptModal
        isToggle={isToggle}
        toggle={toggle}
        onAction={() => {
          console.log("hello");
        }}
      />
      <Container className="mt-5 pt-5">
        <Row>
          <Col lg={12}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <Row className="gy-3">
                  <Col lg={12}>
                    <div>
                      {" "}
                      <Table>
                        <thead>
                          <tr>
                            <th>Business Name</th>
                            <th>Business Field</th>
                            <th>Date of Issuance</th>
                            <th>Nationality</th>
                          </tr>
                        </thead>
                        <tbody>{DisplayData}</tbody>
                      </Table>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CheckBusinessStatus;

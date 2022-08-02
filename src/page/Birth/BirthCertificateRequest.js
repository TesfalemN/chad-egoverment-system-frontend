import AcceptModal from "components/Birth/accept.modal";
import BirthNavBarComponent from "components/Birth/BirthNavBarComponent";
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
const BirthCertificateRequest = () => {
  const [isToggle, setIsToggle] = useState(false);
  const toggle = () => setIsToggle(!isToggle);

  return (
    <>
      <BirthNavBarComponent />
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
                          
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date of Application</th>
                            <th>Mother Name</th>
                            <th>Nationality</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                          
                            <td>william m</td>
                            <td>Otto</td>
                            <td>7/30/2022</td>
                            <td>Mothe name</td>
                            <td>Chad</td>
                            <th>
                              <Button
                                size="sm"
                                className="me-2"
                                variant="success"
                                onClick={toggle}
                              >
                                View Your Certificate
                              </Button>
                            </th>
                          </tr>
                          <tr>
                          <td>william m</td>
                            <td>Otto</td>
                            <td>7/30/2022</td>
                            <td>Mothe name</td>
                            <td>Chad</td>
                            <th>
                            <Button
                                size="sm"
                                className="me-2"
                                variant="success"
                                onClick={toggle}
                              >
                                View Your Certificate
                              </Button>
                            </th>
                          </tr>
                          <tr>
                          <td>william m</td>
                            <td>Otto</td>
                            <td>7/30/2022</td>
                            <td>Mothe name</td>
                            <td>Chad</td>
                            <th>
                            <Button
                                size="sm"
                                className="me-2"
                                variant="success"
                                onClick={toggle}
                              >
                                View Your Certificate
                              </Button>
                            </th>
                          </tr>
                          <tr>
                          <td>william m</td>
                            <td>Otto</td>
                            <td>7/30/2022</td>
                            <td>Mothe name</td>
                            <td>Chad</td>
                            <th>
                            <Button
                                size="sm"
                                className="me-2"
                                variant="success"
                                onClick={toggle}
                              >
                                View Your Certificate
                              </Button>
                            </th>
                          </tr>
                          <tr>
                          <td>william m</td>
                            <td>Otto</td>
                            <td>7/30/2022</td>
                            <td>Mothe name</td>
                            <td>Chad</td>
                            <th>
                            <Button
                                size="sm"
                                className="me-2"
                                variant="success"
                                onClick={toggle}
                              >
                                View Your Certificate
                              </Button>
                            </th>
                          </tr>
                          <tr>
                          <td>william m</td>
                            <td>Otto</td>
                            <td>7/30/2022</td>
                            <td>Mothe name</td>
                            <td>Chad</td>
                            <th>
                            <Button
                                size="sm"
                                className="me-2"
                                variant="success"
                                onClick={toggle}
                              >
                                View Your Certificate
                              </Button>
                            </th>
                          </tr>
                        </tbody>
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

export default BirthCertificateRequest;

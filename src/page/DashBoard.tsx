import AcceptModal from "components/Dashboard/accept.modal";
import DashBoardNavBar from "components/NavBar/dashboard-nav-bar";
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
const DashBoard = () => {
  const [isToggle, setIsToggle] = useState(false);
  const toggle = () => setIsToggle(!isToggle);

  return (
    <>
      <DashBoardNavBar />
      <AcceptModal
        isToggle={isToggle}
        toggle={toggle}
        onAction={() => {
          console.log("hello");
        }}
      />
      <Container className="mt-5 pt-5">
        <Row>
          <Col lg={3}>
            <Card className="shadow-sm border-0 min-vh-75">
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item as="li">Pending</ListGroup.Item>
                  <ListGroup.Item as="li">Approved </ListGroup.Item>
                  <ListGroup.Item as="li">Rejected </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={9}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <Row className="gy-3">
                  <Col lg={3}>
                    <Form>
                      <FormGroup className="d-flex align-items-center ">
                        <Form.Label htmlFor="search" className="mx-2">
                          Serach
                        </Form.Label>
                        <Form.Control type="text" id="search" />
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col lg={3}>
                    <Button>Search</Button>
                  </Col>
                  <Col lg={3}></Col>
                  <Col lg={12}>
                    <div>
                      {" "}
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>wm</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <th>
                              <Button
                                size="sm"
                                className="me-2"
                                variant="success"
                                onClick={toggle}
                              >
                                Accpet
                              </Button>

                              <Button size="sm" variant="danger">
                                Reject
                              </Button>
                            </th>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <th>
                              <Button
                                size="sm"
                                className="me-2"
                                variant="success"
                                onClick={toggle}
                              >
                                Accpet
                              </Button>

                              <Button size="sm" variant="danger">
                                Reject
                              </Button>
                            </th>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <th>
                              <Button
                                size="sm"
                                className="me-2"
                                variant="success"
                                onClick={toggle}
                              >
                                Accpet
                              </Button>

                              <Button size="sm" variant="danger">
                                Reject
                              </Button>
                            </th>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Col>
                  <Col lg={12} className="d-flex justify-content-center">
                    <Pagination>
                      <Pagination.First />
                      <Pagination.Prev />
                      <Pagination.Item>{1}</Pagination.Item>
                      <Pagination.Item>{2}</Pagination.Item>
                      <Pagination.Item>{3}</Pagination.Item>
                      <Pagination.Item>{4}</Pagination.Item>
                      <Pagination.Next />
                      <Pagination.Last />
                    </Pagination>
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

export default DashBoard;

import React from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

import HomeUrl from "assets/images/home-border.png";
import Feature from "assets/images/features/image3.jpg";

const Contact = () => {
  return (
    <>
      <section className="section" id="contact">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="title-box text-center">
                <h3 className="title-heading mt-4">
                  Tell us what you feel about the service!
                </h3>
                <p className="text-muted f-17 mt-3">
                We host impactful events both in our centre and online for government. You’ll get an access to Chad E-Government System. <br />
                If you have anything to say, Feel free to Reach Us Here!      </p>
                <img src={HomeUrl} height="15" className="mt-3" alt="" />
              </div>
            </Col>
          </Row>
          <Row className="mt-5 pt-4">
            <Col lg={6}>
                <img src={Feature} className="h-100 img-fluid" style={{objectFit: "cover"}} alt="" />
            </Col>
            <Col lg={6}>
              <div className="custom-form mt-4">
                <div id="message"></div>
                <Form>
                  <Row>
                    <Col lg={6}>
                      <FormGroup className="mt-3">
                        <FormLabel>
                        First Name
                        </FormLabel>
                        <FormControl
                          name="name"
                          id="name"
                          className="form-control"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg={6}>
                      <FormGroup className="mt-3">
                        <FormLabel>
                          Last Name
                        </FormLabel>
                        <FormControl
                          name="name"
                          id="lastname"
                          className="form-control"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <FormGroup className="mt-3">
                        <FormLabel>
                          Email Address
                        </FormLabel>
                        <FormControl
                          name="email"
                          id="email"
                          className="form-control"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <FormGroup className="mt-3">
                        <FormLabel>
                          Your Message
                        </FormLabel>
                        <FormControl
                          type="textarea"
                          name="comments"
                          id="comments"
                          className="form-control"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} className="mt-3 text-right">
                      <FormControl
                        id="submit"
                        name="send"
                        color="primary"
                        className="submitBnt btn btn-primary btn-round"
                        value="Send Message"
                        style={{ width: "auto", color: "#fff" }}
                      />{" "}
                      <div id="simple-msg"></div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;

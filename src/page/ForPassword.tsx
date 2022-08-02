import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";


import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import React from 'react'
import Feature4 from "assets/images/features/img-4.png";

const ForPassword = () => {
  return (
    <React.Fragment>
        <div className="account-home-btn d-none d-sm-block">
          <Link to="/" className="text-primary"><i className="mdi mdi-home h1"></i></Link>
        </div>
        <section className="bg-account-pages vh-100">
          <div className="display-table">
            <div className="display-table-cell">
              <Container>
                <Row className="no-gutters align-items-center">
                  <Col lg={12}>
                    <div className="login-box">
                      <Row className="align-items-center no-gutters">
                        <Col lg={6}>
                          <div className="bg-light">
                            <div className="row justify-content-center">
                              <div className="col-lg-10">
                                <div
                                  className="home-img login-img text-center d-none d-lg-inline-block">
                                  <div className="animation-2"></div>
                                  <div className="animation-3"></div>
                                  <img src={Feature4} className="img-fluid" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <Row className="justify-content-center">
                            <Col lg={11}>
                              <div className="p-4">
                                <div className="text-center mt-3">
                                
                                  <p className="text-muted mt-3">Reset Password</p>
                                </div>
                                <div className="p-3 custom-form">

                                  <div className="alert alert-success bg-soft-primary text-primary border-0 text-center" role="alert">
                                    Enter your email address and we'll send you an email with instructions to reset your password.
                                                        </div>
                                  <Form>
                                    <FormGroup>
                                    <FormLabel htmlFor="forgetemail">
                                      First Name
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      name="forgetemail"
                                     
                                      className="form-control"
                                      id="forgetemail"
                                      placeholder="Enter Your Email Address you want to recover"
                                      
                                    />

                                      </FormGroup>
                                    <div className="mt-3">
                                      <Button className="btn btn-primary btn-block">Reset your Password</Button>
                                    </div>
                                  </Form>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </React.Fragment>
  )
}

export default ForPassword
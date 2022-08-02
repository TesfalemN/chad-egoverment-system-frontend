import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";

import Feature4 from "assets/images/features/img-4.png";
import LogoDark from "assets/images/logo-dark.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import BudsingRegistrationRequest from "models/business/BusinessRegistrationReqeust";
import BusinessRegistrationService from "service/BusinessRegistrationService";

const BuzRegistration = () => {
  const navigoter = useNavigate();

  const validationSchema = Yup.object().shape({
    businessname: Yup.string().required("this filed is required"),
    businessfield: Yup.string().required("this filed is required"),
    officeaddress: Yup.string().required("Office Address is required"),
    city: Yup.string().required("Office Address is required"),
    phonenumber: Yup.string().required("Office Address is required"),
    postaddress: Yup.string().required("Office Address is required"),
    dateofissuance: Yup.string().required("this filed is required"),
    nationality: Yup.string().required("this filed is required"),
  });
  const formik = useFormik({
    initialValues: {
      business_name: "fg",
      business_field: "fghfg",
      owner_id: "fghfg",
      office_address: "fghf",
      city: "fghf",
      email: "fgh",
      phone: "fgh",
      post_address: "fgh",
      date_of_issuance: "fgh",
      nationality: "fghfg",
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      console.log("here");
      submitBuisnessRegistration();
    },
  });

  const submitBuisnessRegistration = () => {
    setTimeout(() => {
      navigoter("/Business");
      console.log("here");
    }, 1000);
  };

  const [submitted, setSubmitted] = useState<boolean>(false);

  return (
    <>
      <div className="account-home-btn d-none d-sm-block">
        <Link to="/Homepage" className="text-primary">
          <i className="mdi mdi-home h1"></i>
        </Link>
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
                        <Row className="justify-content-center">
                          <Col lg={11}>
                            <div className="p-4">
                              <div className="text-center mt-3">
                                <Link to="#">
                                  <h5>Chad E-Goverment System</h5>
                                </Link>
                                <p className="text-muted mt-3">
                                  Fill the form, Request your Buisness Licence
                                </p>
                              </div>
                              <div className="p-3 custom-form">
                                <Form onSubmit={formik.handleSubmit}>
                                  <FormGroup>
                                    <FormLabel htmlFor="businessname">
                                      Business Name
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      name="businessname"
                                      value={formik.values.business_name}
                                      onChange={formik.handleChange}
                                      className="form-control"
                                      id="businessname"
                                      placeholder="Enter Your Business Name Here"
                                      isInvalid={!!formik.errors.business_name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.business_name}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                  <FormGroup>
                                    <FormLabel htmlFor="businessfield">
                                      Business Field
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      name="businessfield"
                                      value={formik.values.business_field}
                                      onChange={formik.handleChange}
                                      className="form-control"
                                      id="businessfield"
                                      placeholder="Enter Your Business Field"
                                      isInvalid={!!formik.errors.business_field}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.business_field}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                  <FormGroup>
                                    <FormLabel htmlFor="officeaddress">
                                      Office Address
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      className="form-control"
                                      id="officeaddress"
                                      name="officeaddress"
                                      value={formik.values.office_address}
                                      onChange={formik.handleChange}
                                      placeholder="Enter Office Address"
                                      isInvalid={!!formik.errors.office_address}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.office_address}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                  <FormGroup>
                                    <FormLabel htmlFor="city">City</FormLabel>
                                    <FormControl
                                      type="text"
                                      className="form-control"
                                      id="city"
                                      name="city"
                                      value={formik.values.city}
                                      onChange={formik.handleChange}
                                      placeholder="Enter your City "
                                      isInvalid={!!formik.errors.city}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.city}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                  <FormGroup>
                                    <FormLabel htmlFor="phonenumber">
                                      Phone Number
                                    </FormLabel>
                                    <FormControl
                                      type="phonenumber"
                                      className="form-control"
                                      name="phonenumber"
                                      value={formik.values.phone}
                                      onChange={formik.handleChange}
                                      id="phonenumber"
                                      placeholder="Enter Your Phone Number"
                                      isInvalid={!!formik.errors.phone}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.phone}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                </Form>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={6}>
                        <Row className="justify-content-center">
                          <Col lg={11}>
                            <div className="p-4">
                              <div className="p-3 custom-form">
                                <Form onSubmit={formik.handleSubmit}>
                                  <FormGroup>
                                    <FormLabel htmlFor="postaddress">
                                      Post Address
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      name="postaddress"
                                      value={formik.values.post_address}
                                      onChange={formik.handleChange}
                                      className="form-control"
                                      id="postaddress"
                                      placeholder="Enter Your Post Address"
                                      isInvalid={!!formik.errors.post_address}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.post_address}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                  <FormGroup>
                                    <FormLabel htmlFor="dateofissuance">
                                      Date of Issuance
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      name="dateofissuance"
                                      value={formik.values.date_of_issuance}
                                      onChange={formik.handleChange}
                                      className="form-control"
                                      id="dateofissuance"
                                      isInvalid={
                                        !!formik.errors.date_of_issuance
                                      }
                                    />

                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.date_of_issuance}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                  <FormGroup>
                                    <FormLabel htmlFor="nationality">
                                      Nationality
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      className="form-control"
                                      id="nationality"
                                      name="nationality"
                                      value={formik.values.nationality}
                                      onChange={formik.handleChange}
                                      placeholder="Enter Your Nationality"
                                      isInvalid={!!formik.errors.nationality}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.nationality}
                                    </Form.Control.Feedback>
                                  </FormGroup>

                                  <div className="mt-3">
                                    <Button
                                      color="primary"
                                      className="btn btn-primary btn-block"
                                      type="submit"
                                      // onClick={}
                                    >
                                      Submit
                                    </Button>{" "}
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
    </>
  );
};

export default BuzRegistration;

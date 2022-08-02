import React from "react";
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
import UserRegisterReqeust from "models/user/UserRegisterReqeust";
import { register } from "service/UserService";

const SignUp = () => {
  const navigoter = useNavigate();

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("this field is required"),
    lastName: Yup.string().required("this field is required"),
    email: Yup.string()
      .required("this field is required")
      .email("this must be email address"),
    password: Yup.string().required("this field is required"),
    height: Yup.string().required("this field is required"),
    martial_status: Yup.string().required("this field is required"),
    gender: Yup.string().required("this field is required"),
    occupation: Yup.string().required("this field is required"),
    birth_place: Yup.string().required("this field is required"),
    birth_certificate_id: Yup.string().required("this field is required"),
    nationality: Yup.string().required("this field is required"),
    date_of_birth: Yup.string().required("this field is required"),
    phone_number: Yup.string().required("this field is required"),
  });
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastName: "",
      email: "",
      password: "",
      height: "",
      martial_status: "",
      gender:"",
      occupation:"",
      birth_place:"",
      birth_certificate_id:"",
      nationality:"",
      date_of_birth:"",
      phone_number:"",

    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setFieldError }) => {
      var result = await  registerUser();
      if(result)
      {
        setFieldError("password", result)
      }
    }
  });

  const registerUser = async () => {
    var userRegisterReqeust = new UserRegisterReqeust();
    userRegisterReqeust.user = {
      first_name: formik.values.firstname,
      last_name: formik.values.lastName,
      email: formik.values.email,
      password: formik.values.password,
      role: "user",
      middle_name: "",
      eye_color: "",
      height: formik.values.height,
      martial_status: formik.values.martial_status,
      gender: formik.values.gender,
      hair_color: "",
      occupation: formik.values.occupation,
      birth_certificate_id: formik.values.birth_certificate_id,
      birth_place: formik.values.birth_place,
      nationality: formik.values.nationality,
      date_of_birth: formik.values.date_of_birth,
      phone_number: formik.values.phone_number,
    }

    var result = await register(userRegisterReqeust);
    
    if (result.message == "Success") {
      navigoter("/Login");
    }
    else {
        return result.message;
    }
  }

  return (
    <>
      <div className="account-home-btn d-none d-sm-block">
        <Link to="/" className="text-primary">
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
                                  Register as a New User and Get an Account
                                </p>
                              </div>
                              <div className="p-3 custom-form">
                                <Form onSubmit={formik.handleSubmit}>
                                  <FormGroup>
                                    <FormLabel htmlFor="firstname">
                                      First Name
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      name="firstname"
                                      value={formik.values.firstname}
                                      onChange={formik.handleChange}
                                      className="form-control"
                                      id="firstname"
                                      placeholder="First Name"
                                      isInvalid={!!formik.errors.firstname}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.firstname}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                  <FormGroup>
                                    <FormLabel htmlFor="lastName">
                                      Last Name
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      name="lastName"
                                      value={formik.values.lastName}
                                      onChange={formik.handleChange}
                                      className="form-control"
                                      id="lastName"
                                      placeholder="Last Name"
                                      isInvalid={!!formik.errors.lastName}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.lastName}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                  <FormGroup>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <FormControl
                                      type="text"
                                      className="form-control"
                                      id="email"
                                      name="email"
                                      value={formik.values.email}
                                      onChange={formik.handleChange}
                                      placeholder="Enter Email"
                                      isInvalid={!!formik.errors.email}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.email}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                  <FormGroup>
                                    <FormLabel htmlFor="userpassword">
                                      Password
                                    </FormLabel>
                                    <FormControl
                                      type="password"
                                      className="form-control"
                                      name="password"
                                      value={formik.values.password}
                                      onChange={formik.handleChange}
                                      id="userpassword"
                                      placeholder="Enter password"
                                      isInvalid={!!formik.errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.password}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                  <FormGroup>
                                    <FormLabel htmlFor="height">
                                      Height
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      className="form-control"
                                      name="height"
                                      value={formik.values.height}
                                      onChange={formik.handleChange}
                                      id="height"
                                      placeholder="Enter Enter Your Height"
                                      isInvalid={!!formik.errors.height}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.height}
                                    </Form.Control.Feedback>
                                  </FormGroup>

                                  <FormGroup>
                                    <FormLabel htmlFor="martial_status">
                                      Martial Status
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      className="form-control"
                                      name="martial_status"
                                      value={formik.values.martial_status}
                                      onChange={formik.handleChange}
                                      id="martial_status"
                                      placeholder="Enter Enter Your Martial Status"
                                      isInvalid={!!formik.errors.martial_status}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.martial_status}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                  <FormGroup>
                                    <FormLabel htmlFor="gender">
                                      Gender
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      name="gender"
                                      value={formik.values.gender}
                                      onChange={formik.handleChange}
                                      className="form-control"
                                      id="gender"
                                      placeholder="Enter Your Gender "
                                      isInvalid={!!formik.errors.gender}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.gender}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                 
                                
                                </Form>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <br />
                      <Col lg={6}>
                        <Row className="justify-content-center">
                          <Col lg={11}>
                            <div className="p-4">
                             
                              <div className="p-3 custom-form">
                                <Form onSubmit={formik.handleSubmit}>
                               
                                  <FormGroup>
                                    <FormLabel htmlFor="occupation">
                                    Occupation
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      name="occupation"
                                      value={formik.values.occupation}
                                      onChange={formik.handleChange}
                                      className="form-control"
                                      id="occupation"
                                      placeholder="Enter Your Occupation"
                                      isInvalid={!!formik.errors.occupation}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.occupation}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                  <FormGroup>
                                    <FormLabel htmlFor="birth_certificate_id">
                                      Birth Certificate ID
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      className="form-control"
                                      id="birth_certificate_id"
                                      name="birth_certificate_id"
                                      value={formik.values.birth_certificate_id}
                                      onChange={formik.handleChange}
                                      placeholder="Enter Your Birth Certificate ID"
                                      isInvalid={!!formik.errors.birth_certificate_id}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.birth_certificate_id}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                  <FormGroup>
                                    <FormLabel htmlFor="birth_place">
                                      Birth Place
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      className="form-control"
                                      name="birth_place"
                                      value={formik.values.birth_place}
                                      onChange={formik.handleChange}
                                      id="birth_place"
                                      placeholder="Enter Your Birth Place"
                                      isInvalid={!!formik.errors.birth_place}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.birth_place}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                  <FormGroup>
                                    <FormLabel htmlFor="nationality">
                                      Nationality
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      className="form-control"
                                      name="nationality"
                                      value={formik.values.nationality}
                                      onChange={formik.handleChange}
                                      id="nationality"
                                      placeholder="Enter Enter Your Nationality"
                                      isInvalid={!!formik.errors.martial_status}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.nationality}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                  <FormGroup>
                                    <FormLabel htmlFor="date_of_birth">
                                      Date Of Birth
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      className="form-control"
                                      name="date_of_birth"
                                      value={formik.values.date_of_birth}
                                      onChange={formik.handleChange}
                                      id="date_of_birth"
                                      placeholder="Enter Enter Your Date of Birth"
                                      isInvalid={!!formik.errors.date_of_birth}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.date_of_birth}
                                    </Form.Control.Feedback>
                                  </FormGroup>

                                  <FormGroup>
                                    <FormLabel htmlFor="phone_number">
                                      Phone Number
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      className="form-control"
                                      name="phone_number"
                                      value={formik.values.phone_number}
                                      onChange={formik.handleChange}
                                      id="phone_number"
                                      placeholder="Enter Enter Your Phone Number"
                                      isInvalid={!!formik.errors.phone_number}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.phone_number}
                                    </Form.Control.Feedback>
                                  </FormGroup>

                                  <div className="mt-3">
                                    <Button
                                      type="submit"
                                      color="primary"
                                      className="btn btn-primary btn-block"
                                    >
                                      Register
                                    </Button>
                                  </div>
                                  <div className="mt-4 pt-1 mb-0 text-center">
                                    <p className="mb-0">
                                     Already have an account ?
                                      <Link
                                        to="/login"
                                        className="text-success"
                                      >
                                        {" "}
                                        Sign in
                                      </Link>
                                    </p>
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

export default SignUp;
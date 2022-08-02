import React, { useContext } from "react";
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
import { UserLoginReqeust } from "models/user/UserLoginRequest";
import { login } from "service/UserService";
import {
  setEmail,
  setFirstName,
  setLastName,
  setToken,
  setUserId,
} from "service/shared/LocalStorage";

import { getMasterData } from "service/MasterDataService";
import { MasterDataContext } from "App";

const LoginPage = () => {
  const navigoter = useNavigate();
  const { masterData, setMasterData } = useContext(MasterDataContext);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("this filed is required")
      .min(1, "this filed cant be empty")
      .email("this must be email address")
      .min(1, "this filed cant be empty"),
    password: Yup.string().required("this filed is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setFieldError }) => {
      var result = await loginUser();
      if (result) {
        setFieldError("password", result);
      }
    },
  });

  const loginUser = async () => {
    var userLoginRequest = new UserLoginReqeust();
    userLoginRequest.user = {
      email: formik.values.email,
      password: formik.values.password,
    };
    var result = await login(userLoginRequest);
    if (result.message == "success") {
      setToken(result.token);
      setFirstName(result.result?.first_name);
      setLastName(result.result?.last_name);
      setEmail(result.result?.email);
      setUserId(result.result._id);
      navigoter("/ChooseService");
      var masterData =  await getMasterData();
      setMasterData(masterData);
    } else {
      return result.message;
    }
  };

  return (
    <>
      {" "}
      <div className="account-home-btn d-none d-sm-block">
        <Link to="/" className="text-primary">
          <i className="mdi mdi-home h1"></i>
        </Link>
      </div>
      <section className="bg-account-pages vh-100">
        <div className="display-table">
          <div className="display-table-cell">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="login-box">
                    <Row className="align-items-center no-gutters">
                      <Col lg={6}>
                        <div className="bg-light">
                          <div className="row justify-content-center">
                            <div className="col-lg-10">
                              <div className="home-img login-img text-center d-none d-lg-inline-block">
                                <div className="animation-2"></div>
                                <div className="animation-3"></div>
                                <img
                                  src={Feature4}
                                  className="img-fluid"
                                  alt=""
                                />
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
                                <Link to="#">
                                  <h5>Service for every citizens</h5>
                                </Link>
                                <p className="text-muted mt-3">
                                  Sign in to access E-service.
                                </p>
                              </div>
                              <div className="p-3 custom-form">
                                <Form onSubmit={formik.handleSubmit}>
                                  <FormGroup>
                                    <FormLabel htmlFor="email">email</FormLabel>
                                    <FormControl
                                      type="text"
                                      className="form-control"
                                      id="email"
                                      name="email"
                                      value={formik.values.email}
                                      onChange={formik.handleChange}
                                      placeholder="Enter email"
                                      isInvalid={!!formik.errors.email}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.email}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                  <FormGroup>
                                    <FormLabel htmlFor="password">
                                      Password
                                    </FormLabel>
                                    <FormControl
                                      type="password"
                                      className="form-control"
                                      id="password"
                                      placeholder="Enter password"
                                      name="password"
                                      value={formik.values.password}
                                      onChange={formik.handleChange}
                                      isInvalid={!!formik.errors.password}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.password}
                                    </Form.Control.Feedback>
                                  </FormGroup>

                                  <div className="mt-3">
                                    <Button
                                      color="primary"
                                      className="btn btn-primary btn-block"
                                      type="submit"
                                      onClick={() => {
                                        console.log(formik.errors);
                                      }}
                                    >
                                      Log In
                                    </Button>{" "}
                                  </div>
                                  <div className="mt-4 pt-1 mb-0 text-center">
                                    <Link
                                      to="/ForPassword"
                                      className="text-dark"
                                    >
                                      <i className="mdi mdi-lock"></i> Forgot
                                      your password?
                                    </Link>
                                  </div>
                                  <div className="mt-4 pt-1 mb-0 text-center">
                                    <Link
                                      to="/ChooseService"
                                      className="text-dark"
                                    >
                                      <i className="mdi mdi-lock"></i> Forgot
                                      your password?
                                    </Link>
                                  </div>
                                </Form>
                                <div className="mt-4 pt-1 mb-0 text-center">
                                  <p className="mb-0">
                                    Do You have an account ?
                                    <Link to="/signup" className="text-success">
                                      {" "}
                                      Sign Up
                                    </Link>
                                  </p>
                                </div>
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
export default LoginPage;

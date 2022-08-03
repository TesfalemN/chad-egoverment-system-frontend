import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import Feature4 from "assets/images/features/img-4.png";
import LogoDark from "assets/images/logo-dark.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import BusinessRegistrationReqeust from "models/business/BusinessRegistrationReqeust";
import { PassportNavBarComponent } from "../../components/Business/BusinessNavBarComponent";
import { BusinessRegistration } from "service/BusinessService";
import { getEmail, getUserId } from "service/shared/LocalStorage";
import axios from "axios";
import { set_user_data } from "store/actions";
interface RootState {
  user: {};
}

const BuzRegistration = () => {
  const navigoter = useNavigate();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [showHide, setSetShowHide] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleModalShowHide = (e: any) => {
    e.preventDefault();
    setSetShowHide(!showHide);
  };
  const users = (state: RootState) => state.user;
  const datas = useSelector(users);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object().shape({
    businessname: Yup.string()
      .min(8, "Too Short!")
      .max(40, "Too Long!")
      .required("Business Name is required Required"),
    businessfield: Yup.string()
      .min(5, "Too Short!")
      .max(40, "Too Long!")
      .required("Business Field is required Required"),
    officeaddress: Yup.string()
      .min(3, "Too Short!")
      .max(40, "Too Long!")
      .required("Office Address is required Required"),
    city: Yup.string()
      .min(3, "Too Short!")
      .max(40, "Too Long!")
      .required("City is required Required"),
    phonenumber: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(3, "Too Short!")
      .max(40, "Too Long!")
      .required("City is required Required"),
    //phonenumber: Yup.string().required("Phone Number is required"),
    postaddress: Yup.string()
      .min(2, "Too Short!")
      .max(40, "Too Long!")
      .required("Post Address is required Required"),
    dateofissuance: Yup.string()
      .min(8, "Too Short!")
      .max(15, "Too Long!")
      .required("Date of Issuance required Required"),
    nationality: Yup.string()
      .min(2, "Too Short!")
      .max(40, "Too Long!")
      .required("Nationality  is required Required"),
  });
  const formik = useFormik({
    initialValues: {
      businessname: "",
      businessfield: "",
      officeaddress: "",
      city: "",
      phonenumber: "",
      postaddress: "",
      dateofissuance: "",
      nationality: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      console.log("here");
      submitBuisnessRegistration();
    },
  });

  /*const submitBuisnessRegistration = () => {
    setTimeout(() => {
      navigoter('/Business');
    console.log("here")
    }, 1000)
  }*/

  const submitBuisnessRegistration = async () => {
    var businessRegistrationReqeust = new BusinessRegistrationReqeust();
    businessRegistrationReqeust.business = {
      business_name: formik.values.businessname,
      business_field: formik.values.businessfield,
      owner_id: `${getUserId()}`,
      office_address: formik.values.officeaddress,
      city: formik.values.city,
      email: `${getEmail()}`,
      phone: formik.values.phonenumber,
      post_address: formik.values.postaddress,
      date_of_issuance: formik.values.dateofissuance,
      nationality: formik.values.nationality,
    };
    var result = await BusinessRegistration(businessRegistrationReqeust);
    if (result?.status == "success") {
      // navigoter("/BusinessDetailStatusPage", {
      //   state: {
      //     isForCheckStatus: false,
      //     businessStatusResponse: result,
      //   },
      // });
      setShowSuccess(true);
      console.log(result, "result");
      dispatch(set_user_data(result));
    } else {
      // navigoter("/BusinessDetailStatusPage");
    }
    console.log(datas, "sdhfidsu");
  };
  return (
    <>
      <PassportNavBarComponent />
      <section className="bg-account-pages vh-100 ">
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
                              {showSuccess ? (
                                <div
                                  className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                                  role="alert"
                                >
                                  <span className="font-medium">
                                    Success alert!
                                  </span>{" "}
                                  Change a few things up and try submitting
                                  again.
                                </div>
                              ) : null}

                              <div className="p-3 custom-form">
                                <Form onSubmit={formik.handleSubmit}>
                                  <FormGroup>
                                    <FormLabel htmlFor="businessname">
                                      Business Name
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      name="businessname"
                                      value={formik.values.businessname}
                                      onChange={formik.handleChange}
                                      className="form-control"
                                      id="businessname"
                                      placeholder="Enter Your Business Name Here"
                                      isInvalid={!!formik.errors.businessname}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.businessname}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                  <FormGroup>
                                    <FormLabel htmlFor="businessfield">
                                      Business Field
                                    </FormLabel>
                                    <FormControl
                                      type="text"
                                      name="businessfield"
                                      value={formik.values.businessfield}
                                      onChange={formik.handleChange}
                                      className="form-control"
                                      id="businessfield"
                                      placeholder="Enter Your Business Field"
                                      isInvalid={!!formik.errors.businessfield}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.businessfield}
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
                                      value={formik.values.officeaddress}
                                      onChange={formik.handleChange}
                                      placeholder="Enter Office Address"
                                      isInvalid={!!formik.errors.officeaddress}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.officeaddress}
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
                                      value={formik.values.phonenumber}
                                      onChange={formik.handleChange}
                                      id="phonenumber"
                                      placeholder="Enter Your Phone Number"
                                      isInvalid={!!formik.errors.phonenumber}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.phonenumber}
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
                                      value={formik.values.postaddress}
                                      onChange={formik.handleChange}
                                      className="form-control"
                                      id="postaddress"
                                      placeholder="Enter Your Post Address"
                                      isInvalid={!!formik.errors.postaddress}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.postaddress}
                                    </Form.Control.Feedback>
                                  </FormGroup>
                                  <FormGroup>
                                    <FormLabel htmlFor="dateofissuance">
                                      Date of Issuance
                                    </FormLabel>
                                    <FormControl
                                      type="date"
                                      name="dateofissuance"
                                      value={formik.values.dateofissuance}
                                      onChange={formik.handleChange}
                                      className="form-control"
                                      id="dateofissuance"
                                      isInvalid={!!formik.errors.dateofissuance}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                      {formik.errors.dateofissuance}
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
                                      // onClick={(e) => handleModalShowHide(e)}
                                    >
                                      Register
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
      <Modal show={showHide} className="modal-lg">
        <Modal.Header closeButton onClick={(e) => handleModalShowHide(e)}>
          <Modal.Title>Information Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border border-blue-400 h-96 p-4">
            <div className="flex flex-col space-y-24">
              <div className="flex justify-around">
                <div className="flex space-x-4 border-b">
                  <span className="font-semibold">Business Field:</span>
                  <span className="font-bold">
                    {formik.values.businessfield}
                  </span>
                </div>
                <div className="flex space-x-4 border-b">
                  <span className="font-semibold">Business Field:</span>
                  <span className="font-bold">
                    {formik.values.businessfield}
                  </span>
                </div>
                <div className="flex space-x-4 border-b">
                  <span className="font-semibold">Office Address:</span>
                  <span className="font-bold">
                    {formik.values.officeaddress}
                  </span>
                </div>
              </div>
              <div className="flex justify-around">
                <div className="flex space-x-4 border-b">
                  <span className="font-semibold">Business Field:</span>
                  <span className="font-bold">
                    {formik.values.businessfield}
                  </span>
                </div>
                <div className="flex space-x-4 border-b justify-start">
                  <span className="font-semibold justify-start">
                    Business City:
                  </span>
                  <span className="font-bold">{formik.values.city}</span>
                </div>
                <div className="flex space-x-4 border-b">
                  <span className="font-semibold">Phone Number:</span>
                  <span className="font-bold">{formik.values.phonenumber}</span>
                </div>
              </div>
              <div className="flex justify-around border-l">
                <div className="flex space-x-4 border-b">
                  <span className="font-semibold">Post Address:</span>
                  <span className="font-bold">{formik.values.postaddress}</span>
                </div>
                <div className="flex space-x-4 border-b">
                  <span className="font-semibold">Date of Issuance:</span>
                  <span className="font-bold">
                    {formik.values.dateofissuance}
                  </span>
                </div>
                <div className="flex space-x-4 border-b">
                  <span className="font-semibold">Nationality:</span>
                  <span className="font-bold">
                    {formik.values.businessname}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={(e) => handleModalShowHide(e)}>
            Cancel
          </Button> */}
          <Button variant="primary" onClick={(e) => handleModalShowHide(e)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BuzRegistration;

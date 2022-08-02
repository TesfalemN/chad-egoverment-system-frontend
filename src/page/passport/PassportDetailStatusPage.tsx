import PassportNavBarComponent from "components/Passport/PassportNavBarComponent";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/css/passport/main.css";
import PassportImage from "../../assets/images/chad_passport.png";
import { UserProfileComponent } from "components/Passport/UserProfileComponent";
import { PassportCardComponent } from "components/Passport/PassportCardComponent";
import { CustomCard } from "components/shared/Card";
import Button from "react-bootstrap/esm/Button";
import PassportApplicationResponse from "models/passport/PassportApplicationResponse";
import PassportStatusResponse from "models/passport/PassportStatusResponse";
import { useLocation, Link } from "react-router-dom";

interface PassportDetailStatusPros {
  passportApplicationResponse?: PassportApplicationResponse;
  passportStatusResponse?: PassportStatusResponse;
  isForCheckStatus: boolean;
}

export const PassportDetailStatusPage: React.FC<PassportDetailStatusPros> = (
  props: PassportDetailStatusPros
) => {
  const { state } = useLocation() as any;

  const [userState, setUserState] = useState({
    isForCheckStatus: state.isForCheckStatus,
    firstName: state.isForCheckStatus
      ? state.passportStatusResponse?.passportApplication?.personalInformation
          ?.first_name
      : state.passportApplicationResponse?.data?.personalInformation
          ?.first_name,
    middleName: state.isForCheckStatus
      ? state.passportStatusResponse?.passportApplication?.personalInformation
          ?.middle_name
      : state.passportApplicationResponse?.data?.personalInformation
          ?.middle_name,
    lastName: state.isForCheckStatus
      ? state.passportStatusResponse?.passportApplication?.personalInformation
          ?.last_name
      : state.passportApplicationResponse?.data?.personalInformation?.last_name,
    birthDate: state.isForCheckStatus
      ? state.passportStatusResponse?.passportApplication?.personalInformation
          ?.date_of_birth
      : state.passportApplicationResponse?.data?.personalInformation
          ?.date_of_birth,
    gender: state.isForCheckStatus
      ? state.passportStatusResponse?.passportApplication?.personalInformation
          ?.gender
      : state.passportApplicationResponse?.data?.personalInformation?.gender,
    email: state.isForCheckStatus
      ? state.passportStatusResponse?.passportApplication?.personalInformation
          ?.email
      : state.passportApplicationResponse?.data?.personalInformation?.email,
    phoneNumber: state.isForCheckStatus
      ? state.passportStatusResponse?.passportApplication?.personalInformation
          ?.phone_number
      : state.passportApplicationResponse?.data?.personalInformation
          ?.phone_number,
    birthPlace: state.isForCheckStatus
      ? state.passportStatusResponse?.passportApplication?.personalInformation
          ?.birth_place
      : state.passportApplicationResponse?.data?.personalInformation
          ?.birth_place,
    city: state.isForCheckStatus
      ? state.passportStatusResponse?.passportApplication?.userAddress?.city
      : state.passportApplicationResponse?.data?.userAddress?.city,
    street: state.isForCheckStatus
      ? state.passportStatusResponse?.passportApplication?.userAddress?.street
      : state.passportApplicationResponse?.data?.userAddress?.street,
    officCity: state.isForCheckStatus
      ? state.passportStatusResponse?.passportApplication?.officeAddress?.city
      : state.passportApplicationResponse?.data?.officeAddress?.city,
    deliverySite: state.isForCheckStatus
      ? state.passportStatusResponse?.passportApplication?.officeAddress
          ?.delivery_site
      : state.passportApplicationResponse?.data?.officeAddress?.delivery_site,
    applicationDate: state.isForCheckStatus
      ? state.passportStatusResponse?.passportApplication?.officeAddress
          ?.appointment_date
      : state.passportApplicationResponse?.data?.officeAddress
          ?.appointment_date,
    applicationTime: state.isForCheckStatus
      ? state.passportStatusResponse?.passportApplication?.officeAddress
          ?.appointment_time
      : state.passportApplicationResponse?.data?.officeAddress
          ?.appointment_time,
    applciationId: state.isForCheckStatus
      ? state.passportStatusResponse?.passportApplication?.applicationID
      : state.passportApplicationResponse?.data?.applicationID,
    status: state.isForCheckStatus
      ? state.passportStatusResponse?.passportApplication?.status
      : state.passportApplicationResponse?.data?.status,
  });
  console.log(userState, "userState");
  return (
    <>
      <PassportNavBarComponent />
      <Row>
        <Col className="pt-4 m-ho-10 ">
          <CustomCard className="pt-4 m-ho-10 pd-ho-10">
            <div className="title-box text-center">
              <div className="alert alert-success f-20" role="alert">
                <strong>
                  {" "}
                  {userState.isForCheckStatus
                    ? `Your application is ${userState.status}`
                    : "Your application has been submitted successfully!"}
                </strong>
              </div>
              <h6 className="mt-4">
                Your application Id is{" "}
                <span className="color-green">
                  <strong>
                    <b>{userState.applciationId}</b>
                  </strong>
                </span>
                <div className="f-12 mt-2">
                  To check your application status use your application Id.
                </div>
              </h6>
            </div>
            <div className="title-box text-center">
              <h5 className="mt-1">
                <hr />
              </h5>
            </div>
            <Row>
              <Col lg={4} xl={4} md={4} sm={4} className="border-10 p-all-0">
                <div className="btn-primary p-ve-auto">
                  <h5 className="">Personal Information</h5>
                </div>
                <div>
                  <table className="table">
                    <tr className="tr">
                      <td className="f-14 text-muted td">First Name</td>
                      <td className="td alnright">
                        <strong>{userState.firstName}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Middle Name</td>
                      <td className="td alnright">
                        <strong>{userState.middleName}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Last Name</td>
                      <td className="td alnright">
                        <strong>{userState.lastName}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Birth Date</td>
                      <td className="td alnright">
                        <strong>{userState.birthDate}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Gender</td>
                      <td className="td alnright">
                        <strong>{userState.gender}</strong>
                      </td>
                    </tr>
                  </table>
                </div>
                <br />
              </Col>
              <Col lg={4} xl={4} md={4} sm={4} className="border-10 p-all-0">
                <div className="btn-primary p-ve-auto">
                  <h5 className="">Contact Information</h5>
                </div>
                <div>
                  <table className="table">
                    <tr className="tr">
                      <td className="f-14 text-muted td">Email Address</td>
                      <td className="td alnright">
                        <strong>{userState.email}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Phone Number</td>
                      <td className="td alnright">
                        <strong>{userState.phoneNumber}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Birht Place</td>
                      <td className="td alnright">
                        <strong>{userState.birthPlace}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">City</td>
                      <td className="td alnright">
                        <strong>{userState.city}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Street</td>
                      <td className="td alnright">
                        <strong>{userState.street}</strong>
                      </td>
                    </tr>
                  </table>
                </div>
                <br />
              </Col>
              <Col lg={3} xl={3} md={3} sm={3} className="border-10 p-all-0">
                <div className="btn-primary p-ve-auto">
                  <h5 className="">Office Information</h5>
                </div>
                <div>
                  <table className="table">
                    <tr className="tr">
                      <td className="f-14 text-muted td">City</td>
                      <td className="td alnright">
                        <strong>{userState.officCity}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Delivery Site</td>
                      <td className="td alnright">
                        <strong>{userState.deliverySite}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Appointment Date</td>
                      <td className="td alnright">
                        <strong>{userState.applicationDate}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Appointment Time</td>
                      <td className="td alnright">
                        <strong>{userState.applicationTime}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Application ID</td>
                      <td className="td alnright">
                        <strong>{userState.applciationId}</strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Col>
            </Row>
            <br />
            <Row className="remove-print">
              <Col lg={4} xl={4} md={4} sm={4}></Col>
              <Col lg={1} xl={1} md={1} sm={1}>
                <Button>
                  <div style={{ display: "flex", verticalAlign: "end" }}>
                    {" "}
                    Download{" "}
                    <svg
                      style={{ marginLeft: "10px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
                    </svg>
                  </div>
                </Button>
              </Col>
              <Col lg={2} xl={2} md={2} sm={2}></Col>
              <Col lg={1} xl={1} md={1} sm={1}>
                <Button onClick={() => window.print()}>
                  <div style={{ display: "flex", verticalAlign: "end" }}>
                    {" "}
                    Print{" "}
                    <svg
                      style={{ marginLeft: "10px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 6 2 18 2 18 9"></polyline>
                      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                      <rect x="6" y="14" width="12" height="8"></rect>
                    </svg>
                  </div>
                </Button>
              </Col>
              <Col lg={4} xl={4} md={4} sm={4}></Col>
            </Row>
            <br />
          </CustomCard>
        </Col>
      </Row>
    </>
  );
};

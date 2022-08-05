import PassportNavBarComponent from "components/Passport/PassportNavBarComponent";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/css/passport/main.css";
import { CustomCard } from "components/shared/Card";
import Button from "react-bootstrap/esm/Button";
import PassportStatusResponse from "models/passport/PassportStatusResponse";
import { useLocation, Link } from "react-router-dom";
import NewVisaApplicationResponse from "models/visa/NewVisaApplicationResponse";
import CheckVisaStatusResponse from "models/visa/CheckVisaStatusResponse";

interface VisaDetailStatusPagePros {
  visaApplicationResponse?: NewVisaApplicationResponse;
  visaStatusCheckResponse?: CheckVisaStatusResponse;
  isForCheckStatus: boolean;
}

export const VisaDetailStatusPage: React.FC<VisaDetailStatusPagePros> = (
  props: VisaDetailStatusPagePros
) => {
  const { state } = useLocation() as any;

  const [userState, setUserState] = useState({
    isForCheckStatus: state.isForCheckStatus,
    firstName: state.isForCheckStatus
      ? state.visaStatusCheckResponse?.visaApplication?.visaApplication?.personalInformation?.personalInfo
        ?.firstName
      : state.visaApplicationResponse?.visaApplicationData?.personalInformation?.personalInfo
        ?.firstName,
    middleName: state.isForCheckStatus
      ? state.visaStatusCheckResponse?.visaApplication?.visaApplication?.personalInformation?.personalInfo
        ?.middleName
      : state.visaApplicationResponse?.visaApplicationData?.personalInformation?.personalInfo
        ?.middleName,
    lastName: state.isForCheckStatus
      ? state.visaStatusCheckResponse?.visaApplication?.visaApplication?.personalInformation?.personalInfo
        ?.lastName
      : state.visaApplicationResponse?.visaApplicationData?.personalInformation?.personalInfo
        ?.lastName,
    gender: state.isForCheckStatus
      ? state.visaStatusCheckResponse?.visaApplication?.visaApplication?.personalInformation?.personalInfo
      ?.gender
    : state.visaApplicationResponse?.visaApplicationData?.personalInformation?.personalInfo
      ?.gender,
    email: state.isForCheckStatus
      ? state.visaStatusCheckResponse?.visaApplication?.visaApplication?.personalInformation?.personalInfo
      ?.email
    : state.visaApplicationResponse?.visaApplicationData?.personalInformation?.personalInfo
      ?.email,
    phoneNumber: state.isForCheckStatus
      ? state.visaStatusCheckResponse?.visaApplication?.visaApplication?.personalInformation?.personalInfo
      ?.phoneNumber
    : state.visaApplicationResponse?.visaApplicationData?.personalInformation?.personalInfo
      ?.phoneNumber,
    birthPlace: state.isForCheckStatus
      ?  state.visaStatusCheckResponse?.visaApplication?.visaApplication?.personalInformation?.personalInfo
      ?.birthPlace
    : state.visaApplicationResponse?.visaApplicationData?.personalInformation?.personalInfo
      ?.birthPlace,
    city: state.isForCheckStatus
      ?  state.visaStatusCheckResponse?.visaApplication?.visaApplication?.personalInformation?.permanentAddress
      ?.city
    : state.visaApplicationResponse?.visaApplicationData?.personalInformation?.permanentAddress
    ?.city,
    street: state.isForCheckStatus
      ? state.visaStatusCheckResponse?.visaApplication?.visaApplication?.personalInformation?.permanentAddress
      ?.street
    : state.visaApplicationResponse?.visaApplicationData?.personalInformation?.permanentAddress
    ?.street,
    passportNumber: state.isForCheckStatus
      ? state.visaStatusCheckResponse?.visaApplication?.visaApplication?.passportDetail?.passportNumber
    : state.visaApplicationResponse?.visaApplicationData?.passportDetail?.passportNumber,
    visaValidity: state.isForCheckStatus
      ? state.visaStatusCheckResponse?.visaApplication?.visaApplication?.arrivalInformation?.visaValidity
      : state.visaApplicationResponse?.visaApplicationData?.arrivalInformation?.visaValidity,
    arrivalDate: state.isForCheckStatus
      ? state.visaStatusCheckResponse?.visaApplication?.visaApplication?.arrivalInformation?.arrivalDate
      : state.visaApplicationResponse?.visaApplicationData?.arrivalInformation?.arrivalDate,
    departureCity: state.isForCheckStatus
      ?state.visaStatusCheckResponse?.visaApplication?.visaApplication?.arrivalInformation?.departureCity
      : state.visaApplicationResponse?.visaApplicationData?.arrivalInformation?.departureCity,
    applciationId: state.isForCheckStatus
      ? state.visaStatusCheckResponse?.visaApplication?.applicationId
      : state.visaApplicationResponse?.visaApplicationData?.applicationId,
    status: state.isForCheckStatus
      ?  state.visaStatusCheckResponse?.visaApplication?.applicationStatus
      : state.visaApplicationResponse?.visaApplicationData?.applicationStatus,
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
                  <h5 className="">Passport and Arrival Information</h5>
                </div>
                <div>
                  <table className="table">
                    <tr className="tr">
                      <td className="f-14 text-muted td">Passport Number</td>
                      <td className="td alnright">
                        <strong>{userState.passportNumber}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Visa Validity</td>
                      <td className="td alnright">
                        <strong>{userState.visaValidity}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Arrival Date</td>
                      <td className="td alnright">
                        <strong>{userState.arrivalDate}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Departure City</td>
                      <td className="td alnright">
                        <strong>{userState.departureCity}</strong>
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

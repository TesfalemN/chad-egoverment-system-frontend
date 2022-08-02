import PassportNavBarComponent from "components/Passport/PassportNavBarComponent";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/css/passport/main.css";
import PassportImage from "../../assets/images/chad_passport.png";
import { UserProfileComponent } from "components/Passport/UserProfileComponent";
import { PassportCardComponent } from "components/Passport/PassportCardComponent";
import { CustomCard } from "components/shared/Card";
import Button from "react-bootstrap/esm/Button";
import { useLocation, Link } from "react-router-dom";
import BudsingRegistrationRequest from "models/business/BusinessRegistrationReqeust";
import BusinessStatusResponse from "./BusinessStatusResponse";
import { useSelector } from "react-redux";

interface BusinessDetailStatusPros {
  BusinessApplicationResponse?: BudsingRegistrationRequest;
  businessStatusResponse?: BusinessStatusResponse;
  isForCheckStatus: boolean;
}

const { state } = useLocation() as any;

export const BusinessDetailStatusPage: React.FC<BusinessDetailStatusPros> = (
  props: BusinessDetailStatusPros
) => {
  const [userState, setUserState] = useState({
    isForCheckStatus: state.isForCheckStatus,
    business_name:
      state.businessStatusResponse?.businessRegistration?.business_name,

    businessId: state.businessStatusResponse?.businessRegistration?.businessId,
    business_field: state.isForCheckStatus
      ? state.businessStatusResponse?.businessRegistration?.business_field
      : "",
    owner_id: state.isForCheckStatus
      ? state.businessStatusResponse?.businessRegistration?.owner_id
      : "",
    office_address: state.isForCheckStatus
      ? state.businessStatusResponse?.businessRegistration?.office_address
      : "",
    city: state.isForCheckStatus
      ? state.businessStatusResponse?.businessRegistration?.city
      : "",
    email: state.isForCheckStatus
      ? state.businessStatusResponse?.businessRegistration?.office_address
      : "",
    phone: state.isForCheckStatus
      ? state.businessStatusResponse?.businessRegistration?.phone
      : "",
    post_address: state.isForCheckStatus
      ? state.businessStatusResponse?.businessRegistration?.post_address
      : "",
    date_of_issuance: state.isForCheckStatus
      ? state.businessStatusResponse?.businessRegistration?.date_of_issuance
      : "",
    nationality: state.isForCheckStatus
      ? state.businessStatusResponse?.businessRegistration?.nationality
      : "",
    status: state.isForCheckStatus
      ? state.businessStatusResponse?.businessRegistration?.status
      : "",
  });

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
                    <b>{userState.businessId}</b>
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
                  <h5 className="">Business Information</h5>
                </div>
                <div>
                  <table className="table">
                    <tr className="tr">
                      <td className="f-14 text-muted td">Business Name</td>
                      <td className="td alnright">
                        <strong>{userState.business_name}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Business Field</td>
                      <td className="td alnright">
                        <strong>{userState.business_field}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Owner ID</td>
                      <td className="td alnright">
                        <strong>{userState.owner_id}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Office Address</td>
                      <td className="td alnright">
                        <strong>{userState.office_address}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">City</td>
                      <td className="td alnright">
                        <strong>{userState.city}</strong>
                      </td>
                    </tr>
                  </table>
                </div>
                <br />
              </Col>
              <Col lg={4} xl={4} md={4} sm={4} className="border-10 p-all-0">
                <div className="btn-primary p-ve-auto">
                  <h5 className="">Other Informations</h5>
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
                        <strong>{userState.phone}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Post Address</td>
                      <td className="td alnright">
                        <strong>{userState.post_address}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Date of Issueance</td>
                      <td className="td alnright">
                        <strong>{userState.date_of_issuance}</strong>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="f-14 text-muted td">Nationality</td>
                      <td className="td alnright">
                        <strong>{userState.nationality}</strong>
                      </td>
                    </tr>
                  </table>
                </div>
                <br />
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

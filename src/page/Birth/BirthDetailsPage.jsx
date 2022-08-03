import Keys from "helper/Keys";
import BirthResponse from "page/Business/BirthResponse";
import React, { useRef, useState } from "react";
import { checkMyBirthInfo } from "service/BirthService";
import HttpService from "service/shared/HttpClient";
import { getToken } from "service/shared/LocalStorage";

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

import { useSelector } from "react-redux";

import BirthNavBarComponent from "components/Birth/BirthNavBarComponent";
const Print = () => {
  //console.log('print');
  let printContents = document.getElementById("printablediv").innerHTML;
  let originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
};
const BirthDetailsPage = () => {
  var data = JSON.parse(localStorage.getItem("chad"));
  var birth = data?.birthData?.birthCertificateData.birthCertificate;
  const printRef = useRef();
  const [dat, setDat] = useState([]);
  const [datas, setDatas] = useState([]);

  var businessStatusResponse = new BirthResponse();
  var response = HttpService.getService(
    Keys.getmyBirthInfo,
    `${getToken()}`,
    ""
  )
    .then((res) => {
      setDatas(res.data);
    })
    .catch((err) => {
      // alert("noooo");
    });
  var response = HttpService.getService(
    Keys.masterDataRelativeURL,
    `${getToken()}`,
    ""
  )
    .then((res) => {
      setDat(res.data);
    })
    .catch((err) => {
      // alert("noooo");
    });

  if (response) {
    console.log("hello");
  }

  console.log(dat, "those data");
  return (
    <>
      <BirthNavBarComponent />
      <div id="printablediv">
        <Row>
          <Col className="pt-4 m-ho-10 ">
            <CustomCard className="pt-4 m-ho-10 pd-ho-10">
              <div className="title-box text-center">
                <div className="alert alert-success f-20" role="alert">
                  <strong> Your Certificate status is {datas?.birthCertificateData?.status}</strong>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex space-x-36">
                    <img
                      width={200}
                      height={200}
                     />
                    <img
                      width={200}
                      height={200}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAMAAAApQEceAAAAGFBMVEUAJmTGDDD+ywAAF2d1ZlH/1QDXXyfDADEyII2yAAAAjElEQVR4nO3POQEAIAwEsPIU/DtGxC0MiYNUpdbuGepzRyp+iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIfBp5npFz3HKOnyEAAAAASUVORK5CYII="
                    />
                    <img
                      width={200}
                      height={200}
                    />
                  </div>

                  <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                    Government of Chad
                  </span>
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Birth Certificate of{" "}
                    {datas?.birthCertificateData?.birthCertificate?.firstName}{" "}
                    {datas?.birthCertificateData?.birthCertificate?.lastname}
          
                  </span>
                </div>
                <h6 className="mt-4">
                  Your Certificate Id is {datas?.registrationId}
                  <span className="color-green"></span>
                  <div className="f-12 mt-2">
                    For More Information, contact administrator
                  </div>
                </h6>
              </div>
              <div className="title-box text-center">
                <h5 className="mt-1">
                  <hr />
                </h5>
              </div>
              <Row>
                <Col lg={3} xl={6} md={3} sm={4} className="border-10 p-all-0">
                  <div className="btn-primary p-ve-auto">
                    <h5 className="">Personal Information</h5>
                  </div>
                  <div>
                    <table className="table">
                      <tr className="tr">
                        <td className="f-14 text-muted td">First Name</td>
                        <td className="td alnright">
                          <strong>
                            {
                              datas?.birthCertificateData?.birthCertificate
                                ?.firstName
                            }
                          </strong>
                        </td>
                      </tr>
                      <tr className="tr">
                        <td className="f-14 text-muted td">Middle Name</td>
                        <td className="td alnright">
                          <strong>
                            {" "}
                            {
                              datas?.birthCertificateData?.birthCertificate
                                ?.middleName
                            }
                          </strong>
                        </td>
                      </tr>
                      <tr className="tr">
                        <td className="f-14 text-muted td">Last Name</td>
                        <td className="td alnright">
                          <strong>
                            {" "}
                            {
                              datas?.birthCertificateData?.birthCertificate
                                ?.lastName
                            }
                          </strong>
                        </td>
                      </tr>
                      <tr className="tr">
                        <td className="f-14 text-muted td">Gender</td>
                        <td className="td alnright">
                          <strong>
                            {
                              datas?.birthCertificateData?.birthCertificate
                                ?.gender
                            }
                          </strong>
                        </td>
                      </tr>
                      <tr className="tr">
                        <td className="f-14 text-muted td">Nationality</td>
                        <td className="td alnright">
                          <strong>
                            {
                              datas?.birthCertificateData?.birthCertificate
                                ?.nationality
                            }
                          </strong>
                        </td>
                      </tr>
                      <tr className="tr">
                        <td className="f-14 text-muted td">Phone Number</td>
                        <td className="td alnright">
                          <strong>
                            {
                              datas?.birthCertificateData?.birthCertificate
                                ?.phone_number
                            }
                          </strong>
                        </td>
                      </tr>
                      <tr className="tr">
                        <td className="f-14 text-muted td">Email</td>
                        <td className="td alnright">
                          <strong>
                            {
                              datas?.birthCertificateData?.birthCertificate
                                ?.email
                            }
                          </strong>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <br />
                </Col>
                <Col lg={8} xl={5} md={3} sm={4} className="border-10 p-all-0">
                  <div className="btn-primary p-ve-auto">
                    <h5 className="">Personal Information</h5>
                  </div>
                  <div>
                    <table className="table">
                      <tr className="tr">
                        <td className="f-14 text-muted td">
                          Place of Birth | Country
                        </td>
                        <td className="td alnright">
                          <strong>
                            {" "}
                            {
                              datas?.birthCertificateData?.birthCertificate
                                ?.birthPlace?.country
                            }
                          </strong>
                        </td>
                      </tr>
                      <tr className="tr">
                        <td className="f-14 text-muted td">Province</td>
                        <td className="td alnright">
                          <strong>
                            {" "}
                            {
                              datas?.birthCertificateData?.birthCertificate
                                ?.birthPlace?.province
                            }
                          </strong>
                        </td>
                      </tr>
                      <tr className="tr">
                        <td className="f-14 text-muted td">Sub Province</td>
                        <td className="td alnright">
                          <strong>
                            {" "}
                            {
                              datas?.birthCertificateData?.birthCertificate
                                ?.birthPlace?.subProvince
                            }
                          </strong>
                        </td>
                      </tr>

                      <tr className="tr">
                        <td className="f-14 text-muted td">Birth Place</td>
                        <td className="td alnright">
                          <strong>
                            {" "}
                            {
                              datas?.birthType?.birthCertificate?.birthPlace
                                ?.birthType
                            }
                          </strong>
                        </td>
                      </tr>
                      <tr className="tr">
                        <td className="f-14 text-muted td">Hospital Name</td>
                        <td className="td alnright">
                          <strong>
                            {" "}
                            {
                              datas?.birthCertificateData?.birthCertificate
                                ?.birthPlace?.hospitalName
                            }
                          </strong>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <br />
                </Col>

                <Col lg={4} xl={5} md={4} sm={4} className="border-10 p-all-0">
                  <div className="btn-primary p-ve-auto">
                    <h5 className="">Family Informations</h5>
                  </div>
                  <div>
                    <table className="table">
                      <tr className="tr">
                        <td className="f-14 text-muted td">Mother Name</td>
                        <td className="td alnright">
                          <strong>
                            {" "}
                            <strong>
                              {" "}
                              {
                                datas?.birthCertificateData?.birthCertificate
                                  ?.fullNameOfMother
                              }
                            </strong>
                          </strong>
                        </td>
                      </tr>
                      <tr className="tr">
                        <td className="f-14 text-muted td">
                          Mother Nationality
                        </td>
                        <td className="td alnright">
                          <strong>
                            {" "}
                            <strong>
                              {" "}
                              {
                                datas?.birthCertificateData?.birthCertificate
                                  ?.nationalityOfFather
                              }
                            </strong>
                          </strong>
                        </td>
                      </tr>
                      <tr className="tr">
                        <td className="f-14 text-muted td">Father Name</td>
                        <td className="td alnright">
                          <strong>
                            {" "}
                            <strong>
                              {" "}
                              {
                                datas?.birthCertificateData?.birthCertificate
                                  ?.fullNameOfFather
                              }
                            </strong>
                          </strong>
                        </td>
                      </tr>
                      <tr className="tr">
                        <td className="f-14 text-muted td">
                          Father Nationality
                        </td>
                        <td className="td alnright">
                          <strong>
                            {" "}
                            <strong>
                              {" "}
                              {
                                datas?.birthCertificateData?.birthCertificate
                                  ?.nationalityOfFather
                              }
                            </strong>
                          </strong>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <br />
                </Col>
                <Col lg={4} xl={6} md={4} sm={4} className="border-10 p-all-0">
                  <div className="btn-primary p-ve-auto">
                    <h5 className="">Home Address Informations</h5>
                  </div>
                  <div>
                    <table className="table">
                      <tr className="tr">
                        <td className="f-14 text-muted td">Region</td>
                        <td className="td alnright">
                          <strong>
                            {" "}
                            {
                              datas?.birthCertificateData?.birthCertificate
                                ?.userAddress?.region
                            }
                          </strong>
                        </td>
                      </tr>
                      <tr className="tr">
                        <td className="f-14 text-muted td">City</td>
                        <td className="td alnright">
                          <strong>
                            {" "}
                            {
                              datas?.birthCertificateData?.birthCertificate
                                ?.userAddress?.city
                            }
                          </strong>
                        </td>
                      </tr>
                      <tr className="tr">
                        <td className="f-14 text-muted td">Zone</td>
                        <td className="td alnright">
                          <strong>
                            {" "}
                            {
                              datas?.birthCertificateData?.birthCertificate
                                ?.userAddress?.zone
                            }
                          </strong>
                        </td>
                      </tr>
                      <tr className="tr">
                        <td className="f-14 text-muted td">Street</td>
                        <td className="td alnright">
                          <strong>
                            {" "}
                            {
                              datas?.birthCertificateData?.birthCertificate
                                ?.userAddress?.street
                            }
                          </strong>
                        </td>
                      </tr>

                      <tr className="tr">
                        <td className="f-14 text-muted td">House Number</td>
                        <td className="td alnright">
                          <strong>
                            H
                            <strong>
                              {" "}
                              {
                                datas?.birthCertificateData?.birthCertificate
                                  ?.userAddress?.house_number
                              }
                            </strong>
                          </strong>
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
                  <Button onClick={Print}>
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
      </div>
    </>
  );
};

export default BirthDetailsPage;

import axios from "axios";
import PassportNavBarComponent from "components/Business/BusinessNavBarComponent";
import { CustomCard } from "components/shared/Card";
import Keys from "helper/Keys";
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import HttpService from "service/shared/HttpClient";
import { getToken } from "service/shared/LocalStorage";
import http from "store/resources/http";

const BusinessDetailsPage = () => {
  var data = JSON.parse(localStorage.getItem("chad"));
  var business = data?.user;
  const [datas, setDatas] = useState([]);
  console.log(business, "business");
  const { id } = useParams();
  var response = HttpService.getService(
    Keys.getmyBusinessInfo,
    `${getToken()}`,
    ""
  )
    .then((res) => {
      setDatas(res.data);
    })
    .catch((err) => {
      //alert("noooo");
    });
  console.log(datas, "those datas");
  return (
    <>
      <PassportNavBarComponent />
      <Row>
        <Col className="pt-4 m-ho-10 ">
          <CustomCard className="pt-4 m-ho-10 pd-ho-10">
            <div className="title-box text-center">
              <div className="alert alert-success f-20" role="alert">
                <strong> Your Certificate is ready to print or Download</strong>
              </div>
            </div>
            <div className="title-box text-center">
              <h5 className="mt-1">
                <hr />
              </h5>
            </div>

            {datas?.businessData
              ?.filter((user) => user.applicationID === id)
              ?.map(() => {
                return (
                  <div className="flex">
                    <Col
                      lg={4}
                      xl={4}
                      md={4}
                      sm={4}
                      className="border-10 p-all-0"
                    >
                      <div className="btn-primary p-ve-auto">
                        <h5 className="">Business Information</h5>
                      </div>
                      <div>
                        <table className="table">
                          <tr className="tr">
                            <td className="f-14 text-muted td">
                              Business Name
                            </td>
                            <td className="td alnright">
                              <strong>
                                {
                                  business?.businessData?.business
                                    ?.business_name
                                }
                              </strong>
                            </td>
                          </tr>
                          <tr className="tr">
                            <td className="f-14 text-muted td">
                              Business Field
                            </td>
                            <td className="td alnright">
                              {business?.businessData?.business?.business_field}
                            </td>
                          </tr>
                          <tr className="tr">
                            <td className="f-14 text-muted td">Owner ID</td>
                            <td className="td alnright">
                              {business?.businessData?.business?.owner_id}
                            </td>
                          </tr>
                          <tr className="tr">
                            <td className="f-14 text-muted td">
                              Office Address
                            </td>
                            <td className="td alnright">
                              {business?.businessData?.business?.office_address}
                            </td>
                          </tr>
                          <tr className="tr">
                            <td className="f-14 text-muted td">City</td>
                            <td className="td alnright">
                              {business?.businessData?.business?.city}
                            </td>
                          </tr>
                        </table>
                      </div>
                      <br />
                    </Col>
                    <Col
                      lg={4}
                      xl={4}
                      md={4}
                      sm={4}
                      className="border-10 p-all-0"
                    >
                      <div className="btn-primary p-ve-auto">
                        <h5 className="">Other Informations</h5>
                      </div>
                      <div>
                        <table className="table">
                          <tr className="tr">
                            <td className="f-14 text-muted td">
                              Email Address
                            </td>
                            <td className="td alnright">
                              {business?.businessData?.business?.email}
                            </td>
                          </tr>
                          <tr className="tr">
                            <td className="f-14 text-muted td">Phone Number</td>
                            <td className="td alnright">
                              {business?.businessData?.business?.phone}
                            </td>
                          </tr>
                          <tr className="tr">
                            <td className="f-14 text-muted td">Post Address</td>
                            <td className="td alnright">
                              {business?.businessData?.business?.post_address}
                            </td>
                          </tr>
                          <tr className="tr">
                            <td className="f-14 text-muted td">
                              Date of Issueance
                            </td>
                            <td className="td alnright">
                              {
                                business?.businessData?.business
                                  ?.date_of_issuance
                              }
                            </td>
                          </tr>
                          <tr className="tr">
                            <td className="f-14 text-muted td">Nationality</td>
                            <td className="td alnright">
                              {business?.businessData?.business?.nationality}
                            </td>
                          </tr>
                        </table>
                      </div>
                      <br />
                    </Col>

                    <Col className="border-10  ">
                      <div className="btn-primary p-ve-auto">
                        <h5 className="">Your Status</h5>
                      </div>
                      <div>
                        <table className="table">
                          <tr className="tr">
                            <td className="f-14 text-muted td">
                              Current Status
                            </td>
                            <td className="td alnright">
                              {business?.businessData?.status.toUpperCase()}
                            </td>
                          </tr>
                        </table>
                      </div>
                      <br />
                    </Col>
                  </div>
                );
              })}

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

export default BusinessDetailsPage;

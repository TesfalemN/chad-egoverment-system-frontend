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
                        <div className="title-box text-center">
                <div className="alert alert-success f-20" role="alert">
                  <strong> Your Certificate status is {
                                  business?.status
                                }</strong>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex space-x-36" >
                    <img
                      width={200}
                      height={200}
                      src="data:image/jpeg;base64,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"
                        />
                     
                    <img
                      width={200}
                      height={200}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAMAAAApQEceAAAAGFBMVEUAJmTGDDD+ywAAF2d1ZlH/1QDXXyfDADEyII2yAAAAjElEQVR4nO3POQEAIAwEsPIU/DtGxC0MiYNUpdbuGepzRyp+iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIfBp5npFz3HKOnyEAAAAASUVORK5CYII="
                    />
                   
                  </div>

                  <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                    Government of Chad
                  </span>
                  <br />
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Business Licence{" "}
                   
          
                  </span>
                </div>
                <h6 className="mt-4">
                  Your Business Licence 
                  <span className="color-green"></span>
                  
                </h6>
              </div>
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
                                {console.log("eyuel" + business?.businessData?.business
                                    ?.business_name)}
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

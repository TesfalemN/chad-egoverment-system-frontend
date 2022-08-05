import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Img1 from "../../assets/images/features/image2.jpg";
import HomeUrl from "assets/images/home-border.png";

const ServiceList = () => {
  const [state, setState] = useState({
    Servicelist: [
      {
        id: 1,
        titlePrimary: true,
        isMore: false,
        title: "e-Governance",
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "Government Cloud",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "e-Democracy & Open data",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Justice & public safety",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "e-Services & registries",
            title: "",
            icon: "text-success",
          },
        ],
      },
      {
        id: 2,
        title: "e-Identity",
        titlePrimary: true,
        isMore: false,
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "ID-card",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "e-Residency",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Smart ID",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Mobile ID",
            title: "",
            icon: "text-success",
          },
        ],
      },
      {
        id: 3,
        title: "e-Health",
        isMore: false,
        titlePrimary: true,
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "e-Health Record",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "e-Ambulance",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "e-Prescription",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "‎",
            title: "",
            icon: "text-success",
          },

        ],
      },
      {
        id: 4,
        title: "Ease of doing business",
        titlePrimary: true,
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "e-Tax",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "e-Banking",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "e-Business Register",
            title: "",
            icon: "text-success",
          },

        ],
      },
      {
        id: 5,
        title: "Education and research",
        titlePrimary: true,
        isMore: false,
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "Digital tools & learning materials",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "School management systems",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Digital skills",
            title: "",
            icon: "text-success",
          },

        ],
      },
      {
        id: 6,
        title: "Smart city and mobility",
        titlePrimary: true,
        isMore: false,
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "Smart Freight Transportation",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Smart Freight Transportation",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Seamless Passenger Mobility",
            title: "",
            icon: "text-success",
          },

        ],
      },
      {
        id: 7,
        title: "Interoperability services",
        titlePrimary: true,
        isMore: false,
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "X-Road",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "NIIS",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "UXP",
            title: "",
            icon: "text-success",
          },

        ],
      },
      {
        id: 8,
        title: "Cyber security",
        titlePrimary: true,
        isMore: false,
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "KSI Blockchain",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Cyber Range & Exercises",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Secure data sharing",
            title: "",
            icon: "text-success",
          },

        ],
      },
      {
        id: 8,
        title: "Expolor More Service",
        isMore: true,
        icon: "",
        url: "/AllService",
        child: [
          {
            btitle: "‎",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "‎",
            title: " ",
            icon: " ",
          },
          {
            btitle: "‎a",
            title: "",
            icon: " ",
          },
        ],
      },
    ],
  });
  return (
    <>
      <br /><br /><br /><br />
      <section className="section bg-light bg-features">
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="mt-4 home-img">

                <img src={Img1} className="img-fluid" alt="" />
              </div>
            </Col>
            <Col lg={6} className="offset-lg-1">
              <div className="mt-4">
                <h2>Presenting Goverrment Service at your hand</h2>
                <p className="mt-4 text-muted">
                  Chad Government presents you different applications for your different needs. In the this system You can access your information anytime and get served anytime in the country eaisly
                </p>
                <div className="mt-4">
                  <Link to="#" className="btn btn-primary">
                    Explore More
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section" id="servicelist">
        <Container>
          <Col lg="12" className="mt-5 pt-4">
            <div className="title-box text-center">
              <h3 className="title-heading mt-4">
                Presenting Goverment Services Digitally{" "}
              </h3>
              <p className="text-muted f-17 mt-3">
                Chad Government presents you different applications for your different needs. <br />
                In the this system You can access your information anytime and get served anytime in the country eaisly
              </p>
            </div>
          </Col>
          <Row className=" pt-4">
            {state.Servicelist.map((item: any, key: any) => {
              if (item.isMore) {
                return (
                  <Col lg="4" key={key}>
                    <div className="pricing-box mt-4" style={{ minHeight: "400px", display: "flex", }}>
                      <div className="mt-3" style={{ marginRight: "auto",marginLeft:"auto", alignSelf:"center" }}>
                        <Link  to={item.url} >
                          <h4 className="f-20 text-primary on-hover">Explore More <i className="mdi mdi-arrow-right ml-1"></i></h4>

                        </Link>
                      </div>
                    </div>
                  </Col>);
              }
              else {
                return (
                  <Col lg="4" key={key}>
                    <div className="pricing-box mt-4" style={{ minHeight: "400px", display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "block" }}>
                        <i className={"h1 mdi " + item.icon}></i>
                        {item.titlePrimary === true ? (
                          <h4 className="f-20 text-primary">{item.title}</h4>
                        ) : (
                          <h4 className="f-20">{item.title}</h4>
                        )}

                        <div className="mt-4 pt-2">
                          <p className="mb-2 f-18">Contains</p>
                          {item.child.map((linkItem: any, linkkey: any) => (
                            <p className="mb-2" key={linkkey}>
                              <i
                                className={"mdi " + linkItem.icon + " f-18 mr-2"}
                              ></i>
                              <b>{linkItem.btitle}</b> {linkItem.title}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 pt-4" style={{ margin: "auto" }}>
                        <Link to={item.url} className="btn btn-primary btn-rounded">
                          Get Served
                        </Link>
                      </div>
                    </div>
                  </Col>
                );
              }

            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServiceList;

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Img1 from "assets/images/features/img-1.png";
import HomeUrl from "assets/images/home-border.png";

const AllServiceCompo = () => {
  const [state, setState] = useState({
    Servicelist: [
      {
        id: 1,
        title: "Buisness Registration",
        description:
          "Semper urna veal tempus pharetra elit habisse platea dictumst.",
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "Registering Your Business",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Accessing your Inquiries",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Viewing Status of Registration",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Get Your Certificate",
            title: "",
            icon: "text-success",
          },
        ],
      },
      {
        id: 2,
        title: "Passport Services",
        titlePrimary: true,
        description:
          "Semper urna veal tempus pharetra elit habisse platea dictumst.",
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "Apply For Your Passport",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Updating Your Passport inquires",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Check The status of the application",
            title: "",
            icon: "text-success",
          },
        ],
      },
      {
        id: 3,
        title: "Birth Certificate",
        description:
          "Birth Certificate for Chad Citizens",
        titlePrimary: false,
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "Apply for Birth Certificate",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "View the status of the request",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Get Your Certificate",
            title: "",
            icon: "text-success",
          },

        ],
      },
      {
        id: 4,
        title: "Chad VISA",
        description:
          "Do you want to apply for Chad VISA?",
        titlePrimary: false,
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "Apply for Chad VISA from all over the world",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "View the status of the Application",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Get Your VISA",
            title: "",
            icon: "text-success",
          },

        ],
      },
      {
        id: 5,
        title: "E Health",
        description:
          "E Health System for better health for Chad Citizens",
        titlePrimary: false,
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "Pharmacy Management",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Laboratory Management",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "OPD Management",
            title: "",
            icon: "text-success",
          },

        ],
      },
      {
        id: 5,
        title: "National ID Card",
        description:
          "HEalth Systems",
        titlePrimary: false,
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "Get your National ID",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Watch the status of your request",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Update your ID",
            title: "",
            icon: "text-success",
          },

        ],
      },
      {
        id: 5,
        title: "Custom Services",
        description:
          "Custom Services for Citizens",
        titlePrimary: false,
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "Import",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Export",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Registry",
            title: "",
            icon: "text-success",
          },

        ],
      },
      {
        id: 6,
        title: "e-Land Register",
        description:
          "E Land Register",
        titlePrimary: false,
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "Register land",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Transfer a land to other person",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Manage Information",
            title: "",
            icon: "text-success",
          },

        ],
      },
      {
        id: 5,
        title: "e-Shop",
        description:
          "Shopping Systems",
        titlePrimary: false,
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "Sell Products",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Buy Products",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Manage PRoducts",
            title: "",
            icon: "text-success",
          },

        ],
      },
      {
        id: 5,
        title: "e-School",
        description:
          "E School System for better health for Chad Citizens",
        titlePrimary: false,
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "Student Management",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Admission",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Course Registration",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Course Offering",
            title: "",
            icon: "text-success",
          },

        ],
      },
      {
        id: 5,
        title: "e-Tax",
        description:
          "Tax Management System for citizens",
        titlePrimary: false,
        icon: "",
        url: "/Login",
        child: [
          {
            btitle: "With Holding",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "VAT",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Reverse VAT",
            title: "",
            icon: "text-success",
          },
          {
            btitle: "Usage",
            title: "",
            icon: "text-success",
          },

        ],
      },
    ],
  });
  return (
    <>
      <section>
        <br/>
        <br/>
        <br/>
        <br/>
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="mt-4 home-img">
                <div className="animation-2"></div>
                <div className="animation-3"></div>
                <img src={Img1} className="img-fluid" alt="" />
              </div>
            </Col>
            <Col lg={6} className="offset-lg-1">
              <div className="mt-4">
                <h2>Presenting Goverment Service at your hand</h2>
                <p className="mt-4 text-muted">
                  Chad Government presents you different applications for your different needs.
                  In the this system You can access your information anytime and get served anytime in the country eaisly
                </p>
                <div className="mt-4">
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section" id="">
        <Container>
          <Row className="mt-5 pt-4">

            {/* Render Pricing items */}
            {state.Servicelist.map((item: any, key: any) => {
              if (item.isMore) {
                return (
                  <Col lg="4" key={key}>
                    <div className="pricing-box mt-4" style={{ minHeight: "400px", display: "flex", }}>
                      <div className="mt-3" style={{ marginRight: "auto", marginLeft: "auto", alignSelf: "center" }}>
                        <Link to={item.url} >
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
export default AllServiceCompo;

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Homenav from "components/NavBar/nav-bar";
import Img1 from "assets/images/features/img-1.png";
import HomeUrl from "assets/images/home-border.png";
const ServiceHome = () => {
  const [state, setState] = useState({
    Servicelist: [
      {
        id: 1,
        title: "Buisness Registration",
        description:
          "Semper urna veal tempus pharetra elit habisse platea dictumst.",
        icon: "",

        
        child: [
          {
            btitle: "Buisness Registration",
            title: "",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Buisness Registration",
            title: "",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Buisness Registration",
            title: "",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Buisness Registration",
            title: "",
            icon: "mdi-checkbox-marked-circle text-success",
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
       
   
        child: [
          {
            btitle: "Passport",
            title: "",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Visa",
            title: "",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Passport",
            title: "",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "VISA",
            title: "",
            icon: "mdi-checkbox-marked-circle text-success",
          },
        ],
      },
      {
        id: 3,
        title: "Ultimate",
        description:
          "Semper urna veal tempus pharetra elit habisse platea dictumst.",
        titlePrimary: false,
        icon: "",
        child: [
          {
            btitle: "Coming Soon",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "1",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Coming Soon",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Coming Soon",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
        ],
      },
    ],
  });
  return (
    <>
      <section className="section" id="servicelist">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="title-box text-center">
                <h1>Select your Choice of E-Government Service</h1>
               
              </div>
            </Col>
          </Row>
          <Row className="mt-5 pt-4">
            {/* Render Pricing items */}
            {state.Servicelist.map((item: any, key: any) => (
              <Col lg="4" key={key}>
                <div className="pricing-box mt-4">
                  { (
                    <div className="pricing-badge">
                      <span className="badge">Featured</span>{" "}
                    </div>
                  )}

                  <i className={"h1 mdi " + item.icon}></i>
                  {item.titlePrimary === true ? (
                    <h4 className="f-20 text-primary">{item.title}</h4>
                  ) : (
                    <h4 className="f-20">{item.title}</h4>
                  )}

                  <div className="mt-4 pt-2">
                    <p className="mb-2 f-18">Features</p>
                    {item.child.map((linkItem: any, linkkey: any) => (
                      <p className="mb-2" key={linkkey}>
                        <i
                          className={"mdi " + linkItem.icon + " f-18 mr-2"}
                        ></i>
                        <b>{linkItem.btitle}</b> {linkItem.title}
                      </p>
                    ))}
                  </div>
                 
             
                  <div className="mt-4 pt-3">
                    <Link to="#" className="btn btn-primary btn-rounded">
                      Get Served
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="section bg-light bg-features">
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
    </>
  );
};

export default ServiceHome;

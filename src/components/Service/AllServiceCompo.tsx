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
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Accessing your Inquiries",
            title: "",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Viewing Status of Registration",
            title: "",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Get Your Certificate",
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
        url: "/Login",
        child: [
          {
            btitle: "Apply For Your Passport",
            title: "",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Updating Your Passport inquires",
            title: "",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Check The status of the application",
            title: "",
            icon: "mdi-checkbox-marked-circle text-success",
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
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "View the status of the request",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Get Your Certificate",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
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
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "View the status of the Application",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Get Your VISA",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
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
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
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
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
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
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
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
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
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
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
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
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
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
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
          {
            btitle: "Health",
            title: "#",
            icon: "mdi-checkbox-marked-circle text-success",
          },
        
        ],
      },
      
      {
        id: 6,
        title: "More Services",
        description:
          "Do You want to see more Services, Click in the link below",
        titlePrimary: false,
        icon: "",
        url: "/Login",
        child: [         
          {
            btitle: "Do You want to see more Services, Click in the link below",
       
          
          },
         
        
        ],
      },
    ],
  });
  return (
    <>
            <section className="section" id="servicelist">
        <Container>
            <h2>Services provided by Chad E-Government System</h2>
          <Row className="mt-5 pt-4">
         
            {/* Render Pricing items */}
            {state.Servicelist.map((item: any, key: any) => (
              <Col lg="4" key={key}>
                <div className="pricing-box mt-4">
                  {
                   
                  }

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
                    <Link to={item.url} className="btn btn-primary btn-rounded">
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
                  Praesent ut tincidunt massa vel facilisis dui Integer mattis
                  quis augue in rhoncus Integer mattis enim vel eros bibendum
                  egestas id laoreet nisi Praesent malesuada eros at bibendum
                  eleifend Nam nec urna hendrerit interdum risus Donec faucibus
                  quis magna sit amet laoreet Maecenas finibus semper massa in
                  finibus est venenatis quis.
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
export default AllServiceCompo;

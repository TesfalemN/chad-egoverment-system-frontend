import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeUrl from "assets/images/home-border.png";
import CountUp from "react-countup";

const Service = () => {
  const [state, setState] = useState({
    services: [
      {
        id: "service1",
        icon: "mdi-register",
        title: "Experience Chad digitalisation",
        description:
          "‎ ",
      },
      {
        id: "service2",
        icon: "",
        title: "Gain insights on how to build an e-goverment",
        description:
          "",
      },
      {
        id: "service3",
        icon: "",
        title: "Connect with the Estonian companies behind our e-solutions",
        description:
          "",
      },
    ],
    counters: [
      {
        id: "1",
        extraclass: "",
        start: 25,
        end: 49,
        title: "Peoples",
        description:
          "It helps people to get easy access for the serivce they want..",
      },
      {
        id: "2",
        extraclass: "pt-3",
        start: 25,
        end: 76,
        title: "Government",
        description:
          "It Create a dynamic and smoothe work enviroment for government",
      },
      {
        id: "3",
        extraclass: "pt-3",
        start: 25,
        end: 99,
        title: "System",
        description:
          "Conncetiing every thing together with advanced IT features.",
      },
    ],
  });
  return (
    <>
      <section className="section bg-services" id="services">
        <Container>
          <Row>
          <Col lg="12" className="mt-5">
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
          </Row>
          <Row className="pt-4">
            {/* Render Footer Link */}
            {state.services.map((item: any, key: any) => (
              <Col lg={4} key={key}>
                <div className="services-box p-4 mt-4" style={{minHeight : "250px"}}>
                  <div className="services-icon bg-soft-primary">
                    <i className={"mdi text-primary " + item.icon}></i>
                  </div>

                  <h5 className="mt-4">{item.title}</h5>
                  <p className="text-muted mt-3">{item.description}</p>

                  <div className="mt-3">
                    <Link to="#" className="text-primary f-16">
                      Learn More <i className="mdi mdi-arrow-right ml-1"></i>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="align-items-center mt-5 pt-4" id="counter">
            <Col lg={6}>
              <div className="pr-4 mt-4">
                <p className="text-uppercase">why you need to use the System </p>
                <h3>It saves everything!</h3>
                <p className="text-muted mt-3">
                E-government is an easy way for the public to be more involved in political campaigns. It could increase voter awareness, which could lead to an increase in citizen participation in elections.

It is convenient and cost-effective for businesses, and the public benefits by getting easy access to the most current information available without having to spend time, energy and money to get it.
                </p>
                <div className="mt-4 pt-1">
                  <Link to="#" className="btn btn-outline-primary">
                    Discover More
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={5} className="offset-lg-1">
              <div className="counter-box">
                {state.counters.map((counteritem: any, key: any) => (
                  <div
                    className={counteritem.id !== "1" ? "mt-4 pt-3" : "mt-4"}
                    key={key}
                  >
                    <div className="media">
                      <div className="count-box bg-soft-primary text-center">
                        <h3 className="counter-count mb-1 text-primary">
                          {/* <CountUp
                            className="counter-value"
                            delay={2}
                            start={counteritem.start}
                            end={counteritem.end}
                          />{" "} */}
                          <span className="count-plus text-primary"> +</span>
                        </h3>
                        <p className="text-uppercase text-muted mb-0 f-14">
                          {counteritem.title}{" "}
                        </p>
                      </div>
                      <div className="media-body pl-4">
                        <p className="text-muted mb-0 mt-3">
                          {counteritem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Service;

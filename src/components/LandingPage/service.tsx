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
        title: "Buz Registration",
        description:
          "Quisque rhoncus lectus ut lectus hendrerit at convallis lorem ornare pellentesque lobortis hendrerit mattis.",
      },
      {
        id: "service2",
        icon: "",
        title: "Passport Services",
        description:
          "Vestibulum eu tortor artett tortor rhoncus porta quis on metus morbi comodo nisi vitae neque aliquam aliquam.",
      },
      {
        id: "service3",
        icon: "",
        title: "More to come",
        description:
          "Aliquam dictum mollis sem sed hendrerit tempus sed class aptent taciti sociosqu litora conubia himenaeos.",
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
          "Aliquam egestas vehicula sapien cibus sit amet rutrum dolor molestie.",
      },
      {
        id: "2",
        extraclass: "pt-3",
        start: 25,
        end: 76,
        title: "Government",
        description:
          "Pellentesque habitant morbi malesuada fames ac turpis egestas.",
      },
      {
        id: "3",
        extraclass: "pt-3",
        start: 25,
        end: 99,
        title: "System",
        description:
          "Suspendisse congue risus consequat sapien potitor risus tincidunt.",
      },
    ],
  });
  return (
    <>
      <section className="section bg-services" id="services">
        <Container>
          <Row>
            <Col lg="12">
              <div className="title-box text-center">
                <h3 className="title-heading mt-4">
                  Presenting Goverment Services Digitally{" "}
                </h3>
                <p className="text-muted f-17 mt-3">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae earum rem corporis necessita <br /> fringilla auctor In
                  eleifend maximus nisi sed vulputate.
                </p>

                <img src={HomeUrl} height="15" className="mt-3" alt="" />
              </div>
            </Col>
          </Row>
          <Row className="mt-5 pt-4">
            {/* Render Footer Link */}
            {state.services.map((item: any, key: any) => (
              <Col lg={4} key={key}>
                <div className="services-box p-4 mt-4">
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
                  Morbi at erat et tortor tempor sodales non eu lacus Donec at
                  gravida nunc vitae volutpat libero fusce sit amet mi quis
                  ipsum tempus gravida in quis felis Aliquam fringilla tempus
                  scelerisque Phasellus viverra tincidunt suscipit. Praesent non
                  arcu vitae augue aliquam eget vitae Pellentesque sem mauris
                  porta eget ultrices eros.
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

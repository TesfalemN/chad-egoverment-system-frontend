import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import LogoDark from "assets/images/logo-dark.png";
import { Link } from "react-router-dom";
import FooterLink from "./footer-ink";

const Footer = () => {

  return (
    <>
      {/* Footer Start */}
      <footer className="section bg-light bg-footer pb-5">
        <Container>
          <Row>
            <Col lg={1}></Col>
            <Col lg={4}>
              <div className="footer-info mt-4">
                <h4>Chad E-Government System</h4>
                <p className="text-muted mt-4 mb-2">
                  Chad E-Goverment System Chad E-Goverment System Chad E-Goverment System Chad E-Goverment System
                </p>
                
              </div>
            </Col>
            
            <Col lg={4}>
              <div className="mt-4">
                <h5 className="f-20">Subscribe</h5>
                <div className="subscribe mt-4 pt-1">
                  <Form action="#">
                    <Form.Control
                      placeholder="Enter Email"
                      type="text"
                      style={{ height: "auto" }}
                    />
                    <Button color="primary" className="btn btn-primary">
                      <i className="mdi mdi-send"></i>
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
          <hr className="my-5" />
          {/* Render Footer Link End */}
          <FooterLink />
        </Container>
      </footer>
      {/* Footer End */}
    </>
  );
};

export default Footer;

import React from "react";
import { Col, Row } from "react-bootstrap";
const FooterLink = () => {
  return (
    <Row>
      <Col lg={12}>
        <div className="text-center">
          <p className="text-muted mb-0">
            {new Date().getFullYear()} © Develop by RCT
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default FooterLink;

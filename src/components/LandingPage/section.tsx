import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import HomeUrl from "../../assets/images/home-border.png";
import Img from "../../assets/images/features/image1.jpg";

const Section = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      {" "}
      
    </>
  );
};

export default Section;

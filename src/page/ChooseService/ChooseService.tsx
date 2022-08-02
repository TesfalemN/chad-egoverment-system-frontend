import PassportNavBarComponent from "components/ChooseService/ChooseServiceNavBarComponent";
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../assets/css/passport/main.css';
import { Link, useNavigate } from "react-router-dom";
import PassportImage from "../../assets/images/chad_passport.png";
import { UserProfileComponent } from "components/ChooseService/ChooseServiceUserProfileComponent";
import { PassportCardComponent } from "components/ChooseService/ChooseServiceCardComponent";

export const ChooseService: React.FC = () => {

    const navigoter = useNavigate();

    const [state, setState] = useState({
        services: [
            {
                id: "service2",
                icon: "",
                title: "New Passport",
                description:
                    "New Passport applicants must fulfill the following requirements.",
            },
            {
                id: "UrgentService",
                icon: "mdi-register",
                title: "Urgent Service",
                description:
                    "For applicants of Lost/Stolen passport must fulfill the following requirements.",
            },
            {
                id: "service3",
                icon: "",
                title: "Change of Passport Data",
                description:
                    "Applicants for change of passport data must fulfill the following requirements.",
            },
            {
                id: "service4",
                icon: "",
                title: "Expired Passport",
                description:
                    "Expired Passport applicants must fulfill the following requirements.",
            },
            {
                id: "service5",
                icon: "",
                title: "Passport page run out",
                description:
                    "For applicants of passport pagerun out must fulfill the following requirements.",
            },
            {
                id: "service5",
                icon: "",
                title: "Damaged Passport",
                description:
                    "For applicants of damaged passport must fulfill the following requirements.",
            },
            {
                id: "service5",
                icon: "",
                title: "Passport page run out",
                description:
                    "For applicants of passport pagerun out must fulfill the following requirements.",
            },
        ],
    });

    return (<>
        <PassportNavBarComponent />
        <Row>
            <Col className="passport-menu" xl={12} lg={12} md={12} sm={12} >
                <Row>
                    &emsp;&emsp;&emsp;&emsp;
                    <Col xl={1} lg={1} md={1} sm={1}></Col>
                    <Col xl={3} lg={3} md={3} sm={3}>
                        <PassportCardComponent imageSrc={PassportImage} bodyText="Do you want your Business Registered? Provide all requested information and apply." bodyTitle="Start Registering your Business" buttonText="Get Served" onClick={() => navigoter('/Business')}></PassportCardComponent>
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={3}>
                        <PassportCardComponent imageSrc={PassportImage} bodyText="Do you want to secure Chad Passport now? Provide all requested information and apply." bodyTitle="Start New Application for your passport" buttonText="Get Served" onClick={() => navigoter('/PassportLandingPage')}></PassportCardComponent>
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={3}>
                        <PassportCardComponent imageSrc={PassportImage} bodyText="Do you want to secure Chad Visa now? Provide all requested information and apply." bodyTitle="Start New Application for your Visa" buttonText="Get Served" onClick={() => navigoter('/NewVisaApplicationPage')}></PassportCardComponent>
                    </Col>

                    <Col xl={1} lg={1} md={1} sm={1}></Col>
                </Row>
            </Col>
            <Col className="passport-menu" xl={12} lg={12} md={12} sm={12} >
                <Row>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <Col xl={3} lg={3} md={3} sm={3}>
                        <PassportCardComponent imageSrc={PassportImage} bodyText="Do you want to get your Birth Certificate now? Provide all requested information and apply." bodyTitle="Start New Application for your birth certificate" buttonText="Get Served" onClick={() => navigoter('/BirthLandingPage')}></PassportCardComponent>
                    </Col>
                </Row>
            </Col>

            <Col className="mt-5 pt-5">
                <div className="footer-dark mt-5 pt-5">
                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-md-3 item">
                                    <h3>Services</h3>
                                    <ul>
                                        <li><a href="#">Business Licence Registration</a></li>
                                        <li><a href="#">Passport Application</a></li>
                                        <li><a href="#">Birth Certificate </a></li>
                                        <li><a href="#">Information</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 col-md-3 item">
                                    <h3>About</h3>
                                    <ul>
                                        <li><a href="#">Company</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6 item text">
                                    <h3>Chad E-Government System</h3>
                                    <p>..................................................................................................</p>
                                </div>
                                <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
                            </div>
                            <p className="copyright">RCT © 2022</p>
                        </div>
                    </footer>
                </div>
            </Col>
        </Row>
    </>);
}
import PassportNavBarComponent from "components/Business/BusinessNavBarComponent";
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../assets/css/passport/main.css';
import { Link, useNavigate } from "react-router-dom";
import PassportImage from "../../assets/images/chad_passport.png";
import { UserProfileComponent } from "components/Business/BusinessUserProfileComponent";
import { PassportCardComponent } from "components/Business/BusinessCardComponent";

export const Business: React.FC = () => {
    
    const navigoter = useNavigate();
    const [state, setState] = useState({
        services: [
            {
                id: "service2",
                icon: "",
                title: "#",
                description:
                    "New Passport applicants must fulfill the following requirements.",
            },
            {
                id: "UrgentService",
                icon: "mdi-register",
                title: "#",
                description:
                    "For applicants of Lost/Stolen passport must fulfill the following requirements.",
            },
            {
                id: "service3",
                icon: "",
                title: "#",
                description:
                    "Applicants for change of passport data must fulfill the following requirements.",
            },
            {
                id: "service4",
                icon: "",
                title: "#",
                description:
                    "Expired Passport applicants must fulfill the following requirements.",
            },
            
         
        ],
    });

    return (<>
        <PassportNavBarComponent />
        <Row>
            <Col className="passport-menu"  xl={12} lg={12} md={12} sm={12} >
                <Row>
                &emsp;&emsp;&emsp;&emsp;
                    <Col xl={1} lg={1} md={1} sm={1}></Col>
                    <Col xl={3} lg={3} md={3} sm={3}>
                        <PassportCardComponent imageSrc={PassportImage} bodyText="Do you want to Register Your Business? Provide all requested information and apply." bodyTitle="Start New Application" buttonText="Apply Now" onClick={() => navigoter('/BuzRegistration') }></PassportCardComponent>
                    </Col>
                 
                    <Col xl={3} lg={3} md={3} sm={3}>
                        <PassportCardComponent imageSrc={PassportImage} bodyTitle="Check Status" bodyText="What is the status of my Business Registration Process? Provide all requested information and check now." buttonText="Check Now" onClick={() => navigoter('/CheckBusinessStatusPage') }></PassportCardComponent>
                    </Col>
                    <Col xl={1} lg={1} md={1} sm={1}></Col>
                </Row>
                <Row className='mt-5 pt-4'>
                    <Col lg="12">
                        <div className="title-box text-center">
                            <h3 className="title-heading mt-4">
                                HOW TO APPLY FOR Business Licence{" "}
                            </h3>
                            <p className="text-muted f-17 mt-3">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae earum rem corporis necessita <br /> fringilla auctor In
                                eleifend maximus nisi sed vulputate.
                            </p> 

                            <img src="" height="15" className="mt-3" alt="" />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3 pt-1 pd-ho-70">
                    {state.services.map((item: any, key: any) => (
                        <Col lg={3} key={key}>
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
            </Col>
            <Col className="mt-5 pt-5">
                <div className="footer-dark mt-5 pt-5">
                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-md-3 item">
                                    <h3>Services</h3>
                                    <ul>
                                        <li><a href="#">New Business Licence Registration</a></li>
                                        <li><a href="#">Check status</a></li>
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
                            <p className="copyright">RCT ?? 2022</p>
                        </div>
                    </footer>
                </div>
            </Col>
        </Row>
    </>);
}
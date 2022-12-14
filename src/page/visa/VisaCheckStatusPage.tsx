
import { Loading } from "components/shared/Loading";
import VisaNavBarComponent from "components/Visa/VisaNavBarComponent"
import React, { useState } from "react"
import { Card, Col, Row, FormGroup, FormLabel, FormControl, Button, Form, Alert } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { checkVisa } from "service/VisaService";

export const VisaCheckStautsPage: React.FC = () => {
    const navigoter = useNavigate();
    const { state } = useLocation() as any;
    const [isLoading, setIsLoading] = useState(false);
    const [userState, setUserState] = useState({
        isAlartShown: false,
        applicationId: '',
        isResponseSuccess : false, 
        StatusMessage : '',
        DetailMessage : ''
    });

    const  onSubmit =  async () => {

        setIsLoading(true);
            

            var checkVisaStatusResponse  = await checkVisa({
                appliationID :  userState.applicationId
            });

            if(checkVisaStatusResponse.status == "success")
            {
                navigoter('/VisaDetailStatusPage', { state: { isForCheckStatus: true, visaStatusCheckResponse: checkVisaStatusResponse } });
            }
            else{
                setUserState({
                    ...userState,
                    DetailMessage : checkVisaStatusResponse.message,
                    StatusMessage : `${checkVisaStatusResponse.status.charAt(0).toUpperCase()}${checkVisaStatusResponse.status.slice(1)}`, 
                    isResponseSuccess : false, 
                    isAlartShown : true,
                });
            }

            setIsLoading(false);
        }
    
    return (<> <VisaNavBarComponent />
        <Row>
            <Col className="passport-menu" xl={12} lg={12} md={12} sm={12} >
                <Row className='mt-5 pt-4'>
                    <Col xl={4} lg={4} md={4} sm={4}></Col>
                    <Col xl={4} lg={4} md={4} sm={4}>
                        <Card>
                            <Card.Body>
                                <div className="title-box text-center mt-4">
                                    <h3 className="">
                                        Check for Status
                                    </h3>
                                    <Row><Col xl={2} lg={2} md={2} sm={2}></Col>
                                        <Col xl={8} lg={8} md={8} sm={8}>
                                            <FormGroup className="">
                                                <FormLabel className="contact-lable custom-contact-lable">
                                                    Enter Your Application Id
                                                </FormLabel>
                                                <FormControl
                                                    name="Application Id"
                                                    id="Application Id"
                                                    placeholder="Application Id"
                                                    className="form-control custom-form-control"
                                                    required={true}
                                                    value={userState.applicationId}
                                                    onChange={((e) => setUserState({
                                                        ...userState,
                                                        applicationId: e.target.value,
                                                    }))}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col xl={2} lg={2} md={2} sm={2}></Col>

                                    </Row>
                                    <Row><Col xl={2} lg={2} md={2} sm={2}></Col>
                                        <Col xl={8} lg={8} md={8} sm={8}>
                                        <Button onClick={onSubmit} style={{width:"100%"}} className="mt-4">
                                        {isLoading ? <Loading text="Finding your visa"></Loading> :  "Find My Visa Application"}
                                        </Button>
                                        </Col>
                                        <Col xl={2} lg={2} md={2} sm={2}></Col>
                                    </Row>
                                    <br />
                                    {userState.isAlartShown ?
                                        <Alert variant={userState.isResponseSuccess ? "success" : "danger"} onClose={() => setUserState({
                                            ...userState,
                                            isAlartShown: false
                                        })} dismissible>
                                            <Alert.Heading>{userState.StatusMessage} on {state.isExtendVisa ? "Extended" : "Closed"} Your visa</Alert.Heading>
                                            <p>{userState.DetailMessage}
                                            </p>
                                        </Alert> : <></>
                                    }
                                   <div className="title-box text-center mt-4">

                                   </div>
                                </div>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col xl={4} lg={4} md={4} sm={4}></Col>

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
                                        <li><a href="#">New Visa</a></li>
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
                                    <h3>Chad Online Visa Applicaiton</h3>
                                    <p>..................................................................................................</p>
                                </div>
                                <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
                            </div>
                            <p className="copyright">RCT ?? 2022</p>
                        </div>
                    </footer>
                </div>
            </Col>
        </Row></>
    );
}
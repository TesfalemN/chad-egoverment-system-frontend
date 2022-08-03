import BirthNavBarComponent from "components/Birth/BirthNavBarComponent";
import React, { useContext, useState } from "react";
import { Stepper } from 'react-form-stepper';
import { Col, Row, FormGroup, FormLabel, FormControl, Button, Form } from 'react-bootstrap';
import { CustomCard } from "components/shared/Card";
import { bool, boolean } from "yup";
import { idText } from "typescript";
import PassportApplicationRequest from "models/passport/PassportApplicationRequest";
import { applyPassport } from "service/PassportService";
import { useNavigate } from "react-router-dom";
import { MasterDataContext } from "App";

export const NewVisaApplicationPage: React.FC = () => {
    const navigoter = useNavigate();
    const { masterData } = useContext(MasterDataContext);

    const [userState, setUserState] = useState({
        stepperList: [
            {
                id: "visatypeinfo",
                name: "Visa Information",
            },
            {
                id: "personInfo",
                name: "Personal Information",
            },
            {
                id: "contactInfo",
                name: "Contact Information"
            },
            {
                id: "passportDetail",
                name: "Passport Information"
            },
            {
                id: "arrivalInformation",
                name: "Arrival Information Information"
            }
        ],
        stepIndex: 0,
        vsiaInformationInputs: [
            {
                name: 'Visa Type',
                id: '',
                type: '',
                value: '',
                formType: 'select',
                options: masterData.visaTypes[0]?.visaTypes?.map((e) => ({
                    name: e.visaTypeName,
                    value: e.visaTypeName
                })),
                disabled: false, onChange: (value: string, index: number) => {
                    updateVisaInformationInput(value, index)
                }

            },
        ],
        personInformationInputs: [
            {
                name: 'First Name',
                id: '',
                type: 'text',
                disabled: false,
                formType: "input",
                value: '',
                onChange: (value: string, index: number) => {
                    updatePersonalInformationInput(value, index)
                }
            },
            {
                name: 'Middle Name',
                id: '',
                type: '',
                value: 'text',
                formType: "input",
                disabled: false, onChange: (value: string, index: number) => {
                    updatePersonalInformationInput(value, index)
                }
            },
            {
                name: 'last Name',
                id: '',
                type: '',
                value: 'text',
                formType: "input",
                disabled: false, onChange: (value: string, index: number) => {
                    updatePersonalInformationInput(value, index)
                }
            },
            {
                name: 'nationality',
                id: '',
                type: '',
                value: '',
                formType: 'select',
                options: masterData.nationalities[0]?.nationalities?.map((e) => ({
                    name: e.nationality,
                    value: e.countryShortCode
                })),
                disabled: true,
                onChange: (value: string, index: number) => {
                    updatePersonalInformationInput(value, index)
                }
            },
            {
                name: 'Occupation',
                id: '',
                type: 'text',
                value: '',
                formType: "input",
                disabled: false, onChange: (value: string, index: number) => {
                    updatePersonalInformationInput(value, index)
                }
            },
            {
                name: 'Gender',
                id: '',
                type: '',
                value: '',
                formType: "select",
                options: [
                    {
                        value: "Male",
                        name: "Male",
                    },
                    {
                        value: "Female",
                        name: "Female",
                    },
                ],
                disabled: false, onChange: (value: string, index: number) => {
                    updatePersonalInformationInput(value, index)
                }
            },
            {
                name: 'Phone Number',
                id: '',
                type: 'tel',
                value: '',
                formType: "input",
                disabled: false, onChange: (value: string, index: number) => {
                    updatePersonalInformationInput(value, index)
                }

            },
            {
                name: 'Email Addresse',
                id: '',
                type: 'email',
                value: '',
                formType: "input",
                disabled: false, onChange: (value: string, index: number) => {
                    updatePersonalInformationInput(value, index)
                }

            },
            {
                name: 'Birth Date',
                id: '',
                type: 'date',
                value: '',
                formType: "input",
                disabled: false, onChange: (value: string, index: number) => {
                    updatePersonalInformationInput(value, index)
                }
            },
            {
                name: 'Birth Place',
                id: '',
                type: 'date',
                value: '',
                formType: "input",
                disabled: false, onChange: (value: string, index: number) => {
                    updatePersonalInformationInput(value, index)
                }

            },
            {
                name: 'Birth Country',
                id: '',
                type: '',
                formType: 'select',
                options: masterData.countryLists[0]?.countryList?.map((e) => ({
                    name: e.countryName,
                    value: e.countryName
                })),
                disabled: false, onChange: (value: string, index: number) => {
                    updatePersonalInformationInput(value, index)
                }

            },
        ],
        contactInformationInputs: [
            {
                name: 'Street',
                id: '',
                type: '',
                value: '',
                formType: 'input',
                disabled: false, onChange: (value: string, index: number) => {
                    updatePersonalInformationInput(value, index)
                }

            },
            {
                name: 'City',
                id: '',
                type: '',
                value: '',
                formType: 'input',
                disabled: false, onChange: (value: string, index: number) => {
                    updatePersonalInformationInput(value, index)
                }

            },
            {
                name: 'Country',
                id: '',
                type: '',
                value: '',
                formType: 'select',
                options: masterData.countryLists[0]?.countryList?.map((e) => ({
                    name: e.countryName,
                    value: e.countryName
                })),
                disabled: false, onChange: (value: string, index: number) => {
                    updatePersonalInformationInput(value, index)
                }

            },
        ],
        homeInformationInputs: [
            {
                name: 'Passport Number',
                id: '',
                type: '',
                value: '',
                formType: 'input',
                disabled: false, onChange: (value: string, index: number) => {
                    updateHomeInformationInput(value, index)
                }

            },
            {
                name: 'Passport Issue Date',
                id: '',
                type: '',
                value: '',
                formType: 'input',
                disabled: false, onChange: (value: string, index: number) => {
                    updateHomeInformationInput(value, index)
                }

            },
            {
                name: 'State',
                id: '',
                type: '',
                value: '',
                formType: 'input',
                disabled: false, onChange: (value: string, index: number) => {
                    updateHomeInformationInput(value, index)
                }

            },
            {
                name: 'Zone',
                id: '',
                type: '',
                value: '',
                formType: 'input',
                disabled: false, onChange: (value: string, index: number) => {
                    updateHomeInformationInput(value, index)
                }

            },
            {
                name: 'Street',
                id: '',
                type: '',
                value: '',
                formType: 'input',
                disabled: false, onChange: (value: string, index: number) => {
                    updateHomeInformationInput(value, index)
                }

            },
            {
                name: 'House number',
                id: '',
                type: '',
                value: '',
                formType: 'input',
                options: masterData.countryLists[0]?.countryList?.map((e) => ({
                    name: e.countryName,
                    value: e.countryName
                })),
                disabled: false, onChange: (value: string, index: number) => {
                    updateHomeInformationInput(value, index)
                }

            },
            {
                name: 'Po. Box',
                id: '',
                type: '',
                value: '',
                formType: 'input',
                disabled: false, onChange: (value: string, index: number) => {
                    updateHomeInformationInput(value, index)
                }

            },
        ],
        officeInformationInputs: [
            {
                name: 'City',
                id: '',
                type: '',
                value: '',
                formType: 'input',
                options: masterData.countryLists[0]?.countryList?.map((e) => ({
                    name: e.countryName,
                    value: e.countryName
                })),
                disabled: false, onChange: (value: string, index: number) => {
                    updateOfficeInformationInput(value, index)
                }

            },
            {
                name: 'Delivery Site',
                id: '',
                type: '',
                value: '',
                formType: 'input',
                disabled: false, onChange: (value: string, index: number) => {
                    updateOfficeInformationInput(value, index)
                }

            },
            {
                name: 'Appointment Date',
                id: '',
                type: 'date',
                value: '',
                formType: 'input',
                disabled: false, onChange: (value: string, index: number) => {
                    updateOfficeInformationInput(value, index)
                }

            },
            {
                name: 'Appointment Time',
                id: '',
                type: 'time',
                value: '',
                formType: 'input',
                disabled: false, onChange: (value: string, index: number) => {
                    updateOfficeInformationInput(value, index)
                }

            },
        ]
    });

    const updateVisaInformationInput = (e: string, index: number) => {
        var updatedData = [...userState.vsiaInformationInputs];
        updatedData[index].value = e;
        setUserState((userState) =>
        ({
            ...userState,
            vsiaInformationInputs: updatedData
        })
        )
    }

    const updatePersonalInformationInput = (e: string, index: number) => {
        var updatedData = [...userState.personInformationInputs];
        updatedData[index].value = e;
        setUserState((userState) =>
        ({
            ...userState,
            personInformationInputs: updatedData
        })
        )
    }

    const updateContactInformationInput = (e: string, index: number) => {
        var updatedData = [...userState.contactInformationInputs];
        updatedData[index].value = e;
        setUserState((userState) =>
        ({
            ...userState,
            contactInformationInputs: updatedData
        })
        )
    }

    const updateHomeInformationInput = (e: string, index: number) => {
        var updatedData = [...userState.homeInformationInputs];
        updatedData[index].value = e;
        setUserState((userState) =>
        ({
            ...userState,
            homeInformationInputs: updatedData
        })
        )
    }

    const updateOfficeInformationInput = (e: string, index: number) => {
        var updatedData = [...userState.officeInformationInputs];
        updatedData[index].value = e;
        setUserState((userState) =>
        ({
            ...userState,
            officeInformationInputs: updatedData
        })
        )
    }

    const handleNext = async () => {
        if (userState.stepperList.length - 1 > userState.stepIndex) {
            setUserState((userState) =>
            ({
                ...userState,
                stepIndex: userState.stepIndex + 1
            })
            )
            console.log(userState.stepIndex)
        }
        else {
            await submitPassportInformation();
        }
    }

    const handleBack = () => {
        if (0 < userState.stepIndex) {
            setUserState((userState) =>
            ({
                ...userState,
                stepIndex: userState.stepIndex - 1
            })
            )
        }
    }

    const submitPassportInformation = async () => {
        var passportApplicationReqeust = new PassportApplicationRequest();
        passportApplicationReqeust = {
            type: "new",
            personalInformation: {
                first_name: userState.personInformationInputs[0].value ?? "",
                middle_name: userState.personInformationInputs[1].value  ?? "",
                last_name: userState.personInformationInputs[2].value  ?? "",
                nationality: userState.personInformationInputs[3].value  ?? "",
                occupation: userState.personInformationInputs[4].value  ?? "",
                hair_color: userState.personInformationInputs[5].value  ?? "",
                gender: userState.personInformationInputs[6].value  ?? "",
                martial_status: userState.personInformationInputs[7].value  ?? "",
                height: userState.personInformationInputs[8].value  ?? "",
                eye_color: userState.personInformationInputs[9].value  ?? "",
                phone_number: userState.contactInformationInputs[0].value,
                email: userState.contactInformationInputs[1].value,
                date_of_birth: userState.contactInformationInputs[2].value,
                birth_place: userState.contactInformationInputs[3].value,
                birth_certificate_id: userState.contactInformationInputs[4].value,
            },
            userAddress: {
                region: userState.homeInformationInputs[0].value,
                city: userState.homeInformationInputs[1].value,
                state: userState.homeInformationInputs[2].value,
                zone: userState.homeInformationInputs[3].value,
                street: userState.homeInformationInputs[4].value,
                house_number: userState.homeInformationInputs[5].value,
                po_box: userState.homeInformationInputs[6].value,
            },
            officeAddress: {
                city: userState.officeInformationInputs[0].value,
                delivery_site: userState.officeInformationInputs[1].value,
                appointment_date: userState.officeInformationInputs[2].value,
                appointment_time: userState.officeInformationInputs[3].value,
            }
        }

        var response = await applyPassport(passportApplicationReqeust);

        if (response?.status == "success") {
            navigoter('/PassportDetailStatusPage', { state: { isForCheckStatus: false, passportApplicationResponse: response } });
        }
    }
    return (<>
        <BirthNavBarComponent />
        <Row className="pd-ho-10">
            <Col xl={9} lg={9} md={9} sm={9} >
                <Row>
                    <CustomCard className="mt-4">
                        <Stepper
                            connectorStateColors={false}
                            styleConfig={{
                                activeBgColor: "#1ea59a",
                                activeTextColor: "#fff",
                                completedBgColor: "#002664",
                                completedTextColor: "#fff",
                                inactiveBgColor: "#e0e0e0",
                                inactiveTextColor: "#fff",
                                size: '2.1em',
                                circleFontSize: '1rem',
                                labelFontSize: '0.875rem',
                                borderRadius: '50%',
                                fontWeight: 500,
                            }}
                            steps={
                                userState.stepperList.map((e) => (
                                    {
                                        label: e.name,
                                    }))
                            }
                            activeStep={userState.stepIndex}
                        />
                    </CustomCard>
                </Row>
                <Row>
                    <CustomCard className="mt-4" cardTitle={userState.stepperList[userState.stepIndex].name} >
                        <Row >
                            <>
                                {
                                    userState.stepIndex == 0 ? userState.vsiaInformationInputs.map((e, index) => {
                                        switch (e.formType) {
                                            case "input":
                                                return <Col lg={3} xl={3} md={3} sm={3} >
                                                    <FormGroup className="mt-3">
                                                        <FormLabel className="contact-lable custom-contact-lable">
                                                            {e.name}
                                                        </FormLabel>
                                                        <FormControl
                                                            name={e.name}
                                                            id={e.id}
                                                            placeholder={e.name}
                                                            className="form-control custom-form-control"
                                                            type={e.type}
                                                            disabled={e.disabled}
                                                            value={e.value}
                                                            onChange={(v) => e.onChange(v.target.value, index)}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                break;
                                            case "select":
                                                return <Col lg={3} xl={3} md={3} sm={3} >
                                                    <FormGroup className="mt-3">
                                                        <FormLabel className="contact-lable custom-contact-lable">
                                                            {e.name}
                                                        </FormLabel>
                                                        <Form.Select aria-label={`Select ${e.name} `} onChange={(v) => e.onChange(v.target.value, index)}>
                                                            <>{
                                                                e.options?.map((item) => {
                                                                    return <option value={item.value}>{item.name}</option>
                                                                })
                                                            }</>
                                                        </Form.Select>
                                                    </FormGroup>
                                                </Col>
                                        }
                                    }) : <></>
                                }
                            </>
                            <>
                                {
                                    userState.stepIndex == 1 ? userState.personInformationInputs.map((e, index) => {
                                        switch (e.formType) {
                                            case "input":
                                                return <Col lg={3} xl={3} md={3} sm={3} >
                                                    <FormGroup className="mt-3">
                                                        <FormLabel className="contact-lable custom-contact-lable">
                                                            {e.name}
                                                        </FormLabel>
                                                        <FormControl
                                                            name={e.name}
                                                            id={e.id}
                                                            placeholder={e.name}
                                                            className="form-control custom-form-control"
                                                            type={e.type}
                                                            disabled={e.disabled}
                                                            value={e.value}
                                                            onChange={(v) => e.onChange(v.target.value, index)}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                break;
                                            case "select":
                                                return <Col lg={3} xl={3} md={3} sm={3} >
                                                    <FormGroup className="mt-3">
                                                        <FormLabel className="contact-lable custom-contact-lable">
                                                            {e.name}
                                                        </FormLabel>
                                                        <Form.Select aria-label={`Select ${e.name} `} onChange={(v) => e.onChange(v.target.value, index)}>
                                                            <>{
                                                                e.options?.map((item) => {
                                                                    return <option value={item.value}>{item.name}</option>
                                                                })
                                                            }</>
                                                        </Form.Select>
                                                    </FormGroup>
                                                </Col>
                                        }
                                    }) : <></>
                                }
                            </>
                            <>
                                {
                                    userState.stepIndex == 2 ? userState.contactInformationInputs.map((e, index) => {
                                        switch (e.formType) {
                                            case "input":
                                                return <Col lg={3} xl={3} md={3} sm={3} >
                                                    <FormGroup className="mt-3">
                                                        <FormLabel className="contact-lable custom-contact-lable">
                                                            {e.name}
                                                        </FormLabel>
                                                        <FormControl
                                                            name={e.name}
                                                            id={e.id}
                                                            placeholder={e.name}
                                                            className="form-control custom-form-control"
                                                            type={e.type}
                                                            disabled={e.disabled}
                                                            value={e.value}
                                                            onChange={(v) => e.onChange(v.target.value, index)}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                break;
                                            case "select":
                                                return <Col lg={3} xl={3} md={3} sm={3} >
                                                    <FormGroup className="mt-3">
                                                        <FormLabel className="contact-lable custom-contact-lable">
                                                            {e.name}
                                                        </FormLabel>
                                                        <Form.Select aria-label={`Select ${e.name} `} onChange={(v) => e.onChange(v.target.value, index)}>
                                                            <>{
                                                                e.options?.map((item) => {
                                                                    return <option value={item.value}>{item.name}</option>
                                                                })
                                                            }</>
                                                        </Form.Select>
                                                    </FormGroup>
                                                </Col>
                                        }
                                    }) : <></>
                                }
                            </>
                            <>
                                {
                                    userState.stepIndex == 3 ? userState.homeInformationInputs.map((e, index) => {
                                        switch (e.formType) {
                                            case "input":
                                                return <Col lg={3} xl={3} md={3} sm={3} >
                                                    <FormGroup className="mt-3">
                                                        <FormLabel className="contact-lable custom-contact-lable">
                                                            {e.name}
                                                        </FormLabel>
                                                        <FormControl
                                                            name={e.name}
                                                            id={e.id}
                                                            placeholder={e.name}
                                                            className="form-control custom-form-control"
                                                            type={e.type}
                                                            disabled={e.disabled}
                                                            value={e.value}
                                                            onChange={(v) => e.onChange(v.target.value, index)}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                break;
                                            case "select":
                                                return <Col lg={3} xl={3} md={3} sm={3} >
                                                    <FormGroup className="mt-3">
                                                        <FormLabel className="contact-lable custom-contact-lable">
                                                            {e.name}
                                                        </FormLabel>
                                                        <Form.Select aria-label={`Select ${e.name} `} onChange={(v) => e.onChange(v.target.value, index)}>
                                                            <>{
                                                                e.options?.map((item) => {
                                                                    return <option value={item.value}>{item.name}</option>
                                                                })
                                                            }</>
                                                        </Form.Select>
                                                    </FormGroup>
                                                </Col>
                                        }
                                    }) : <></>
                                }
                            </>
                            <>
                                {
                                    userState.stepIndex == 4 ? userState.officeInformationInputs.map((e, index) => {
                                        switch (e.formType) {
                                            case "input":
                                                return <Col lg={3} xl={3} md={3} sm={3} >
                                                    <FormGroup className="mt-3">
                                                        <FormLabel className="contact-lable custom-contact-lable">
                                                            {e.name}
                                                        </FormLabel>
                                                        <FormControl
                                                            name={e.name}
                                                            id={e.id}
                                                            placeholder={e.name}
                                                            className="form-control custom-form-control"
                                                            type={e.type}
                                                            disabled={e.disabled}
                                                            value={e.value}
                                                            onChange={(v) => e.onChange(v.target.value, index)}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                break;
                                            case "select":
                                                return <Col lg={3} xl={3} md={3} sm={3} >
                                                    <FormGroup className="mt-3">
                                                        <FormLabel className="contact-lable custom-contact-lable">
                                                            {e.name}
                                                        </FormLabel>
                                                        <Form.Select aria-label={`Select ${e.name} `} onChange={(v) => e.onChange(v.target.value, index)}>
                                                            <>{
                                                                e.options?.map((item) => {
                                                                    return <option value={item.value}>{item.name}</option>
                                                                })
                                                            }</>
                                                        </Form.Select>
                                                    </FormGroup>
                                                </Col>
                                        }
                                    }) : <></>
                                }
                            </>
                        </Row>
                        <br /><br />
                        <Row>
                            <Col xl={1} lg={1} md={1} sm={1}></Col>
                            <Col xl={1} lg={1} md={1} sm={1}>
                                <Button onClick={handleBack} disabled={userState.stepIndex == 0 ? true : false}>Back</Button>
                            </Col>
                            <Col xl={8} lg={8} md={8} sm={8}></Col>
                            <Col xl={1} lg={1} md={1} sm={1}>
                                <Button onClick={handleNext}>{userState.stepIndex >= userState.stepperList.length - 1 ? "Submit" : "Next"}</Button>
                            </Col>
                            <Col xl={1} lg={1} md={1} sm={1}></Col>
                        </Row>
                        <br />
                    </CustomCard>
                </Row>
            </Col>
            <Col xl={3} lg={3} md={3} sm={3}>
                <CustomCard >
                    <div className="pl-1 pr-3" style={{ height: "610px", overflow: "scroll", padding: "20px" }}>
                        <div className="title-box text-center">
                            <h5 className="">
                                Added Personal Information
                            </h5>
                        </div>
                        <div className="f-14 mt-4">
                            <table>
                                {
                                    userState.personInformationInputs?.map((e) => (<tr>
                                        <td className="f-12 text-muted">{e.name}</td>
                                        <td>&emsp;&emsp;&emsp;&emsp;{e.value}</td>
                                    </tr>))
                                }
                            </table>
                        </div>
                        <div className="title-box text-center">
                            <h5 className="">
                                Added Contact Information
                            </h5>
                        </div>
                        <div className="f-14 mt-4">
                            <table>
                                {
                                    userState.contactInformationInputs?.map((e) => (<tr>
                                        <td className="f-12 text-muted">{e.name}</td>
                                        <td>&emsp;&emsp;&emsp;&emsp;{e.value}</td>
                                    </tr>))
                                }
                            </table>
                        </div>
                        <div className="title-box text-center">
                            <h5 className="">
                                Added Home Information
                            </h5>
                        </div>
                        <div className="f-14 mt-4">
                            <table>
                                {
                                    userState.homeInformationInputs?.map((e) => (<tr>
                                        <td className="f-12 text-muted">{e.name}</td>
                                        <td>&emsp;&emsp;&emsp;&emsp;{e.value}</td>
                                    </tr>))
                                }
                            </table>
                        </div>
                        <div className="title-box text-center">
                            <h5 className="">
                                Added Office Information
                            </h5>
                        </div>
                        <div className="f-14 mt-4">
                            <table>
                                {
                                    userState.officeInformationInputs?.map((e) => (<tr>
                                        <td className="f-12 text-muted">{e.name}</td>
                                        <td>&emsp;&emsp;&emsp;&emsp;{e.value}</td>
                                    </tr>))
                                }
                            </table>
                        </div>
                    </div>
                </CustomCard>
            </Col>
        </Row>

    </>);
}

function useHistory() {
    throw new Error("Function not implemented.");
}

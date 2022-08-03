import PassportNavBarComponent from "components/Passport/PassportNavBarComponent";
import React, { useState } from "react";
import { Stepper } from "react-form-stepper";
import {
  Col,
  Row,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import { CustomCard } from "components/shared/Card";
import { bool, boolean } from "yup";
import { idText } from "typescript";
import PassportApplicationRequest from "models/passport/PassportApplicationRequest";
import { applyPassport } from "service/PassportService";
import { useNavigate } from "react-router-dom";
import BirthCerticicateRequest from "./BirthCerticicateRequest";
import { applyBirth } from "service/BirthService";
import { useDispatch } from "react-redux";
import { set_birth_data } from "store/actions";
export const BirthCertificate: React.FC = () => {
  const navigoter = useNavigate();
  const dispatch = useDispatch();
  const [base64Value, setBase64Value] = useState("");
  console.log(base64Value, "person Image");
  const [userState, setUserState] = useState({
    stepperList: [
      {
        id: "personInfo",
        name: "Personal Information",
      },
      {
        id: "contactInfo",
        name: "Family Information",
      },
      {
        id: "userAddressInfo",
        name: "Home Address Information",
      },
      {
        id: "officeAddressInfo",
        name: "Birth Information",
      },
    ],
    stepIndex: 0,
    personInformationInputs: [
      {
        name: "First Name",
        id: "",
        type: "",
        disabled: false,
        value: "",
        onChange: (value: string, index: number) => {
          updatePersonalInformationInput(value, index);
        },
      },
      {
        name: "Middle Name",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updatePersonalInformationInput(value, index);
        },
      },
      {
        name: "last Name",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updatePersonalInformationInput(value, index);
        },
      },

      {
        name: "Date of Birth",
        id: "",
        type: "date",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updatePersonalInformationInput(value, index);
        },
      },
      {
        name: "Gender",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updatePersonalInformationInput(value, index);
        },
      },
      {
        name: "nationality",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updatePersonalInformationInput(value, index);
        },
      },
      {
        name: "Phone Number",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updatePersonalInformationInput(value, index);
        },
      },
      {
        name: "Email",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updatePersonalInformationInput(value, index);
        },
      },
      {
        name: "Place/Country of Birth",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updatePersonalInformationInput(value, index);
        },
      },
    ],
    contactInformationInputs: [
      {
        name: "Mother Name",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updateContactInformationInput(value, index);
        },
      },
      {
        name: "Mother Nationality",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updateContactInformationInput(value, index);
        },
      },
      {
        name: "Father Name",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updateContactInformationInput(value, index);
        },
      },
      {
        name: "Father Nationality",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updateContactInformationInput(value, index);
        },
      },
    ],
    imageInformationInputs: [
      {
        name: "ID Card Image",
        id: "",
        type: "file",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updateImageInformationInputs(value, index);
        },
      },
      {
        name: "Person Image",
        id: "",
        type: "file",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updateImageInformationInputs(value, index);
        },
      },
    ],
    homeInformationInputs: [
      {
        name: "Region",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updateHomeInformationInput(value, index);
        },
      },
      {
        name: "City",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updateHomeInformationInput(value, index);
        },
      },
      {
        name: "State",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updateHomeInformationInput(value, index);
        },
      },
      {
        name: "Zone",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updateHomeInformationInput(value, index);
        },
      },

      {
        name: "Street",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updateHomeInformationInput(value, index);
        },
      },
      {
        name: "House Number",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updateHomeInformationInput(value, index);
        },
      },
    ],
    officeInformationInputs: [
      {
        name: "Date of Birth Registration",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updateOfficeInformationInput(value, index);
        },
      },
      {
        name: "Date of Issuance",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updateOfficeInformationInput(value, index);
        },
      },
      {
        name: "Name of Civil Refistrar",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updateOfficeInformationInput(value, index);
        },
      },
      {
        name: "Father Name",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updateOfficeInformationInput(value, index);
        },
      },
      {
        name: "Grand Father Name",
        id: "",
        type: "",
        value: "",
        disabled: false,
        onChange: (value: string, index: number) => {
          updateOfficeInformationInput(value, index);
        },
      },
    ],
  });
  var base64code = "";
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as any;
    const file = files[0];
    getBase64(file);
  };

  const onLoad = (fileString: string) => {
    base64code = fileString;
    // console.log("base64 Teshie", fileString);
    setBase64Value(base64code);
  };
  const getBase64 = (file: Blob) => {
    let reader = new FileReader() as any;
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result.split(",")[1]);
    };
  };
  const updatePersonalInformationInput = (e: string, index: number) => {
    var updatedData = [...userState.personInformationInputs];
    updatedData[index].value = e;
    setUserState((userState) => ({
      ...userState,
      personInformationInputs: updatedData,
    }));
  };
  const updateImageInformationInputs = (e: string, index: number) => {
    var updatedData = [...userState.imageInformationInputs];
    updatedData[index].value = e;
    setUserState((userState) => ({
      ...userState,
      imageInformationInputs: updatedData,
    }));
  };

  const updateContactInformationInput = (e: string, index: number) => {
    var updatedData = [...userState.contactInformationInputs];
    updatedData[index].value = e;
    setUserState((userState) => ({
      ...userState,
      contactInformationInputs: updatedData,
    }));
  };

  const updateHomeInformationInput = (e: string, index: number) => {
    var updatedData = [...userState.homeInformationInputs];
    updatedData[index].value = e;
    setUserState((userState) => ({
      ...userState,
      homeInformationInputs: updatedData,
    }));
  };

  const updateOfficeInformationInput = (e: string, index: number) => {
    var updatedData = [...userState.officeInformationInputs];
    updatedData[index].value = e;
    setUserState((userState) => ({
      ...userState,
      officeInformationInputs: updatedData,
    }));
  };

  const handleNext = async () => {
    if (userState.stepperList.length - 1 > userState.stepIndex) {
      setUserState((userState) => ({
        ...userState,
        stepIndex: userState.stepIndex + 1,
      }));
      console.log(userState.stepIndex);
    } else {
      await submitPassportInformation();
    }
  };

  const handleBack = () => {
    if (0 < userState.stepIndex) {
      setUserState((userState) => ({
        ...userState,
        stepIndex: userState.stepIndex - 1,
      }));
    }
  };

  const submitPassportInformation = async () => {
    var birthApplicationReqeust = new BirthCerticicateRequest();
    birthApplicationReqeust = {
      birthCertificate: {
        first_name: userState.personInformationInputs[0].value,
        middle_name: userState.personInformationInputs[1].value,
        last_name: userState.personInformationInputs[2].value,
        date_of_birth: userState.personInformationInputs[3].value,
        gender: userState.personInformationInputs[4].value,
        nationality: userState.personInformationInputs[5].value,
        phone_number: userState.personInformationInputs[6].value,
        email: userState.personInformationInputs[7].value,
        birth_place: {
          country: userState.personInformationInputs[8].value,
          province: "dfgdfg",
          subProvince: "",
          birthType: "dfg",
          hospitalName: "dfg",
        },
        fullNameOfFather: userState.contactInformationInputs[2].value,
        fullNameOfMother: userState.contactInformationInputs[0].value,
        nationalityOfFather: userState.contactInformationInputs[3].value,
        nationalityOfMother: userState.contactInformationInputs[1].value,
        idCardImage: base64Value,
        personImage: base64Value,
        userAddress: {
          region: userState.homeInformationInputs[0].value,
          city: userState.homeInformationInputs[1].value,
          state: userState.homeInformationInputs[2].value,
          zone: userState.homeInformationInputs[3].value,
          street: userState.homeInformationInputs[4].value,
          house_number: userState.homeInformationInputs[5].value,
        },
      },
    };
    var response = await applyBirth(birthApplicationReqeust);

    if (response?.status == "success") {
      dispatch(set_birth_data(response));
      navigoter("/BirthLandingPage", {
        state: {
          isForCheckStatus: false,
          passportApplicationResponse: response,
        },
      });
    }
  };
  return (
    <>
      <PassportNavBarComponent />
      <input type="file" />
      <Row className="pd-ho-10">
        <Col xl={9} lg={9} md={9} sm={9}>
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
                  size: "2.1em",
                  circleFontSize: "1rem",
                  labelFontSize: "0.875rem",
                  borderRadius: "50%",
                  fontWeight: 500,
                }}
                steps={userState.stepperList.map((e) => ({
                  label: e.name,
                }))}
                activeStep={userState.stepIndex}
              />
            </CustomCard>
          </Row>
          <Row>
            <CustomCard
              className="mt-4"
              cardTitle={userState.stepperList[userState.stepIndex].name}
            >
              <Row>
                {userState.stepIndex == 0 ? (
                  userState.personInformationInputs.map((e, index) => (
                    <Col lg={3} xl={3} md={3} sm={3}>
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
                          value={e.value}
                          onChange={(v) => e.onChange(v.target.value, index)}
                        />
                      </FormGroup>
                    </Col>
                  ))
                ) : (
                  <></>
                )}
                {userState.stepIndex == 0 ? (
                  userState.imageInformationInputs.map((e, index) => (
                    <Col lg={3} xl={3} md={3} sm={3}>
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
                          value={e.value}
                          onChange={handleOnChange}
                        />
                      </FormGroup>
                    </Col>
                  ))
                ) : (
                  <></>
                )}
                {userState.stepIndex == 1 ? (
                  userState.contactInformationInputs.map((e, index) => (
                    <Col lg={3} xl={3} md={3} sm={3}>
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
                          value={e.value}
                          onChange={(v) => e.onChange(v.target.value, index)}
                        />
                      </FormGroup>
                    </Col>
                  ))
                ) : (
                  <></>
                )}
                {userState.stepIndex == 2 ? (
                  userState.homeInformationInputs.map((e, index) => (
                    <Col lg={3} xl={3} md={3} sm={3}>
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
                          value={e.value}
                          onChange={(v) => e.onChange(v.target.value, index)}
                        />
                      </FormGroup>
                    </Col>
                  ))
                ) : (
                  <></>
                )}
                {userState.stepIndex == 3 ? (
                  userState.officeInformationInputs.map((e, index) => (
                    <Col lg={3} xl={3} md={3} sm={3}>
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
                          value={e.value}
                          onChange={(v) => e.onChange(v.target.value, index)}
                        />
                      </FormGroup>
                    </Col>
                  ))
                ) : (
                  <></>
                )}
              </Row>
              <br />
              <br />
              <Row>
                <Col xl={1} lg={1} md={1} sm={1}></Col>
                <Col xl={1} lg={1} md={1} sm={1}>
                  <Button
                    onClick={handleBack}
                    disabled={userState.stepIndex == 0 ? true : false}
                  >
                    Back
                  </Button>
                </Col>
                <Col xl={8} lg={8} md={8} sm={8}></Col>
                <Col xl={1} lg={1} md={1} sm={1}>
                  <Button onClick={handleNext}>
                    {userState.stepIndex >= userState.stepperList.length - 1
                      ? "Submit"
                      : "Next"}
                  </Button>
                </Col>
                <Col xl={1} lg={1} md={1} sm={1}></Col>
              </Row>
              <br />
            </CustomCard>
          </Row>
        </Col>
        <Col xl={3} lg={3} md={3} sm={3}>
          <CustomCard>
            <div
              className="pl-1 pr-3"
              style={{ height: "610px", overflow: "scroll", padding: "20px" }}
            >
              <div className="title-box text-center">
                <h5 className="">Added Personal Information</h5>
              </div>
              <div className="f-14 mt-4">
                <table>
                  {userState.personInformationInputs?.map((e) => (
                    <tr>
                      <td className="f-12 text-muted">{e.name}</td>
                      <td>&emsp;&emsp;&emsp;&emsp;{e.value}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <div className="title-box text-center">
                <h5 className="">Added Contact Information</h5>
              </div>
              <div className="f-14 mt-4">
                <table>
                  {userState.contactInformationInputs?.map((e) => (
                    <tr>
                      <td className="f-12 text-muted">{e.name}</td>
                      <td>&emsp;&emsp;&emsp;&emsp;{e.value}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <div className="title-box text-center">
                <h5 className="">Added Home Information</h5>
              </div>
              <div className="f-14 mt-4">
                <table>
                  {userState.homeInformationInputs?.map((e) => (
                    <tr>
                      <td className="f-12 text-muted">{e.name}</td>
                      <td>&emsp;&emsp;&emsp;&emsp;{e.value}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <div className="title-box text-center">
                <h5 className="">Added Office Information</h5>
              </div>
              <div className="f-14 mt-4">
                <table>
                  {userState.officeInformationInputs?.map((e) => (
                    <tr>
                      <td className="f-12 text-muted">{e.name}</td>
                      <td>&emsp;&emsp;&emsp;&emsp;{e.value}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </CustomCard>
        </Col>
      </Row>
    </>
  );
};

function useHistory() {
  throw new Error("Function not implemented.");
}

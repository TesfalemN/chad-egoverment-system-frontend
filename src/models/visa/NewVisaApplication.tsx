export default class NewVisaApplicationResponse{
        visaApplication = {
            visaType:"",
            citizenship: "",
            personImage : "",
            passportImage: "",
            personalInformation:{
                personalInfo: {
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    gender: "",
                    dateOfBirth: "",
                    nationality: "",
                    phoneNumber: "",
                    email: "",
                    birthPlace: "",
                    birthCountry: "",
                    occupation: ""
                },
                permanentAddress : {
                    street: "",
                    city: "",
                    country: ""
                }
            },
            passportDetail: {
                passportType: "",
                passportNumber: "",
                passportIssueDate: "",
                passportExpiryDate: "",
                passportIssuingCountry: "",
                issuingAuthority: ""
            },
            arrivalInformation: {
                arrivalDate: "",
                visaValidity: "",
                departureCountry: "",
                departureCity: "",
                airlineName: "",
                flightNumber: "",
                arrivalAdress: {
                   accomodationType: "",
                   accomodationName: "",
                   accomodationCity: "",
                   accomodationPhoneNo: "",
                   accomodationStreetAddress: ""
                }
            }
        }
}
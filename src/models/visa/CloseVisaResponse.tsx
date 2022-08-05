export default class CloseVisaResponse{
       status= "";
       message= "";
       data = {
           _id: "",
           visaApplication: {
                visaType: "",
                citizenship: "",
                personImage: "",
                passportImage: "",
                personalInformation: {
                    personalInfo: {
                        firstName: "",
                        middleName: "",
                        lastName: "",
                        dateOfBirth: "",
                        nationality: "",
                        phoneNumber: "",
                        email: "",
                        birthPlace: "",
                        birthCountry: "",
                        occupation: "",
                        gender: "",
                        _id: ""
                    },
                    permanentAddress: {
                       street: "",
                       city: "",
                       country: "",
                       _id: ""
                    },
                    _id: ""
                },
                passportDetail: {
                    passportType: "",
                    passportNumber: "",
                    passportIssueDate: "",
                    passportExpiryDate: "",
                    passportIssuingCountry: "",
                    issuingAuthority: "",
                    _id: ""
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
                        accomodationStreetAddress: "",
                        _id: ""
                    },
                    _id: ""
                },
                _id: ""
            },
            applicationStatus: "",
            __v: 0,
            closedDate: ""
        }
}
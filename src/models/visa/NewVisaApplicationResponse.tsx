export default class NewVisaApplicationResponse{
        status= "";
        message= "";
        visaApplicationData={
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
                        city: " ",
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
            applicationId: "",
            applicationStatus: "",
            _id: "",
            __v: 0
        }
}
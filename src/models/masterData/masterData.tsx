export default class MasterDataResponse {
    status = "";
    countryLists = [
        {
            _id: "",
            countryList: [
                {
                    countryId: 0,
                    countryShortCode: "",
                    countryName: "",
                    enCountryName: "",
                    enCountryCode: "",
                    threeDigitCountryCode: "",
                    _id: "",
                }
            ],
            __v: 0
        }
    ];
    countryPhoneCodeLists = [
        {
            _id: "",
            countryPhoneCodeList: [
                {
                    countryId: 0,
                    countryPhoneCode: "",
                    countryName: "",
                    countryNameEN: "",
                    _id: ""
                },
            ],
            __v: 0
        }
    ];
    regions = [
        {
            _id: "",
            regions: [
                {
                    code: "",
                    name: "",
                    sub_provinces: [

                    ],
                    _id: ""
                },
            ],
            __v: 0
        }
    ];
    nationalities = [
        {
            _id: "",
            nationalities: [
                {
                    countryId: 0,
                    countryShortCode: "",
                    nationality: "",
                    nationalityEN: "",
                    threeDigitCountryCode: "",
                    _id: ""
                }
            ],
            __v: 0
        }
    ];
    visaTypes = [
        {
            _id: "",
            visaTypes: [
                {
                    visaTypeId: "",
                    visaTypeName: "",
                    envisaTypeName: "",
                    visaTypeCode: "",
                    _id: ""
                },
            ],
            __v: 0
        }
    ];
    passportTypes = [
        {
            _id: "",
            passportTypes: [
                {
                   passportTypeId: "",
                   passportTypeName: "",
                   enPassportTypeName: "",
                   passportTypeCode: "",
                   _id: ""
                },
            ],
            __v: 0
        }
    ]
}

class Country {

}
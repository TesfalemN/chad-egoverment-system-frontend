export default class Keys {
    static baseUrl: string = "https://chad-e-government-api.herokuapp.com";
    static loginRelativeUrl: string = "/api/user/login";
    static registerRelativeUrl: string = "/api/user/register";
    static passportApplicationRelativeUrl: string = "/api/passportApplication/apply";
    static passportStatusRelativeUrl: string = "/api/passportApplication/getMyStatusById";
    static businessregistrationRelativeURL = "/api/business/register";
    static masterDataRelativeURL = "/api/masterData/getMasterData";
    static birthregistrationRelativeURL: string = "/api/birthCertificate/register";
    static visagistrationRelativeURL: string = "/api/visa/apply";
    static visaCheckRelativeURL: string = "/api/visa/getApplicationStatus";
    static getmyBusinessInfo="/api/business/getMyStatusById"
    static getmyBirthInfo: string = "/api/birthCertificate/getMyInfo";
    static visaExtendRelativeURL: string = "/api/visa/extend";
    static visaCloseRelativeURL: string = "/api/visa/close";
}

export default class Keys {
    static baseUrl: string = "https://chad-e-government-api.herokuapp.com";
    static loginRelativeUrl: string = "/api/user/login";
    static registerRelativeUrl: string = "/api/user/register";
    static passportApplicationRelativeUrl: string = "/api/passportApplication/apply";
    static passportStatusRelativeUrl: string = "/api/passportApplication/checkStatus";
    static businessregistrationRelativeURL = "/api/business/register";
    static masterDataRelativeURL = "/api/masterData/getMasterData";
    static getmyBusinessInfo="/api/business/getMyStatusById"
    static birthregistrationRelativeURL: string = "/api/birthCertificate/register";
    static getmyBirthInfo: string = "/api/birthCertificate/getMyInfo";
}

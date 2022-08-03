<<<<<<< HEAD
export default class Keys {
    static baseUrl: string = "https://chad-e-government-api.herokuapp.com";
    static loginRelativeUrl: string = "/api/user/login";
    static registerRelativeUrl: string = "/api/user/register";
    static passportApplicationRelativeUrl: string = "/api/passportApplication/apply";
    static passportStatusRelativeUrl: string = "/api/passportApplication/checkStatus";
    static businessregistrationRelativeURL = "/api/business/register";
    static masterDataRelativeURL = "/api/masterData/getMasterData";
=======
export default class Keys{
    static baseUrl : string = "https://chad-e-government-api.herokuapp.com";
    static loginRelativeUrl : string = "/api/user/login";
    static registerRelativeUrl : string = "/api/user/register";
    static passportApplicationRelativeUrl : string = "/api/passportApplication/apply";
    static passportStatusRelativeUrl : string = "/api/passportApplication/getMyStatusById";
    static businessregistrationRelativeURL="/api/business/register";
    static masterDataRelativeURL="/api/masterData/getMasterData";
>>>>>>> 81c28de051b6c71a4d6f6fbc66a7bdae9d58eb3b
    static birthregistrationRelativeURL: string = "/api/birthCertificate/register";
    static visagistrationRelativeURL: string = "/api/visa/apply";
    static visaCheckRelativeURL: string = "/api/visa/apply";
    static getmyBusinessInfo="/api/business/getMyStatusById"
    static getmyBirthInfo: string = "/api/birthCertificate/getMyInfo";
    static getmyBusinessInfo: string = "/api/business/getMyStatusById";

}

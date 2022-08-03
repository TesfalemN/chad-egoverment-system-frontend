import Keys from "helper/Keys";
import PassportApplicationRequest from "models/passport/PassportApplicationRequest";
import PassportApplicationResponse from "models/passport/PassportApplicationResponse";
import PassportStatusResponse from "models/passport/PassportStatusResponse";
import HttpService from "./shared/HttpClient";
import { getToken } from "./shared/LocalStorage";

export async function applyPassport(passportApplicationRequest : PassportApplicationRequest) {
    var passportApplicationResponse = new PassportApplicationResponse();
    console.log(passportApplicationRequest)
    var response = await HttpService.postService(
        passportApplicationRequest,
        Keys.passportApplicationRelativeUrl,
        `${getToken()}`,
        "",
    ).catch((e) => {
    });

    if (response) {
        passportApplicationResponse = response.data;
    }

    console.log(passportApplicationResponse)

    return passportApplicationResponse;
}

export async function checkPassportStatus(checkPassportStatus? : any) {
    console.log(checkPassportStatus);
    var passportStatusResponse = new PassportStatusResponse();
    var response = await HttpService.postService(
        checkPassportStatus,
        Keys.passportStatusRelativeUrl,
        `${getToken()}`,
        "",
    ).catch((e) => {
    });

    if (response) {
        passportStatusResponse = response.data;
    }

    console.log(passportStatusResponse)

    return passportStatusResponse;
}
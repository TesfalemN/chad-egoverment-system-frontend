import Keys from "helper/Keys";
import PassportApplicationResponse from "models/passport/PassportApplicationResponse";
import BirthCerticicateRequest from "page/Birth/BirthCerticicateRequest";
import BirthResponse from "page/Business/BirthResponse";
import HttpService from "./shared/HttpClient";
import { getToken } from "./shared/LocalStorage";

export async function applyBirth(birthApplicationRequest: BirthCerticicateRequest) {
    var birthApplicationResponse = new BirthResponse();
    var response = await HttpService.postService(
        birthApplicationRequest,
        Keys.birthregistrationRelativeURL,
        `${getToken()}`,
        "",
    ).catch((e) => {
    });

    if (response) {
        birthApplicationResponse = response.data;
    }

    console.log(birthApplicationResponse)

    return birthApplicationResponse;
}

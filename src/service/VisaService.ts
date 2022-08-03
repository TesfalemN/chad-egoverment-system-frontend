import Keys from "helper/Keys";
import NewVisaApplicationRequest from "models/visa/NewVisaApplicationRequest";
import NewVisaApplicationResponse from "models/visa/NewVisaApplicationResponse";
import HttpService from "./shared/HttpClient";
import { getToken } from "./shared/LocalStorage";

export async function applyVisa(newVisaApplicationRequest : NewVisaApplicationRequest) {
    var newVisaApplicationResponse = new NewVisaApplicationResponse();
    var response = await HttpService.postService(
        newVisaApplicationRequest,
        Keys.visagistrationRelativeURL,
        `${getToken()}`,
        "",
    ).catch((e) => {
    });

    if (response) {
        newVisaApplicationResponse = response.data;
    }

    console.log(newVisaApplicationResponse)

    return newVisaApplicationResponse;
}

export async function checkVisa(checkVisaApplicationRequest : any) {
    var newVisaApplicationResponse = new NewVisaApplicationResponse();
    var response = await HttpService.postService(
        checkVisaApplicationRequest,
        Keys.visaCheckRelativeURL,
        `${getToken()}`,
        "",
    ).catch((e) => {
    });

    if (response) {
        newVisaApplicationResponse = response.data;
    }

    console.log(newVisaApplicationResponse)

    return newVisaApplicationResponse;
}
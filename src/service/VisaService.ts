import Keys from "helper/Keys";
import CloseVisaRequest from "models/visa/CloseVisaRequest";
import CloseVisaResponse from "models/visa/CloseVisaResponse";
import ExtendVisaRequest from "models/visa/ExtendVisaRequest";
import ExtendVisaResponse from "models/visa/ExtendVisaResponse";
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

export async function extendVisa(extendVisaRequest : ExtendVisaRequest) {
    var extendVisaResponse = new ExtendVisaResponse();
    var response = await HttpService.postService(
        extendVisaRequest,
        Keys.visaExtendRelativeURL,
        `${getToken()}`,
        "",
    ).catch((e) => {
    });

    if (response) {
        extendVisaResponse = response.data;
    }

    return extendVisaResponse;
}

export async function closeVisa(closeVisaRequest : CloseVisaRequest) {
    var closeVisaResponse = new CloseVisaResponse();
    var response = await HttpService.postService(
        closeVisaRequest,
        Keys.visaCloseRelativeURL,
        `${getToken()}`,
        "",
    ).catch((e) => {
    });

    if (response) {
        closeVisaResponse = response.data;
    }

    return closeVisaResponse;
}
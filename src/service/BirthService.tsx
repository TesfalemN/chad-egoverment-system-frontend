import Keys from "helper/Keys";
import BirthCertificateRequest from "models/birth/BirthCertificateRequest";
import BirthCertificateResponse from "models/birth/BirthCertificateResponse";
import BirthStatusResponse from "models/birth/BirthStatusResponse";
import HttpService from "./shared/HttpClient";
import { getToken } from "./shared/LocalStorage";

export async function applyBirth(birthCertificateRequest : BirthCertificateRequest) {
    var birthCertificateResponse = new BirthCertificateResponse();
    var response = await HttpService.postService(
        birthCertificateRequest,
        Keys.birthcertificateRelativeURL,
        `${getToken()}`,
        "",
    ).catch((e) => {
    });

    if (response) {
        birthCertificateResponse = response.data;
    }

    console.log(birthCertificateResponse)

    return birthCertificateResponse;
}

export async function checkBirthStatus() {
    var birthStatusResponse = new BirthStatusResponse();
    var response = await HttpService.getService(
        Keys.birthcertificateRelativeURL,
       `${getToken()}`,
        "",
    ).catch((e) => {
    });

    if (response) {
        birthStatusResponse = response.data;
    }

    console.log(birthStatusResponse)

    return birthStatusResponse;
}
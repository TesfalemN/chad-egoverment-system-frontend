import Keys from "helper/Keys";
import PassportApplicationRequest from "models/passport/PassportApplicationRequest";
import PassportApplicationResponse from "models/passport/PassportApplicationResponse";
import PassportStatusResponse from "models/passport/PassportStatusResponse";
import HttpService from "./shared/HttpClient";
import { getToken } from "./shared/LocalStorage";

export async function applyPassport(passportApplicationRequest : PassportApplicationRequest) {
    var passportApplicationResponse = new PassportApplicationResponse();
    var response = await HttpService.postService(
        passportApplicationRequest,
        Keys.passportApplicationRelativeUrl,
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmQ1NTc4NWM1ZWJkZTBlYjg0ZGJlMDciLCJpYXQiOjE2NTgyMTk0NjQsImV4cCI6MTY1ODMwNTg2NH0.OVeDPVc6dronM4BmPoeaAkafr9OgDCeQWM9NWoYQKQA`,
        "",
    ).catch((e) => {
    });

    if (response) {
        passportApplicationResponse = response.data;
    }

    console.log(passportApplicationResponse)

    return passportApplicationResponse;
}

export async function checkPassportStatus() {
    var passportStatusResponse = new PassportStatusResponse();
    var response = await HttpService.getService(
        Keys.passportStatusRelativeUrl,
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmQ1NTc4NWM1ZWJkZTBlYjg0ZGJlMDciLCJpYXQiOjE2NTgyMTk0NjQsImV4cCI6MTY1ODMwNTg2NH0.OVeDPVc6dronM4BmPoeaAkafr9OgDCeQWM9NWoYQKQA`,
        "",
    ).catch((e) => {
    });

    if (response) {
        passportStatusResponse = response.data;
    }

    console.log(passportStatusResponse)

    return passportStatusResponse;
}
import Keys from "helper/Keys";
import BusinessRegistrationReqeust from "models/business/BusinessRegistrationReqeust";
import BusinessRegistrationResponse from "models/business/BusinessRegistrationResponse";
import BusinessStatusResponse from "models/business/BusinessStatusResponse";
import HttpService from "./shared/HttpClient";
import { getToken } from "./shared/LocalStorage";
export async function BusinessRegistration(BusinessRegistrationReqeust : BusinessRegistrationReqeust) {
    var businessRegistrationResponse = new BusinessRegistrationResponse();
    var response = await HttpService.postService(
        BusinessRegistrationReqeust,
        Keys.businessregistrationRelativeURL,
        `${getToken()}`,
        "",
    ).catch((e) => {
    });
    if (response) {
        businessRegistrationResponse = response.data;
    }
    console.log(businessRegistrationResponse)
    return businessRegistrationResponse;
}
export async function checkRegistrationStatus() {
    var businessStatusResponse = new BusinessStatusResponse();
    var response = await HttpService.getService(
        Keys.businessregistrationRelativeURL,
        `${getToken()}`,
        "",
    ).catch((e) => {
    });

    if (response) {
        businessStatusResponse = response.data;
    }

    console.log(businessStatusResponse)

    return businessStatusResponse;
}
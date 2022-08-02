import Keys from "helper/Keys";
import MasterDataResponse from "models/masterData/masterData";
import { UserLoginReqeust } from "models/user/UserLoginRequest";
import UserLoginResponse from "models/user/UserLoginResponse";
import UserRegisterRequest from "models/user/UserRegisterReqeust";
import UserRegisterResponse from "models/user/UserRegisterResponse";
import HttpService from "./shared/HttpClient";
import { getToken } from "./shared/LocalStorage";

export async function getMasterData() {
    var masterDataResponse = new MasterDataResponse();
    var response = await HttpService.getService(
        Keys.masterDataRelativeURL,
        `${getToken()}`,
        "",
    ).catch((e) => {
    });

console.log(response);

    if (response) {
        masterDataResponse = response.data;
    }

    return masterDataResponse;
}

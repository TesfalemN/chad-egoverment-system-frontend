import Keys from "helper/Keys";
import { UserLoginReqeust } from "models/user/UserLoginRequest";
import UserLoginResponse from "models/user/UserLoginResponse";
import UserRegisterRequest from "models/user/UserRegisterReqeust";
import UserRegisterResponse from "models/user/UserRegisterResponse";
import HttpService from "./shared/HttpClient";
import { getToken } from "./shared/LocalStorage";

export async function login(userLoginRequest : UserLoginReqeust) {
    var userResponse = new UserLoginResponse();
    console.log(userLoginRequest);
    var response = await HttpService.postService(
        userLoginRequest,
        Keys.loginRelativeUrl,
        `${getToken()}`,
        "",
    ).catch((e) => {
    });

    if (response) {
        userResponse = response.data;
    }

    return userResponse;
}

export async function register(userRegisterRequest : UserRegisterRequest) {
    var userRegisterResponse = new UserRegisterResponse();
    var response = await HttpService.postService(
        userRegisterRequest,
        Keys.registerRelativeUrl,
        `${getToken()}`,
        "",
    ).catch((e) => {
    });

    if (response) {
        userRegisterResponse = response.data;
    }

    return userRegisterResponse;
}
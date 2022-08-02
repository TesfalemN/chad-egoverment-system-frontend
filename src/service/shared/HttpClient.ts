import axios from "axios";
import Keys from "../../helper/Keys";

export default class HttpService {
  static postService = async (
    requestBody: object,
    relativePath: string,
    token: string,
    queryString: string
  ) => {

    let headers = this.buildHeader(token);
    let url = `${Keys.baseUrl}${relativePath}${queryString}`;
    console.log(url)
    var result = await axios
      .post(url.trim(), requestBody, {
        headers: headers,
      })
      .catch(async (e) => {
      });
    return result;
  };

  static getService = async (relativePath: string, token: string, queryString: string) => {
    let headers = this.buildHeader(token);
    let url = Keys.baseUrl + relativePath + queryString;
    console.log(url)
    console.log(headers)
    var result = await axios
      .get(url.trim(), {
        headers: headers,
      })
      .catch(async (e) => {
      });

    return result;
  };

  static getTokenServive = () => { };

  static buildHeader = (token: string) => {
    let headers = {
      ContentType: "application/json",
      Accept: "application/json",
      "Accept-Language": "en",
      "ngrok-skip-browser-warning": "true",
      "Authorization": `Bearer ${token}`,
    };

    return headers;
  };
}

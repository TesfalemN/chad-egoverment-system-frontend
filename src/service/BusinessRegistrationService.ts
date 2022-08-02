import http from "../helper/http-common";
import BudsingRegistrationRequest from "../models/business/BusinessRegistrationReqeust";
const create = (data: BudsingRegistrationRequest) => {
    return http.post<BudsingRegistrationRequest>("/api/business/register", data);
};

const BusinessRegistrationService = {
    create,
};
export default BusinessRegistrationService;
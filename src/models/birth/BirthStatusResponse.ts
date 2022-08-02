export default class BirthStatusResponse {
    status = "";
    passportApplication = {
        _id: "",
        type: "",
        userId: "",
        officeAddress: {
            city: "",
            delivery_site: "",
            appointment_date: "",
            appointment_time: "",
            _id: ""
        },
        personalInformation: {
            first_name: "",
            middle_name: "",
            last_name: "",
            date_of_birth: "",
            nationality: "",
            phone_number: "",
            email: "",
            birth_place: "",
            birth_certificate_id: "",
            occupation: "",
            hair_color: "",
            gender: "",
            martial_status: "",
            height: "",
            eye_color: "",
            _id: ""
        },
        userAddress: {
            region: "",
            city: "",
            state: "",
            zone: "",
            street: "",
            house_number: "",
            po_box: "",
            _id: ""
        },
        status: "",
        applicationID: "",
        __v: 0,
    }
}
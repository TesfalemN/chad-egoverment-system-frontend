import axios from "axios";
export default axios.create({
    baseURL: "https://e5a9-197-156-72-29.in.ngrok.io",
    headers: {
        "Content-type": "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmQ1NTc4NWM1ZWJkZTBlYjg0ZGJlMDciLCJpYXQiOjE2NTgyMTk0NjQsImV4cCI6MTY1ODMwNTg2NH0.OVeDPVc6dronM4BmPoeaAkafr9OgDCeQWM9NWoYQKQA",
    }
});


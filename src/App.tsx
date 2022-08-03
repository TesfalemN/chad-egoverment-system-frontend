import React, { type Dispatch, useState } from "react";
import logo from "./logo.svg";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage, SignUp, LoginPage } from "page";
import BuzRegistration from "page/Business/BuzRegistration";
import ForPassword from "page/ForPassword";
import { PassportLandingPage } from "page/passport/PassportLandingPage";
import { BirthLandingPage } from "page/Birth/BirthLandingPage";
import { ChooseService } from "page/ChooseService/ChooseService";
import { Business } from "page/Business/Business";
import Homepage from "page/Homepage";
import DashBoard from "page/DashBoard";
import { PassportNewApplicationPage } from "page/passport/PassportStartNewApplicationPage";
import { PassportDetailStatusPage } from "page/passport/PassportDetailStatusPage";
import { NewVisaApplicationPage } from "page/visa/NewVisaApplicationPage";
import MasterDataResponse from "models/masterData/masterData";
import BusinessDetailsPage from "page/Business/BusinessDetailsPage";
import CheckBusinessStatus from "page/Business/CheckBusinessStatus";
import AllService from "page/AllService";

import { Birth } from "page/Birth/Birth";
import BirthDetailsPage from "page/Birth/BirthDetailsPage";
import BirthCertificateStatus from "page/Birth/BirthCertificateStatus";
import { BirthCertificate } from "page/Birth/BirthCertificate";

export const MasterDataContext = React.createContext({
  masterData: new MasterDataResponse(),
  setMasterData: (() => undefined) as Dispatch<any>,
});

function App() {
  const [masterData, setMasterData] = useState(new MasterDataResponse());
  const value = { masterData, setMasterData };
  return (
    <MasterDataContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="ForPassword" element={<ForPassword />} />
          <Route path="PassportLandingPage" element={<PassportLandingPage />} />
          <Route path="Homepage" element={<Homepage />} />
          <Route path="BuzRegistration" element={<BuzRegistration />} />
          <Route path="/AllService" element={<AllService />} />
          <Route
            path="PassportNewApplicationPage"
            element={<PassportNewApplicationPage />}
          />
          <Route path="ChooseService" element={<ChooseService />} />
          <Route
            path="PassportDetailStatusPage"
            element={<PassportDetailStatusPage isForCheckStatus={false} />}
          />
          <Route
            path="BusinessDetailStatusPage/:id"
            element={<BusinessDetailsPage />}
          />
          <Route
            path="CheckBusinessStatusPage"
            element={<CheckBusinessStatus />}
          />
          <Route path="BirthCertificate" element={<Birth />} />
          <Route path="BirthLandingPage" element={<BirthLandingPage />} />
          <Route path="Business" element={<Business />} />
          <Route
            path="NewVisaApplicationPage"
            element={<NewVisaApplicationPage />}
          />
          <Route path="BirthCertificate" element={<Birth />} />
          <Route
            path="BirthCertificateStatus"
            element={<BirthCertificateStatus />}
          />
          <Route path="BirthCertificateDetail" element={<BirthDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </MasterDataContext.Provider>
  );
}

export default App;
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {isLoggedIn} from "../services/session/Utils";
import {ProtectedPage} from "../components/ProtectedPage";
import {DevicesPage} from "../pages/DevicesPage/DevicesPage";
import {DeviceForm} from "../components/devices/DeviceForm/DeviceForm";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {RegisterPage} from "../pages/RegisterPage/RegisterPage";
import {UserProfilePage} from "../pages/UserProfilePage/UserProfilePage";
import {ReportsPageBuilder} from "../pages/Reports/ReportsPageBuilder";
import {types} from "../resources/ReportsPageTypes";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isLoggedIn() ? <UserProfilePage/> : <LoginPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/account" element={<ProtectedPage component={<UserProfilePage/>}/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/devices"
                       element={<ProtectedPage component={<DevicesPage/>}/>}/>
                <Route path="/devices/new"
                       element={<ProtectedPage component={<DeviceForm/>}/>}/>
                <Route path="/device-info-page"
                       element={<ProtectedPage component={<ReportsPageBuilder pageType={types[0]}/>}/>}/>
                <Route path="/consumption-history-report"
                       element={<ProtectedPage component={<ReportsPageBuilder pageType={types[1]}/>}/>}/>
                <Route path="/production-history-report"
                       element={<ProtectedPage component={<ReportsPageBuilder pageType={types[2]}/>}/>}/>
                <Route path="/costs"
                       element={<ProtectedPage component={<ReportsPageBuilder pageType={types[3]}/>}/>}/>

            </Routes>
        </BrowserRouter>
    );
};
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {isLoggedIn} from "../services/session/Utils";
import {ProtectedPage} from "../components/ProtectedPage";
import {DevicesPage} from "../pages/DevicesPage/DevicesPage";
import {DeviceForm} from "../components/devices/DeviceForm/DeviceForm";
import {HomePage} from "../pages/HomePage/HomePage";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {RegisterPage} from "../pages/RegisterPage/RegisterPage";
import {types} from "../resources/ReportsPageTypes";
import {ReportsPageBuilder} from "../pages/Reports/ReportsPageBuilder";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isLoggedIn() ? <HomePage/> : <LoginPage/>}/>
                <Route path="/home" element={<ProtectedPage component={<HomePage/>}/>}/>
                <Route path="/login" element={isLoggedIn() ? <HomePage/> : <LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/devices"
                       element={<ProtectedPage component={<DevicesPage/>}/>}/>
                <Route path="/devices/new"
                       element={<ProtectedPage component={<DeviceForm/>}/>}/>
                <Route path="/device-page"
                       element={<ProtectedPage component={<ReportsPageBuilder title={"Washing Machine"} pageType = {types[0]}/>}/>}/>
            </Routes>
        </BrowserRouter>
    );
};
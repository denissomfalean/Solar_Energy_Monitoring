import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home";
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";
import {isLoggedIn} from "../services/session/utils";
import {ProtectedPage} from "../components/ProtectedPage";
import {DevicesPage} from "../pages/DevicesPage/DevicesPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isLoggedIn() ? <Home/> : <Login/>}/>
                <Route path="/home" element={<ProtectedPage component={<Home/>}/>}/>
                <Route path="/login" element={isLoggedIn() ? <Home/> : <Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/devices"
                       element={<ProtectedPage component={<DevicesPage/>}/>}/>
            </Routes>
        </BrowserRouter>
    );
};
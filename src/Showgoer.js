import React, { useState } from "react";
import {NavBar} from "./components/navbar/Navbar";
import {ApplicationViews} from "./ApplicationViews";
import { Login } from "./components/auth/Login";
import "./Showgoer.css";
import { Register } from "./components/auth/Register";
import { Route, Routes, Navigate } from "react-router-dom";

export const Showgoer = () => {

  const [loggedin, setLoggedin] = useState(false);

  const changeState = (bool) => setLoggedin(bool);

  if (localStorage.getItem("showgoer_user")) {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    );
} else { 
  return (
    <Routes>
       <Route path="/" element={<Navigate to="login" />} />
        <Route path="/login" element={<Login setLoggedin={changeState} />} />
        <Route path="/register" element={<Register setLoggedin={changeState} />} />
    </Routes>
  );
}

};
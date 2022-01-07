import { render } from "@testing-library/react"
import React from "react"
import "./Home.css"
import OrangeLogo from "./OrangeLogo.png"



export const Home = () => (

    <div id="homepage">

    {/* <img src={OrangeLogo} alt="OrangeLogo"></img> */}
        <h1 className="welcome">Welcome to ShowGoer!</h1>
    <div className="home_text">Your comprehensive portal for live music.</div>
{/* 
    <div id="homepage_container">
        <h3 id="container_heading">Dashboard</h3>
    </div> */}

    </div>
)


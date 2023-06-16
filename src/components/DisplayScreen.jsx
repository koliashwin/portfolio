import React from "react";
import Home from "./Home";
import { AppBar, Box, Container } from "@mui/material";
import Skills from "./Skills";
import NavigationBar from "./NavigationBar";
import Work from "./Work";

const DisplayScreen = () =>{
    return(
        <>
            <div id="Navigaiton"><NavigationBar /></div>
            <div id="Home"><Home /></div>
            <div id="Skills"><Skills /></div>
            <div id="Work"><Work /></div>
            <div id="About"><h2>About section here</h2></div>
            <div id="Contack"><h2>Contact section here</h2></div> 
        </>
    );
}

export default DisplayScreen;
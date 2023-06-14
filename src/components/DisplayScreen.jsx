import React from "react";
import Home from "./Home";
import { AppBar, Box, Container } from "@mui/material";
import Skills from "./Skills";
import NavigationBar from "./NavigationBar";

const DisplayScreen = () =>{
    return(
        <>
            <NavigationBar />
            <div id="Home"><Home /></div>
            <div id="Skills"><Skills /></div>
            <div id="Projects"><h2>project section here</h2></div>
            <div id="About"><h2>About section here</h2></div>
            <div id="Contack"><h2>Contact section here</h2></div> 
        </>
    );
}

export default DisplayScreen;
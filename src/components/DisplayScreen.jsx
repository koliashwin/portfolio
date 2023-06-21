import React from "react";
import Home from "./Home";
import Skills from "./Skills";
import NavigationBar from "./NavigationBar";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";
import { QuickOptions } from "./QuickOptions";


const DisplayScreen = () => {
    return (
        <>  
            <div id="Navigaiton"><NavigationBar /></div>
            <div id="Home"><Home /></div>
            <div id="Skills"><Skills /></div>            
            <div id="Work"><Work /></div>
            <div id="About"><About /></div>
            <div id="Contact"><Contact /></div>    
            <QuickOptions />     
        </>
    );
}

export default DisplayScreen;
import { DocumentScanner, Email, GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
import { Fab, SpeedDial, SpeedDialAction, SpeedDialIcon, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import Work from "./Work";
import { MyOuterTheme } from "../assets/MyTheme";

const actions = [
    { icon: <Email />, name: "Email", link: "mailto: ashwinkoli02@gmail.com" },
    { icon: <WhatsApp />, name: "WhatsApp", link: "https://wa.me/9594694362" },
    { icon: <GitHub />, name: "GitHub", link: "https://github.com/koliashwin" },
    { icon: <LinkedIn />, name: "LinkedIn", link: "https://www.linkedin.com/in/ashwin-koli-84055a13a/" },
    { icon: <DocumentScanner />, name: "Resume", link: "https://drive.google.com/file/d/1SYLzWCSQDfkW2_PIk75Hz75_u1H7C3_H/view?usp=sharing" },
];

export const QuickOptions = () => {
    return (
        <ThemeProvider theme={MyOuterTheme}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom:"1vh", left: "1vw" }}
                icon={<SpeedDialIcon />}
                FabProps={{ color: "secondary" }}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={(e) =>{
                            e.preventDefault();
                            window.open(action.link)
                        }}
                    >
                        
                    </SpeedDialAction>
                    
                ))}

            </SpeedDial>
        </ThemeProvider>
    )
}
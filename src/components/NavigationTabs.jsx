import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import Home from "./Home";

export default function NavigationTabs() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabchange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    return (
        <Box>
            <Box>
                <Tabs 
                    value={tabIndex} 
                    onChange={handleTabchange}
                    variant="fullWidth"
                    sx={{
                        backgroundColor: "aqua"
                    }}
                >
                    <Tab label='Home' />
                    <Tab label='tab 2' />
                    <Tab label='tab 3' />
                </Tabs>
            </Box>
            <Box>
                {tabIndex === 0 && (
                    <Home />
                )}
                {tabIndex === 1 && (
                    <Box>
                        <Typography>second tab</Typography>
                    </Box>
                )}
                {tabIndex === 2 && (
                    <Box>
                        <Typography>third tab</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    )
}
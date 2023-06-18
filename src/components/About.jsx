import React, { useState } from "react";
import { Box, Divider, Tab, Tabs, ThemeProvider, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { MyOuterTheme } from "../assets/MyTheme";

const About = () => {
    const [value, setValue] = useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={MyOuterTheme}>
            <Divider component="div" role="presentation" textAlign="left">
                <Typography variant="h3" mb={2}>About Me</Typography>
            </Divider>
            <TabContext value={value}>
                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="About Section"
                    >
                        
                            <Tab label="Introduction" value={"1"} />
                            <Tab label="Education" value={"2"} />
                            <Tab label="Hobbies/intrests" value={"3"} />
                        
                    </Tabs>
                </Box>

                <TabPanel value={"1"}>intro</TabPanel>
                <TabPanel value={"2"}>Education</TabPanel>
                <TabPanel value={"3"}>Hobbies/Intrests</TabPanel>
            </TabContext>

        </ThemeProvider>
    )
};
export default About;
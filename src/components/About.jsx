import React, { useState } from "react";
import { Box, Divider, Grid, Tab, Tabs, ThemeProvider, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { MyOuterTheme } from "../assets/MyTheme";
import { Cake, LocationOn, MenuBook } from "@mui/icons-material";
import MyData from "../database/MyData.json"

const Intro = () => {
    return (
        <>
            <Box>
                <Grid container spacing={2} justifyContent={"center"}>
                    <Grid item sm={4}>
                        <Box>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKgUUpHpc-JwcJiRLScAepL-T3oeaxR8T5A&usqp=CAU" />
                        </Box>
                    </Grid>
                    <Grid item sm={8} my={"auto"}>
                        <Grid container spacing={1} my={"auto"}>
                            <Grid item sm={6}>
                                <Box display={"flex"} >
                                    <Cake fontSize="large" />
                                    <Typography my={"auto"} mx={1}>4-August-1999</Typography>
                                </Box>
                            </Grid>

                            <Grid item sm={6}>
                                <Box display={"flex"} >
                                    <LocationOn fontSize="large" />
                                    <Typography my={"auto"} mx={1}>Mumbai,Maharashtra,India</Typography>
                                </Box>
                            </Grid>

                            <Grid item sm={6}>
                                <Box display={"flex"} >
                                    <LocationOn fontSize="large" />
                                    <Typography my={"auto"} mx={1}>Mumbai,Maharashtra,India</Typography>
                                </Box>
                            </Grid>

                            <Grid item sm={6}>
                                <Box display={"flex"} >
                                    <LocationOn fontSize="large" />
                                    <Typography my={"auto"} mx={1}>Mumbai,Maharashtra,India</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} sm={8} display={"flex"} justifyContent={"center"}>
                        <Box >
                            <Typography>this is about me sentence 1</Typography>
                            <Typography>this is about me another sentence 1 lets see how it looks, still not there</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

const Education = () => {
    return (
        <Typography fontFamily={"cursive"}>
            <Grid container spacing={2} display={"flex"} px={2}>
                {MyData.MyEducation.map(edu => {
                    return (
                        <>
                            <Grid item xs={4} sm={3} my={"auto"} display={"flex"} justifyContent={"right"} vari>
                                <Box >
                                    <Typography variant="inherit" textAlign={"right"} sx={{fontSize:{md: 32, sm:22}}}><strong>{edu.course}</strong></Typography>
                                    <Typography textAlign={"right"} variant="subtitle1">({edu.university})</Typography>
                                    <Divider />
                                </Box>
                                
                            </Grid>
                            <Divider orientation="vertical" flexItem ><MenuBook /></Divider>

                            <Grid item xs={6} sm={7} borderBottom={1}>
                                <Box>
                                    <Typography variant="inherit" sx={{fontSize:{md: 32, sm:22}}}><strong>{edu.institute}</strong></Typography>
                                    <Divider />
                                    <Typography variant="subtitle2">Passout : {edu.passout}</Typography>
                                    <Typography variant="caption"><strong>CGPA or % : {edu.result}</strong></Typography>
                                </Box>
                                
                            </Grid>
                            
                        </>
                    )
                })}
            </Grid>
        </Typography>
    )
}

const Hobbies = () => {
    return (
        <>
            <Box>
                
            </Box>
        </>
    )
}

const About = () => {
    const [value, setValue] = useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={MyOuterTheme}>
            <Divider component="div" role="presentation" textAlign="left">
                <Typography variant="h3" mb={2} fontFamily={"fantasy"}>About Me</Typography>
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

                <TabPanel value={"1"}><Intro /></TabPanel>
                <TabPanel value={"2"}><Education /></TabPanel>
                <TabPanel value={"3"}><Hobbies /></TabPanel>
            </TabContext>

        </ThemeProvider>
    )
};
export default About;
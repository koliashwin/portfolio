import React, { useState } from "react";
import { Avatar, Box, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Tab, Tabs, ThemeProvider, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { MyOuterTheme } from "../assets/MyTheme";
import { LoopRounded, MenuBook } from "@mui/icons-material";
import MyData from "../database/MyData.json"
import { motion } from "framer-motion"

const Intro = () => {
    return (
        <>
            <Box>
                <Grid container spacing={2} justifyContent={"center"}>
                    <Grid item sm={4}>
                        <motion.div
                            initial={{
                                opacity: 0
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.2
                            }}
                            whileInView={{
                                opacity: [0, 1],
                                rotateY: [0, 90, 0],
                                x: [0, 100, 0]
                            }}
                        >
                            <Box>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKgUUpHpc-JwcJiRLScAepL-T3oeaxR8T5A&usqp=CAU" />
                            </Box>
                        </motion.div>
                    </Grid>
                    <Grid item sm={8} my={"auto"}>
                        <Grid container spacing={1} m={"auto"}>
                            <motion.div
                                transition={{
                                    duration: 1,
                                    delay: 0.2
                                }}
                                whileInView={{
                                    opacity: [0, 1], x: [100, 0]
                                }}
                            >
                                <Box >
                                    <Typography>Hello there, My name is Ashwin Prakash Koli. I live in Mumbai.</Typography>
                                    <Typography> little bit about myself goes here</Typography>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} sm={8} display={"flex"} justifyContent={"center"}>
                        <motion.div
                            transition={{
                                duration: 1.2,
                                delay: 0.4
                            }}
                            whileInView={{
                                opacity: [0, 1], y: [50, 0]
                            }}
                        >
                            <Box >
                                <Typography>here goes info about my work and Experience</Typography>
                                <Typography>another paragraph</Typography>
                            </Box>
                        </motion.div>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

const Education = () => {
    return (
        <Typography fontFamily={"monospace"}>
            <Grid container spacing={2} display={"flex"} px={2}>
                {MyData.MyEducation.map((edu, i) => {
                    return (
                        <>
                            <Grid item xs={4} sm={3} my={"auto"} display={"flex"} justifyContent={"right"} vari>
                                <motion.div
                                    transition={{
                                        duration: 1,
                                        delay: i * 0.2
                                    }}
                                    whileInView={{
                                        opacity: [0, 1], x: [-100, 0]
                                    }}
                                >
                                    <Box >
                                        <Typography variant="inherit" textAlign={"right"} sx={{ fontSize: { md: 32, sm: 22 } }}><strong>{edu.course}</strong></Typography>
                                        <Typography textAlign={"right"} variant="subtitle1">({edu.university})</Typography>
                                        <Divider />
                                    </Box>
                                </motion.div>

                            </Grid>
                            <Divider orientation="vertical" flexItem ><MenuBook /></Divider>

                            <Grid item xs={6} sm={7} borderBottom={1}>
                                <motion.div
                                    transition={{
                                        duration: 1,
                                        delay: i * 0.2
                                    }}
                                    whileInView={{
                                        opacity: [0, 1], x: [100, 0]
                                    }}
                                >
                                    <Box>
                                        <Typography variant="inherit" sx={{ fontSize: { md: 32, sm: 22 } }}><strong>{edu.institute}</strong></Typography>
                                        <Divider />
                                        <Typography variant="subtitle2">Passout : {edu.passout}</Typography>
                                        <Typography variant="caption"><strong>CGPA or % : {edu.result}</strong></Typography>
                                    </Box>
                                </motion.div>

                            </Grid>

                        </>
                    )
                })}
            </Grid>
        </Typography>
    )
}

const Intrests = () => {
    const Quotes = MyData.MyQuotes;
    const [quote, setQuote] = useState(Quotes[0]);

    return (
        <>
            <Box >

                <Grid container spacing={3} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Grid item sm={6}>

                        <Paper elevation={3} sx={{ minHeight: { xs: "40vh", sm: "40vh", lg: "30vh" } }}>
                            <Box borderBottom={1} display={"flex"}>
                                <IconButton aria-label="Random Quote" onClick={() => {
                                    setQuote(Quotes[Math.floor(Math.random() * Quotes.length)])
                                }}>
                                    <LoopRounded fontSize="small" />
                                </IconButton>
                                <Typography fontFamily={"monospace"} mx={1} pt={1} fontWeight={500} >Quotes/Philosophies I like :</Typography>

                            </Box>
                            <Box p={2}>
                                <Typography fontFamily={"monospace"} fontStyle={"oblique"}>
                                    "{quote}"
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item sm={6}>

                        <Paper elevation={3} >
                            <Typography fontFamily={"monospace"} mx={2} pt={1} fontWeight={500} borderBottom={1}>Things I find Interesting :</Typography>
                            <List>
                                <Grid container spacing={2}>

                                    {MyData.MyHobbies.map((hobby) => {
                                        return (
                                            <Grid item lg={6}>
                                                <ListItem key={hobby.id}>
                                                    <ListItemAvatar>
                                                        <Avatar alt={hobby.name} src={hobby.avatar} />
                                                    </ListItemAvatar>
                                                    <ListItemText primary={hobby.name} secondary={hobby.examples} ></ListItemText>
                                                </ListItem>
                                            </Grid>
                                        )
                                    })}

                                </Grid>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
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
                <motion.h3
                    transition={{
                        duration: 1,
                        delay: 0.2
                    }}
                    whileInView={{
                        opacity: [0, 1], x: [-100, 0]
                    }}
                >
                    <Typography variant="h3" mb={2} fontFamily={"cursive"} fontWeight={700}>About Me</Typography>
                </motion.h3>
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
                        <Tab label="Interests" value={"3"} />

                    </Tabs>
                </Box>

                <TabPanel value={"1"}><Intro /></TabPanel>
                <TabPanel value={"2"}><Education /></TabPanel>
                <TabPanel value={"3"}><Intrests /></TabPanel>
            </TabContext>

        </ThemeProvider>
    )
};
export default About;
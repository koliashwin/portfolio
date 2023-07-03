import { Box, Container, Divider, Grid, Paper, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import Typewriter from 'typewriter-effect';
import { MyOuterTheme } from "../assets/MyTheme";
import { easeIn, motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            <ThemeProvider theme={MyOuterTheme}>
                <Box sx={styles.bgimg}
                    display="contents"
                    justifyContent="center"
                    alignItems='center'
                    textAlign='center'
                    my={3}

                >
                    <Box
                        color="white"
                        py="3rem"
                        margin="2rem"

                    >
                        <motion.div
                            transition={{
                                duration: 0.5,
                                delay: 0.1,
                                ease: "backInOut",
                            }}
                            
                            whileInView={{
                                opacity:[0,1], y:[100,0],
                                
                            }}
                        >
                            <Box>
                                <img
                                    src="/images/Ashwin_photo.jpeg"
                                    style={{
                                        borderRadius: '20px',
                                        height: "40vh",
                                    }}
                                />
                            </Box>
                        </motion.div>

                        <Grid
                            container
                            spacing={1}
                            // direction="column"
                            alignContent="center"
                            justifyContent="center"
                        >
                            <Grid item sm={10} md={6} lg={6}>
                                <Typography paragraph fontFamily="monospace" fontSize={20} minHeight="250px">
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter.typeString("<strong>Namaste!</strong>...<br/>")
                                                .pauseFor(500).changeDelay(40)
                                                .typeString("I'm <span style='color: #66ffcc;'><strong>Ashwin Koli</strong></span>,<br/>")
                                                .pauseFor(500).changeDelay(20)
                                                .typeString("I've recently completed my <span style='color: #66ffcc;'><strong>MCA</strong></span> Degree and want to become a professional <span style='color: #66ffcc;'><strong>Developer</strong></span>.")
                                                .pauseFor(1000)
                                                .start();
                                        }}
                                    />
                                </Typography>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </ThemeProvider>
        </>
    );
}

const styles = {
    bgimg: {
        display: "flex",
        flex: 1,
        backgroundImage: "url('https://wallpapercave.com/wp/wp2936914.jpg')",
        backgroundSize: "auto",
        // backgroundOrigin: "content-box",
        opacity: 1,
    },
    avatar: {
        display: 'flex',
        justifyContent: 'center', /* horizontally center */
        alignItems: 'center',    /* vertically center */
        height: '300px',
        width: '300px',
        background: 'orange',
    }
}

export default Home;
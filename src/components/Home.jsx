import { Box, Container, Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <>
            <Box sx={styles.bgimg}
                display="flex"
                justifyContent="center"
                alignItems='center'

            >
                <Grid
                    item
                    color="white"
                    py="3rem"
                    margin="2rem"
                    textAlign="center"
                    
                >

                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfn0t99ud_u3AX5fdC9u87z2xrLHyZ6xr1Aw&usqp=CAU"
                        style={{
                            borderRadius: '20px',
                            // marginTop: '20px'
                        }}
                    />

                    <Typography paragraph fontFamily="monospace" fontSize={20} minHeight="250px">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("<strong>Namaste!</strong>...<br/>")
                                    .pauseFor(500).changeDelay(60)
                                    .typeString("I'm <span style='color: #66ffcc;'><strong>Ashwin Koli</strong></span>,<br/>")
                                    .pauseFor(500).changeDelay(40)
                                    .typeString("I've recently completed my <span style='color: #66ffcc;'><strong>MCA</strong></span> Degree and want to become a professional <span style='color: #66ffcc;'><strong>Developer</strong></span>.")
                                    .pauseFor(1000)
                                    .start();
                            }}
                        />
                    </Typography>

                </Grid>
            </Box>
        </>
    );
}

const styles = {
    bgimg: {
        display: "flex",
        flex: 1,
        backgroundImage: "url('https://wallpaperaccess.com/full/5651988.jpg')",
        backgroundSize: "cover",
        opacity: 0.9,
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
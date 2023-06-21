import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, Divider, Grid, ThemeProvider, Typography } from "@mui/material";
import MyData from "../database/MyData.json"
import { MyOuterTheme } from "../assets/MyTheme";
import { motion, spring } from "framer-motion"

// console.log(MyData);
const SkillCard = (props) => {
    return (
        <Card key={`skillcard-${props.id}`} sx={{ display: "flex", backgroundColor: "cornsilk" }}>
            <CardMedia
                component='img'
                sx={{ width: 64, height: 64, my: "auto" }}
                image={props.icon}
                alt="logo"
            />
            <Box sx={{ display: "flex" }}>
                <CardContent>
                    <Typography fontFamily={"inherit"} ><strong>{props.name}</strong></Typography>
                </CardContent>
            </Box>
        </Card>
    )
}
const Skills = () => {
    return (
        <ThemeProvider theme={MyOuterTheme}>
            <Box>
                <Box py={2} mx={2} >
                    <Divider component="div" role="presentation" textAlign="left">
                        <Typography variant="h3" mb={2} fontFamily={"cursive"} fontWeight={700}>My Skills</Typography>
                    </Divider>
                    <Grid container spacing={2} >
                        {MyData.MySkills.map((skill, i) => {
                            return (
                                <Grid item xs={6} sm={6} md={3} >
                                    <motion.div
                                        initial={{ opacity:0, scale:0.5 }}
                                        animate={{ opacity: 1, scale: 1}}
                                        transition={{
                                            // duration: 1,
                                            // delay: 0.1,
                                            // ease: "easeInOut",
                                            type: "spring",
                                            damping: 8,
                                            stiffness: 100,
                                            restDelta: 0.0001
                                        }}
                                        
                                        whileInView={{
                                            opacity:[0,0.5,1],
                                            scale: [0,1]
                                            
                                        }}
                                        
                                        
                                    >
                                        <Box justifyContent={"center"}>
                                            <SkillCard name={skill.name} id={skill.id} icon={skill.icon} />
                                        </Box>
                                    </motion.div>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </Box>
        </ThemeProvider>

    )
}

export default Skills;
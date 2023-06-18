import React, { useState } from "react";
import { Box, Card, CardContent, CardHeader, CardMedia, Divider, Grid, ThemeProvider, Typography, textFieldClasses } from "@mui/material";
import MyData from "../database/MyData.json"
import { Height } from "@mui/icons-material";
import { MyOuterTheme } from "../assets/MyTheme";

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
                    <Typography>{props.name}</Typography>
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
                        <Typography variant="h3" mb={2}>My Skills</Typography>
                    </Divider>
                    <Grid container spacing={2} >
                        {MyData.MySkills.map((skill, i) => {
                            return (
                                <Grid item xs={6} sm={6} md={3} px={1.5} >
                                    <Box justifyContent={"center"}>
                                        <SkillCard name={skill.name} id={skill.id} icon={skill.icon} />
                                    </Box>
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
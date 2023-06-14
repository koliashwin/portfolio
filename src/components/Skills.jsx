import React, { useState } from "react";
import { Box, Card, CardContent, CardHeader, CardMedia, Divider, Grid, Typography } from "@mui/material";
import MyData from "../database/MyData.json"
import { Height } from "@mui/icons-material";

// console.log(MyData);
const SkillCard = (props) => {
    return (
        <Card key={props.id} sx={{ display: "flex", backdropFilter: "revert" }}>
            <CardMedia
                component='img'
                sx={{ width: 64, height: 64 }}
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
        <Box>
            <Divider> Home </Divider>
            <Grid container spacing={2} >
                {MyData.MySkills.map((skill, i) => {
                    return (
                        <Grid item xs={10} sm={6} md={4}>
                            <SkillCard name={skill.name} id={skill.id} icon={skill.icon} />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>

    )
}

export default Skills;
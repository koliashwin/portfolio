import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, CardMedia, Chip, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Mydata from "../database/MyData.json";
import { Circle, DoubleArrow, ExpandMore, Group } from "@mui/icons-material";

const ExpCard = () => {
    return (
        <>
            {Mydata.WorkExperience.map((work) => {
                return (
                    <>
                        <Accordion sx={{ mb: 3 }} >
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                id={work.id}
                                sx={{ my: -1 }}
                            >
                                <Box>
                                    <Typography variant="h4">{work.position}</Typography>
                                    <Typography variant="h6" display={"inline-flex"} >
                                        {work.type} at
                                        <Typography variant="h5" ml={1}>{work.company}</Typography>
                                    </Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2} display={"flex"} flexDirection={"row"}>
                                    <Grid item my={"auto"} xs={3} sm={2}>
                                        <Typography>From:</Typography>
                                    </Grid>

                                    <Grid item xs={9} sm={10} borderBottom={1}>
                                        <Typography>
                                            {work.duration[0]} - {work.duration[1]}
                                        </Typography>
                                    </Grid>

                                    <Grid item my={"auto"} xs={3} sm={2}>
                                        <Typography>Work Deatils:</Typography>
                                    </Grid>
                                    <Grid item xs={9} sm={10} borderBottom={1}>
                                        <List>
                                            {work.description.map((detail) => {
                                                return (
                                                    <Box>
                                                        <ListItem disablePadding>
                                                            <ListItemIcon>
                                                                <DoubleArrow />
                                                            </ListItemIcon>
                                                            <ListItemText>{detail}</ListItemText>
                                                        </ListItem>
                                                        <Divider />
                                                    </Box>

                                                )
                                            })}
                                        </List>
                                    </Grid>

                                    <Grid item my={"auto"} xs={3} sm={2}>
                                        <Typography>Tech & Tools:</Typography>
                                    </Grid>
                                    <Grid item xs={9} sm={10} borderBottom={1}>
                                        <Typography>
                                            {work.techstack.map((tech) => {
                                                return (
                                                    <Chip label={tech} sx={{ m: 0.5 }}></Chip>
                                                )
                                            })}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </>
                )
            })}
        </>
    )
};

const ProjectCard = () => {
    return (
        <>
            {Mydata.MyProjects.map(project => {
                return (
                    <>

                        <Accordion sx={{ mb: 1 }} >
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                id={project.id}
                            >
                                <Box>
                                    <Typography variant="h4" >{project.name}</Typography>
                                    <Typography variant="subtitle2">{project.type}</Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2}>
                                    <Grid item md={6} pr={2} justifyItems={"center"}>
                                        <CardMedia
                                            component="img"
                                            image={project.image}
                                            alt={project.name}
                                            
                                        />
                                    </Grid>
                                    
                                    <Grid item md={6}>
                                        <Grid container spacing={2}>
                                            <Grid item my={"auto"} xs={4} sm={2}>
                                                <Typography >Contributors : </Typography>
                                            </Grid>
                                            <Grid item xs={8} sm={10} borderBottom={1} >
                                                {project.contributors.map((person) => {
                                                    return (
                                                        <>
                                                            <ListItem disablePadding>
                                                                <ListItemIcon sx={{ mr: -2 }}>
                                                                    <Group fontSize="small" />
                                                                </ListItemIcon>
                                                                <ListItemText>{person}</ListItemText>
                                                            </ListItem>
                                                        </>
                                                    )
                                                })}
                                            </Grid>

                                            <Grid item my={"auto"} xs={4} sm={2}>
                                                <Typography>Project Deatils:</Typography>
                                            </Grid>

                                            <Grid item xs={8} sm={10} borderBottom={1}>
                                                <List>
                                                    {project.description.map((detail) => {
                                                        return (
                                                            <Box>
                                                                <ListItem disablePadding>
                                                                    <ListItemIcon>
                                                                        <DoubleArrow />
                                                                    </ListItemIcon>
                                                                    <ListItemText>{detail}</ListItemText>
                                                                </ListItem>
                                                                <Divider />
                                                            </Box>

                                                        )
                                                    })}
                                                </List>
                                            </Grid>

                                            <Grid item my={"auto"} xs={4} sm={2}>
                                                <Typography >Tech-Stack : </Typography>
                                            </Grid>
                                            <Grid item xs={8} sm={10} borderBottom={1}>
                                                {project.techstack.map((tech) => {
                                                    return (
                                                        <Chip label={tech} sx={{ m: 0.5 }}></Chip>
                                                    )
                                                })}
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </AccordionDetails>
                        </Accordion>


                        {/* <Accordion sx={{ mb: 1 }} >
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                id={project.id}
                            >
                                <Box>
                                    <Typography variant="h4" >{project.name}</Typography>
                                    <Typography variant="subtitle2">{project.type}</Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2}>
                                    <Grid item my={"auto"} xs={4} sm={2}>
                                        <Typography >Contributors : </Typography>
                                    </Grid>
                                    <Grid item xs={8} sm={10} borderBottom={1} >
                                        {project.contributors.map((person) => {
                                            return (
                                                <>
                                                    <ListItem disablePadding>
                                                        <ListItemIcon sx={{ mr: -2 }}>
                                                            <Group fontSize="small" />
                                                        </ListItemIcon>
                                                        <ListItemText>{person}</ListItemText>
                                                    </ListItem>
                                                </>
                                            )
                                        })}
                                    </Grid>

                                    <Grid item my={"auto"} xs={4} sm={2}>
                                        <Typography>Project Deatils:</Typography>
                                    </Grid>

                                    <Grid item xs={8} sm={10} borderBottom={1}>
                                        <List>
                                            {project.description.map((detail) => {
                                                return (
                                                    <Box>
                                                        <ListItem disablePadding>
                                                            <ListItemIcon>
                                                                <DoubleArrow />
                                                            </ListItemIcon>
                                                            <ListItemText>{detail}</ListItemText>
                                                        </ListItem>
                                                        <Divider />
                                                    </Box>

                                                )
                                            })}
                                        </List>
                                    </Grid>

                                    <Grid item my={"auto"} xs={4} sm={2}>
                                        <Typography >Tech-Stack : </Typography>
                                    </Grid>
                                    <Grid item xs={8} sm={10} borderBottom={1}>
                                        {project.techstack.map((tech) => {
                                            return (
                                                <Chip label={tech} sx={{ m: 0.5 }}></Chip>
                                            )
                                        })}
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion> */}
                    </>
                )
            })}
        </>
    )
}

const Work = () => {
    return (
        <Box py={2} my={2}>
            <Box>
                <Divider component="div" role="presentation" textAlign="left">
                    <Typography variant="h3" mb={2}>Experience</Typography>
                </Divider>
                <ExpCard />
            </Box>
            <Box>
                <Divider component="div" role="presentation" textAlign="left">
                    <Typography variant="h3" mb={2}>Projects</Typography>
                </Divider>
                <ProjectCard />
            </Box>
        </Box>
    )
}
export default Work;
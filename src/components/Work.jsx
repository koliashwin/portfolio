import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, CardMedia, Chip, Divider, Grid, ImageList, ImageListItem, Link, List, ListItem, ListItemIcon, ListItemText, ThemeProvider, Typography } from "@mui/material";
import Mydata from "../database/MyData.json";
import { Circle, DoubleArrow, ExpandMore, Group } from "@mui/icons-material";
import { MyOuterTheme } from "../assets/MyTheme";

const ExpCard = () => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    return (
        <>
            {Mydata.WorkExperience.map((work) => {
                return (
                    <>
                        <Accordion
                            sx={{ mb: 1, backgroundColor: "bisque" }}
                            expanded={expanded === `panel${work.id}`}
                            onChange={handleChange(`panel${work.id}`)}
                        >
                            <Box sx={styles.AccordionHeaderBg2}>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                    id={work.id}

                                >
                                    <Box>
                                        <Typography variant="h4"  fontFamily={"cursive"}>{work.position}</Typography>
                                        <Typography variant="h6" display={"inline-flex"} >
                                            {work.type} at
                                            <Typography variant="h5" ml={1}>{work.company}</Typography>
                                        </Typography>
                                    </Box>
                                </AccordionSummary>
                            </Box>
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
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    return (
        <>
            {Mydata.MyProjects.map(project => {
                return (
                    <>
                        <Accordion
                            expanded={expanded === `panel${project.id}`}
                            onChange={handleChange(`panel${project.id}`)}
                            sx={{ m: 1, backgroundColor: "wheat" }}
                        >
                            <Box sx={styles.AccordionHeaderBg1}>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                    id={`project-accordion-${project.id}`}
                                >
                                    <Box>
                                        <Typography variant="h4"  fontFamily={"cursive"}>{project.name}</Typography>
                                        <Typography variant="subtitle2">{project.type}</Typography>
                                    </Box>
                                </AccordionSummary>
                            </Box>
                            <AccordionDetails>
                                <Grid container spacing={2}>
                                    <Grid item sm={12} md={6}>
                                        <CardMedia
                                            component="img"
                                            image={project.image}
                                            alt={project.name}

                                        />
                                    </Grid>

                                    <Grid item md={6}>
                                        <Grid container spacing={1}>



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

                                            <Grid item my={"auto"} xs={4} sm={2}>
                                                <Typography >Team : </Typography>
                                            </Grid>
                                            <Grid item xs={8} sm={10} borderBottom={1}>
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

                                            <Grid item >
                                                <Box component="div" display={"flex"}>
                                                    <Box display={(project.sourcecode) ? "flex" : "none"}>
                                                        <Button variant="contained" href={project.sourcecode} sx={{ mx: 2 }}>Source</Button>
                                                    </Box>
                                                    <Box display={(project.liveDemo) ? "flex" : "none"}>
                                                        <Button variant="contained" href={project.liveDemo}
                                                            sx={{ mx: 2, display: `${project.liveDemo} ? "flex" : "none"` }}
                                                        >
                                                            Demo
                                                        </Button>
                                                    </Box>

                                                </Box>
                                            </Grid>
                                            <Divider />
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </>
                )
            })}
        </>
    )
}

const Work = () => {
    return (
        <ThemeProvider theme={MyOuterTheme}>
            <Box py={2} my={2}>
                <Box>
                    <Divider component="div" role="presentation" textAlign="left">
                        <Typography variant="h3" mb={2}  fontFamily={"cursive"} fontWeight={700}>Experience</Typography>
                    </Divider>
                    <Box display={"flow"} m={2}>
                        <ExpCard />
                    </Box>
                </Box>
                <Box>
                    <Divider component="div" role="presentation" textAlign="left">
                        <Typography variant="h3" mb={2}  fontFamily={"monospace"}>Projects</Typography>
                    </Divider>
                    <Box display={"flow"} m={2}>
                        <ProjectCard />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}
export default Work;

const styles = {
    AccordionHeaderBg1: {
        backgroundColor: "coral",
        borderStartEndRadius: "50%",
        borderEndStartRadius: "20%",
        borderEndEndRadius: "10%",
    },
    AccordionHeaderBg2: {
        backgroundColor: "burlywood",
        borderEndEndRadius: "50%",
        borderStartStartRadius: "20%",
        borderStartEndRadius: "10%",
    },
}
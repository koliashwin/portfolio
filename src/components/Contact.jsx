import { Box, Button, Container, Divider, Fab, FormControl, Grid, Input, TextField, ThemeProvider, Typography } from "@mui/material";
import React, { useState } from "react";
import { MyOuterTheme } from "../assets/MyTheme";
import { Add, DocumentScanner, Email, GitHub, LinkedIn, Phone, WhatsApp } from "@mui/icons-material";
import { motion } from "framer-motion"

const Contact = () => {
    const defaultValues = {
        name: "",
        sub: "",
        msg: "",
    };

    const [formValues, setFormValues] = useState(defaultValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    }

    return (
        <>
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
                        <Typography variant="h3" mb={2} fontFamily={"cursive"} fontWeight={700}>Get in touch</Typography>
                    </motion.h3>
                </Divider>
                <Grid container spacing={2} justifyContent={"center"}>

                    <motion.div
                        transition={{
                            duration: 1,
                            delay: 0.2
                        }}
                        whileInView={{
                            opacity: [0, 1], y: [100, 0]
                        }}
                    >
                        <Grid item md={4} sx={{ display: { xs: "none", sm: "none", md: "flex" } }} justifyContent={"center"}>
                            <Box sx={{ justifyContent: "center", m: "auto" }}>
                                <img
                                    src="data:image/jpeg;base64,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"
                                />
                            </Box>
                        </Grid>
                    </motion.div>

                    <motion.div
                        transition={{
                            duration: 1,
                            delay: 0.2
                        }}
                        whileInView={{
                            opacity: [0, 1], y: [-50, 0]
                        }}
                    >
                        <Grid item sm={12} md={6} justifyContent={"center"} textAlign={"center"}>
                            <Container display={"flex"} justifyContent={"center"}>
                                <Typography textAlign={"left"} mx={2}>
                                    Hey there, You can use following links to know about me more or to get in touch with me.
                                </Typography>
                            </Container>

                            <Box display={"flex"} justifyContent={"center"} my={1} sx={{ '& > :not(style)': { m: 1 } }}>
                                <Fab color="primary" aria-label="Email" size="small" href="mailto: ashwinkoli02@gmail.com">
                                    <Email />
                                </Fab>
                                <Fab color="primary" aria-label="WhatsApp" size="small" href="https://wa.me/9594694362">
                                    <WhatsApp />
                                </Fab>
                                <Fab color="primary" aria-label="Github" size="small" href="https://github.com/koliashwin">
                                    <GitHub />
                                </Fab>
                                <Fab color="primary" aria-label="LinkedIn" size="small" href="https://www.linkedin.com/in/ashwin-koli-84055a13a/">
                                    <LinkedIn />
                                </Fab>
                            </Box>
                        </Grid>
                    </motion.div>
                </Grid>

            </ThemeProvider>
        </>
    )
}
export default Contact;
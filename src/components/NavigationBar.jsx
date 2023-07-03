import React, { useState } from "react";
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemText, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { Menu, MenuBook } from "@mui/icons-material";
import { MyOuterTheme } from "../assets/MyTheme";

const drawerWidth = 240;
const navItems = ["Home", "Skills", "Work", "About", "Contact"]

const NavigationBar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" my={2}>
                My Portfolio
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton>
                            <ListItemText ><Link href={"#" + item}>{item}</Link></ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <ThemeProvider theme={MyOuterTheme}>
            <CssBaseline />
            <Box sx={{ display: 'flex' }}>
                <AppBar component='nav' elevation={10} color="primary">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            sx={{ mr: 2 , display:{ md: "none"}}}
                            onClick={handleDrawerToggle}
                        >
                            <Menu />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { sm: "block" } }}
                        >
                            My Portfolio
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item} color="inherit">
                                    <Link href={"#" + item} color="inherit" underline="none">{item}</Link>
                                    {/* {item} */}
                                </Button>
                            ))}

                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </ThemeProvider>
    )
}
export default NavigationBar;
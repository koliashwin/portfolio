import { Typography } from "@mui/material";

const Footer =() =>{
    return(
        <footer
            style={{
                textAlign: "center",
                height: "5vh",
                backgroundColor: "#574F4D",
                color: "Window"
            }}
        >
            <Typography pt={1}>
                &copy; {new Date().getFullYear()} |
                developed by Ashwin Koli
            </Typography>
        </footer>
    )
}
export default Footer;
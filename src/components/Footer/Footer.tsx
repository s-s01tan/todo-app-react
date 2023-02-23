import { Box, Container, Grid, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "auto",
        backgroundColor: "#fff",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          <Grid item xs={12} display="flex" justifyContent="center">
            <Typography
              color="black"
              variant="h5"
              className="custom-font"
              textAlign="center"
              paddingRight="4px"
            >
              s01tan
            </Typography>
            <Link
              to="mailto:soltanlisoltan.js@gmail.com"
              target="_blank"
              className="footer-link custom-font gmail-link"
            >
              <EmailIcon sx={{ marginLeft: "2px" }} />
            </Link>
            <Link
              to="https://github.com/s-s01tan"
              target="_blank"
              className="footer-link custom-font github-link"
            >
              <GitHubIcon sx={{ marginLeft: "2px" }} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/s-s01tan"
              target="_blank"
              className="footer-link custom-font linkedin-link"
            >
              <LinkedInIcon sx={{ marginLeft: "2px" }} />
            </Link>
            <Link
              to="https://api.whatsapp.com/send?phone=994554228512"
              target="_blank"
              className="footer-link custom-font whatsapp-link"
            >
              <WhatsAppIcon sx={{ marginLeft: "2px" }} />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

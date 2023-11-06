import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Container, Grid, Link, Typography, Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "grey",
          p: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="white" gutterBottom>
                Sobre mi
              </Typography>
              <Typography variant="body2" color="white">
                Juan Pablo Sarobe, Lic en administración, programador FrontEnd.
                LiquidStore es un proyecto para el curso de React en Coderhouse.
                Comisión 47225
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="white" gutterBottom>
                Contactame
              </Typography>
              <Typography variant="body2" color="white">
                Neuquén Capital, Argentina
              </Typography>
              <Typography variant="body2" color="white">
                Email: jp.sarobe@gmail.com
              </Typography>
              <Typography variant="body2" color="white">
                Tel: +5492996911111
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="white" gutterBottom>
                Seguime
              </Typography>
              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="white" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://your-website.com/">
                LiquidStore
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;

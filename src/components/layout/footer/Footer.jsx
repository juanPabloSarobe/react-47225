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
                About Us
              </Typography>
              <Typography variant="body2" color="white">
                We are XYZ company, dedicated to providing the best service to
                our customers.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="white" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="white">
                123 Main Street, Anytown, USA
              </Typography>
              <Typography variant="body2" color="white">
                Email: info@example.com
              </Typography>
              <Typography variant="body2" color="white">
                Phone: +1 234 567 8901
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="white" gutterBottom>
                Follow Us
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
                Your Website
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

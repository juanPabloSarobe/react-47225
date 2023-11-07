import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage = ({
  errorCode = 404,
  title = "UPSSS parece que hubo un error",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box variant="h1">{errorCode}</Box>
            <Typography variant="h6">{title}</Typography>
            <Link to={"/"}>
              <Button variant="contained">Volver</Button>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ErrorPage;

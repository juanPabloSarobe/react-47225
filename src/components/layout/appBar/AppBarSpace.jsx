import { Typography } from "@mui/material";

//Componente, para complementar el espacio que queda debajo de la Appbar por ser fixed

const AppBarSpace = () => {
  return <Typography sx={{ mt: { xs: 8, sm: 9 } }}> </Typography>;
};

export default AppBarSpace;

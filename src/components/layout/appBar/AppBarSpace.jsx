import { Box } from "@mui/material";

//Componente, para complementar el espacio que queda debajo de la Appbar por ser fixed

const AppBarSpace = () => {
  return <Box component="div" sx={{ mt: { xs: 8, sm: 9 } }}></Box>;
};

export default AppBarSpace;

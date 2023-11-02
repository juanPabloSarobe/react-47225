import { useFormik, yupToFormErrors } from "formik";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { ChevronLeft } from "@mui/icons-material";
import Cart from "../cart/Cart";
import BasicAccordion from "../../common/basicAccordion/BasicAccordion";

const CheckoutFormikContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      localidad: "",
      provincia: "",
      direccion: "",
      edad: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Ingresa un email valido")
        .required("Campo requerido")
        .trim(),
      nombre: Yup.string()
        .required("Campo requerido")
        .min(3, "ingresa un minimo de 3 caracteres")
        .max(30, "no debes superar los 30 caracteres")
        .trim(),
      apellido: Yup.string()
        .required("Campo requerido")
        .min(3, "ingresa un minimo de 3 caracteres")
        .max(30, "no debes superar los 30 caracteres")
        .trim(),
      edad: Yup.number("debes intruducir un numero")
        .min("18", "Debes ser mayor de edad para poder comprar")
        .max("99", "ups, parece que hay un error en la edad")
        .required("Campo requerido"),
      localidad: Yup.string()
        .required("Campo requerido")
        .min(5, "ingresa un minimo de 5 caracteres")
        .max(30, "no debes superar los 30 caracteres")
        .trim(),
      provincia: Yup.string()
        .required("Campo requerido")
        .min(5, "ingresa un minimo de 5 caracteres")
        .max(30, "no debes superar los 30 caracteres")
        .trim(),
      direccion: Yup.string()
        .required("Campo requerido")
        .min(5, "ingresa un minimo de 5 caracteres")
        .max(50, "no debes superar los 50 caracteres")
        .trim(),
    }),
  });
  return (
    <Paper
      elevation={12}
      sx={{
        m: "20px",
        p: 1,
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "90vw", md: "75vw" },
          borderRadius: "5px",
          backgroundColor: "#374151",
          py: 2,
          px: 1,
        }}
      >
        <Typography
          variant="h6"
          pb={1}
          pr={1}
          color={"#f9f9f8"}
          fontWeight={"Bold"}
        >
          Datos de envío y pago
        </Typography>
        <Typography
          variant="subtitle1"
          pb={1}
          pr={1}
          color={"#f9f9f8"}
          fontWeight={"Bold"}
        >
          Complete sus Datos
        </Typography>
        <Stack
          component={"form"}
          onSubmit={handleSubmit}
          spacing={1}
          useFlexGap
          flexWrap="wrap"
          direction="row"
          sx={{ backgroundColor: "#374151" }}
        >
          <TextField
            name="email"
            id="email"
            label="email"
            variant="outlined"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
            sx={{
              width: { xs: "100%", sm: "69%" },
              backgroundColor: "#f9f9f8",
              borderRadius: "5px",
            }}
          />
          <TextField
            name="edad"
            id="edad"
            label="Edad"
            variant="outlined"
            type="number"
            onChange={handleChange}
            error={errors.edad ? true : false}
            helperText={errors.edad}
            sx={{
              width: { xs: "100%", sm: "29%" },
              backgroundColor: "#f9f9f8",
              borderRadius: "5px",
            }}
          />
          <TextField
            name="nombre"
            id="nombre"
            label="Nombre"
            variant="outlined"
            onChange={handleChange}
            error={errors.nombre ? true : false}
            helperText={errors.nombre}
            sx={{
              width: { xs: "100%", sm: "49%" },
              backgroundColor: "#f9f9f8",
              borderRadius: "5px",
            }}
          />
          <TextField
            name="apellido"
            id="apellido"
            label="Apellido"
            variant="outlined"
            onChange={handleChange}
            error={errors.apellido ? true : false}
            helperText={errors.apellido}
            sx={{
              width: { xs: "100%", sm: "49%" },
              backgroundColor: "#f9f9f8",
              borderRadius: "5px",
            }}
          />
          <TextField
            name="provincia"
            id="provincia"
            label="Provincia"
            variant="outlined"
            onChange={handleChange}
            error={errors.provincia ? true : false}
            helperText={errors.provincia}
            sx={{
              width: { xs: "100%", sm: "49%" },
              backgroundColor: "#f9f9f8",
              borderRadius: "5px",
            }}
          />
          <TextField
            name="localidad"
            id="localidad"
            label="Localidad"
            variant="outlined"
            onChange={handleChange}
            error={errors.localidad ? true : false}
            helperText={errors.localidad}
            sx={{
              width: { xs: "100%", sm: "49%" },
              backgroundColor: "#f9f9f8",
              borderRadius: "5px",
            }}
          />
          <TextField
            name="direccion"
            id="direccion"
            label="Direccion"
            variant="outlined"
            onChange={handleChange}
            error={errors.direccion ? true : false}
            helperText={errors.direccion}
            sx={{
              width: { xs: "100%", sm: "100%" },
              backgroundColor: "#f9f9f8",
              borderRadius: "5px",
            }}
          />
          <Stack direction="row" spacing={2}>
            <BasicAccordion />
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: { xs: "90vw", md: "45vw" },
          /* backgroundColor: "grey", */
        }}
      >
        <Cart />
      </Box>
    </Paper>
  );
};

export default CheckoutFormikContainer;

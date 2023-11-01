import { useFormik, yupToFormErrors } from "formik";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import * as Yup from "yup";
import { ChevronLeft } from "@mui/icons-material";
import Cart from "../cart/Cart";

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
      elevation={4}
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: { xs: "90vw", md: "45vw" },
          /* backgroundColor: "brown", */
        }}
      >
        <Typography>Datos de envío y pago</Typography>
        <Typography>Complete sus Datos</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="email"
            id="email"
            label="email"
            variant="outlined"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <TextField
            name="nombre"
            id="nombre"
            label="Nombre"
            variant="outlined"
            onChange={handleChange}
            error={errors.nombre ? true : false}
            helperText={errors.nombre}
          />
          <TextField
            name="apellido"
            id="apellido"
            label="Apellido"
            variant="outlined"
            onChange={handleChange}
            error={errors.apellido ? true : false}
            helperText={errors.apellido}
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
          />
          <TextField
            name="provincia"
            id="provincia"
            label="Provincia"
            variant="outlined"
            onChange={handleChange}
            error={errors.provincia ? true : false}
            helperText={errors.provincia}
          />
          <TextField
            name="localidad"
            id="localidad"
            label="Localidad"
            variant="outlined"
            onChange={handleChange}
            error={errors.localidad ? true : false}
            helperText={errors.localidad}
          />
          <TextField
            name="direccion"
            id="direccion"
            label="Direccion"
            variant="outlined"
            onChange={handleChange}
            error={errors.direccion ? true : false}
            helperText={errors.direccion}
          />
          <Button variant="contained" type="submit">
            Pagar
          </Button>
          <Button variant="contained" type="button">
            seguir comprando
          </Button>
        </form>
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

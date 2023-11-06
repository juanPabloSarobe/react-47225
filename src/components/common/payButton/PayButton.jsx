import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../../context/CartContext";

const PayButton = () => {
  const { cartBuyed } = useContext(CartContext);
  const goTo = useNavigate();
  const compraRealizada = () => {
    Swal.fire({
      title: "Gracias por su compra",
      text: "En breve seras redirigido a la pasarela de pago correspondiente.",
    }).then(() => {
      cartBuyed();
      goTo("/");
    });
  };

  return (
    <Box width={9 / 10} sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        sx={{ width: "100%" }}
        variant="contained"
        type="submit"
        color="success"
        onClick={compraRealizada}
      >
        Pagar
      </Button>
    </Box>
  );
};

export default PayButton;

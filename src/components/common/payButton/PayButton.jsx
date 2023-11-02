import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PayButton = () => {
  const goTo = useNavigate();
  const compraRealizada = () => {
    Swal.fire({
      title: "Gracias por su compra",
      text: "En breve seras redirigido a la pasarela de pago correspondiente.",
    }).then(() => goTo("/"));
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

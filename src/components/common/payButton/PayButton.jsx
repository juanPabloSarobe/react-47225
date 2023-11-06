import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../../context/CartContext";

const PayButton = () => {
  return (
    <Box width={9 / 10} sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        sx={{ width: "100%" }}
        variant="contained"
        type="submit"
        color="success"
      >
        Pagar
      </Button>
    </Box>
  );
};

export default PayButton;

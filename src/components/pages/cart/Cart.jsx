import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Box sx={{ minHeight: "30vh", p: 20 }}>
      {" "}
      Este es el carrito
      <Link to={"/checkout"}>
        <Button variant="contained">Finalizar compra</Button>
      </Link>
    </Box>
  );
};

export default Cart;

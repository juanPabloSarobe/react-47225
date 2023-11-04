import { Box, Button, Stack } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <Box sx={{ minHeight: "30vh", p: 20 }}>
      {" "}
      Este es el carrito
      {cart.map((product) => {
        return (
          <Stack key={product.id} flexDirection={"row"}>
            <h2>{product.title} </h2>
            <h3>{product.cantidad} </h3>
          </Stack>
        );
      })}
      <Link to={"/checkout"}>
        <Button variant="contained">Finalizar compra</Button>
      </Link>
      <Button variant="contained" onClick={clearCart}>
        Limpiar carrito
      </Button>
    </Box>
  );
};

export default Cart;

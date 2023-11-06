import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartTotal = () => {
  const { totalPrice } = useContext(CartContext);
  const total = totalPrice();
  return (
    <>
      <Stack
        flexDirection={"row"}
        height={"60px"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        sx={{
          color: "white",
          backgroundColor: "darkgray",
          borderRadius: "12px",
          p: 2,
          m: 1,
          width: { xs: "100%", md: "100%" },
          maxWidth: { xs: "100%", md: "500px" },
        }}
      >
        <Typography variant="h4">Total</Typography>
        <Typography variant="h4">$ {total}</Typography>
      </Stack>
    </>
  );
};

export default CartTotal;

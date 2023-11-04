import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <div>
      <ShoppingCartOutlinedIcon
        alt="Cart"
        src=""
        fontSize="inherit"
      ></ShoppingCartOutlinedIcon>
      <Badge badgeContent={0} color="warning"></Badge>
    </div>
  );
};

export default CartWidget;

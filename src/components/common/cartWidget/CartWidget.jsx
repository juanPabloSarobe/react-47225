import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartWidget = ({ items }) => {
  return (
    <div>
      {/* <span>{items}</span> //Primera version de prueba */}
      <ShoppingCartOutlinedIcon color="info"></ShoppingCartOutlinedIcon>
      <Badge badgeContent={items} color="warning" showZero="true"></Badge>
    </div>
  );
};

export default CartWidget;

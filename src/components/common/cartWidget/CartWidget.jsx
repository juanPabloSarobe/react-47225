import { GrCart } from "react-icons/gr";

const CartWidget = ({ items }) => {
  return (
    <div>
      <span>{items}</span>
      <GrCart />
    </div>
  );
};

export default CartWidget;

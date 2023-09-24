import logo from "../../../assets/img/liquidStoreLogo.png";
import Menu from "../../common/menu/menu";
import { GrSearch, GrUser } from "react-icons/gr";
import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  const navbarStyle = {
    margin: "10px",
    display: "flex",
    "justify-content": "space-around",
  };

  return (
    <div>
      <div style={navbarStyle}>
        <img src={logo} style={{ width: "150px" }} />
        <span style={{ flexGrow: 0.8 }}></span>
        <GrSearch />
        <GrUser />
        <CartWidget />
      </div>
      <Menu />
    </div>
  );
};

export default Navbar;

import logo from "../../../assets/img/liquidStoreLogo.png";
import Menu from "../../common/menu/menu";
import { GrSearch, GrUser } from "react-icons/gr";
import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = ({ items }) => {
  //Ejemplo de estilos en linea
  const navbarStyle = {
    margin: "10px",
    display: "flex",
    "justify-content": "space-around",
  };

  return (
    <div>
      <div style={navbarStyle}>
        <img src={logo} style={{ width: "150px" }} />{" "}
        {/* Ejemplo de estilo en linea */}
        <span style={{ flexGrow: 0.8 }}></span>
        <GrSearch />
        <GrUser />
        <CartWidget items={items} />
      </div>
      <Menu />
    </div>
  );
};

export default Navbar;

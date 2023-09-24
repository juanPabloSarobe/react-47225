import logo from "../../../assets/img/liquidStoreLogo.png";
import Menu from "./menu/menu";

const Navbar = () => {
  return (
    <div>
      <img src={logo} />
      <Menu />
    </div>
  );
};

export default Navbar;

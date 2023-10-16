import { Outlet } from "react-router-dom";
import AppBarContainer from "./appBar/AppBarContainer";
import AppBarSpace from "./appBar/AppBarSpace";
import Footer from "./footer/Footer";

const LayoutOnlyAppbar = () => {
  return (
    <>
      <AppBarContainer />
      <AppBarSpace />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutOnlyAppbar;

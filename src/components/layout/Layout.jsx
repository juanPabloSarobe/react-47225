import { Outlet } from "react-router-dom";
import FilterSectionContainer from "../common/filterSection/FilterSectionContainer";
import AppBarContainer from "./appBar/AppBarContainer";
import AppBarSpace from "./appBar/AppBarSpace";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <>
      <AppBarContainer />
      <AppBarSpace />
      <FilterSectionContainer />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

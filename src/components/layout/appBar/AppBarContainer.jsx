import { useState } from "react";
import AppBarReturn from "./AppBarReturn";

/* const pages = ["Products", "Pricing", "Blog"]; */
const pages = [];
const settings = [
  { title: "Error page", path: "/Error404" },
  { title: "Add Items to DB", path: "/AddItemsToDB" },
  { title: "Inicio", path: "/" },
];

const AppBarContainer = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBarReturn
      handleOpenNavMenu={handleOpenNavMenu}
      handleOpenUserMenu={handleOpenUserMenu}
      handleCloseNavMenu={handleCloseNavMenu}
      handleCloseUserMenu={handleCloseUserMenu}
      anchorElNav={anchorElNav}
      anchorElUser={anchorElUser}
      pages={pages}
      settings={settings}
    />
  );
};

export default AppBarContainer;

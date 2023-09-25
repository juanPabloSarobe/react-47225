import { Box, Button } from "@mui/material";
import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  const [greetings, setGreetings] = useState("Bienvenidos a LiquidStore");

  const changeGreetings = () => {
    setGreetings("gracias por elegirnos");
  };

  const [items, setItems] = useState(0);
  const addItems = () => {
    setItems(items + 1);
  };

  return (
    <>
      <Navbar items={items} />
      <Home />
      <ItemListContainer greetings={greetings} color={"red"} />
      <Box sx={{ display: "flex", m: 2, gap: 2 }}>
        <Button variant="outlined" onClick={changeGreetings}>
          Ingresar
        </Button>
        <Button variant="outlined" onClick={addItems}>
          Agregar Producto
        </Button>
      </Box>
    </>
  );
}

export default App;

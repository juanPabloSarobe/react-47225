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
      <button onClick={changeGreetings}>Ingresar</button>
      <button onClick={addItems}>Agregar producto</button>
    </>
  );
}

export default App;

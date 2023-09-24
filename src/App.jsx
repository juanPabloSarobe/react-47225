import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  const [greetings, setGreetings] = useState("Bienvenidos a LiquidStore");
  return (
    <>
      <Navbar />
      <Home />
      <ItemListContainer greetings={greetings} color={"red"} />
    </>
  );
}

export default App;

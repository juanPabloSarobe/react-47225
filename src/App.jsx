import AddItems from "./components/common/addItems/AddItems";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AddItems />
    </>
  );
}

export default App;

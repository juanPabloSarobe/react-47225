import AddItems from "./components/common/addItems/AddItems";
import AppBarContainer from "./components/layout/appBar/AppBarContainer";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <AppBarContainer />

      {/*       <AddItems /> */}
      <ItemListContainer />
    </>
  );
}

export default App;

import AddItemsContainer from "./components/common/addItems/AddItemsContainer";
import AppBarContainer from "./components/layout/appBar/AppBarContainer";
import AppBarSpace from "./components/layout/appBar/AppBarSpace";
import AxiosTest from "./components/pages/axiosTest/AxiosTest";
import Home from "./components/pages/home/Home";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <AppBarContainer />
      <AppBarSpace />

      <ItemDetailContainer />

      <ItemListContainer />
      {/* <AxiosTest /> */}
    </>
  );
}

export default App;

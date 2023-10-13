import AddItemsContainer from "./components/common/addItems/AddItemsContainer";
import FilterSectionContainer from "./components/common/filterSection/FilterSectionContainer";
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
      <FilterSectionContainer />
      <ItemDetailContainer />

      <ItemListContainer />
      {/* <AxiosTest /> */}
    </>
  );
}

export default App;

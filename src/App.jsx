import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBarContainer from "./components/layout/appBar/AppBarContainer";
import Cart from "./components/pages/cart/Cart";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppBarContainer />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="itemDetail/:id" element={<ItemDetailContainer />} />
        </Route>
        <Route path="*" element={<div>error 404</div>} />
      </Routes>
    </BrowserRouter>

    /*  <>
      <AppBarContainer />
      <AppBarSpace />
      <FilterSectionContainer />
      <ItemDetailContainer />
      
      <ItemListContainer />
      </> */
  );
}

export default App;

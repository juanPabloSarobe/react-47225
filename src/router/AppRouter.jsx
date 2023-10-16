import { Route, Routes } from "react-router-dom";
import AppBarContainer from "../components/layout/appBar/AppBarContainer";
import Layout from "../components/layout/Layout";
import LayoutOnlyAppbar from "../components/layout/LayoutOnlyAppbar";

import ErrorPage from "../components/pages/errorPage/ErrorPage";
import TermsContent from "../components/pages/terms/TermsContent";
import { routes } from "./menuRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="itemDetail/:id" element={<ItemDetailContainer />} /> */}

        {routes.map(({ id, path, Element }) => {
          return <Route key={id} path={path} element={<Element />} />;
        })}
      </Route>

      <Route element={<LayoutOnlyAppbar />}>
        <Route path="/politics" element={<TermsContent />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;

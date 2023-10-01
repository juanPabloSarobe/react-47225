import { useEffect, useState } from "react";
import { productsMockup } from "../../../../productsMockup";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(productsMockup);
    });

    tarea.then((res) => {
      setItems(res);
    });
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;

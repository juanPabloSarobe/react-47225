import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsMockup } from "../../../../productsMockup";
import ItemList from "./ItemList";
import ItemListSkeleton from "./ItemListSkeleton";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productosFiltrados = productsMockup.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : productsMockup);
      }, 1000);
    });

    tarea.then((res) => {
      setItems(res);
    });
  }, [categoryName]);

  if (items.length === 0) {
    return <ItemListSkeleton />;
  } else {
    return <ItemList items={items} categoryName={categoryName} />;
  }
};

export default ItemListContainer;

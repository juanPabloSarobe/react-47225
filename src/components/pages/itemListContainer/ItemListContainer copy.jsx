import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsMockup } from "../../../../productsMockup";
import ItemList from "./ItemList";
import ItemListSkeleton from "./ItemListSkeleton";

/* Es una copia para que no se pierda el codigo creado hasta el momento */

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
      }, 500);
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

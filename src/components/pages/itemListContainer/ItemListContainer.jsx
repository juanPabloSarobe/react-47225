import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import ItemListSkeleton from "./ItemListSkeleton";
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { productsMockup } from "../../../../productsMockup";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  //se deja la funcion para tenerla de referencia
  const rellenarDB = () => {
    const prodCollection = collection(db, "productsMockup");

    productsMockup.forEach((elemento) => {
      addDoc(prodCollection, elemento);
    });
  };

  useEffect(() => {
    let productsColection = collection(db, "productsMockup");
    let consulta;
    if (!categoryName) {
      consulta = productsColection;
    } else {
      consulta = query(
        productsColection,
        where("category", "==", categoryName)
      );
    }
    getDocs(consulta).then((resp) => {
      let newArray = resp.docs.map((prod) => {
        return { id: prod.id, ...prod.data() };
      });
      setItems(newArray);
    });
  }, [categoryName]);

  if (items.length === 0) {
    return <ItemListSkeleton />;
  } else {
    return (
      <>
        <ItemList items={items} categoryName={categoryName} />{" "}
      </>
    );
  }
};

export default ItemListContainer;

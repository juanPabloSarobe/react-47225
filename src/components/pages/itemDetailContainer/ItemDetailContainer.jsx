// import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { productsMockup } from "../../../../productsMockup";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    const producto = productsMockup.find((prod) => prod.id === +id);

    const getProduct = new Promise((resolve, reject) => {
      resolve(producto);
    });
    getProduct.then((resp) => {
      setItem(resp);
    });
  }, [id]);

  const onAdd = (cantidad) => {
    const addCart = { ...item, cantidad };
    addToCart(addCart);
  };

  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;

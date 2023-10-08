import axios from "axios";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [id, setid] = useState(2);

  useEffect(() => {
    const tarea = axios.get(`http://localhost:5000/products/${id}`);
    tarea.then((resp) => {
      setItem(resp.data);
    });
  }, []);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;

import axios from "axios";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = (newId) => {
  const [item, setItem] = useState([]);
  const [id, setid] = useState(1);

  const changeId = () => {
    if (!newId) {
      const { item } = newId;
      setid(item);
    }
  };

  useEffect(() => {
    changeId();
    const tarea = axios.get(`http://localhost:5000/products/${id}`);
    tarea.then((resp) => {
      setItem(resp.data);
    });
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;

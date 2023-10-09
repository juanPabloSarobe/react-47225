import { useState } from "react";
import AddItem from "./AddItem";

const AddItemsContainer = () => {
  const [stock, setStock] = useState(4);
  const [items, setItems] = useState(1);
  const addItems = () => {
    if (items < stock) {
      setItems(items + 1);
    }
  };
  const removeItems = () => {
    if (items > 1) {
      setItems(items - 1);
    }
  };

  console.log(items);
  return (
    <>
      <AddItem
        addItems={() => addItems}
        removeItems={() => removeItems}
        items={items}
      />
    </>
  );
};

export default AddItemsContainer;

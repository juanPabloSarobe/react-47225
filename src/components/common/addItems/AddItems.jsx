import { Box, Button } from "@mui/material";
import { useState } from "react";

const AddItems = () => {
  const [items, setItems] = useState(0);
  const addItems = () => {
    setItems(items + 1);
  };

  return (
    <Box sx={{ display: "flex", m: 2, gap: 2 }}>
      <Button variant="outlined" onClick={addItems}>
        Agregar Producto
      </Button>
    </Box>
  );
};

export default AddItems;

import { Typography } from "@mui/material";

const ItemListContainer = ({ greetings, ...color }) => {
  return (
    <div style={color}>
      <Typography variant="h4">{greetings}</Typography>
    </div>
  );
};

export default ItemListContainer;

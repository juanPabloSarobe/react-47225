import { Box, Button, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const AddItem = ({ addItems, removeItems, items }) => {
  return (
    <Box
      sx={{
        display: "flex",
        m: 2,
        gap: 2,
        border: 0.5,
        borderRadius: 5,
        borderColor: "grey.400",
      }}
    >
      <IconButton aria-label="minus" onClick={removeItems()}>
        <RemoveIcon fontSize="inherit" />
      </IconButton>

      <Typography component="div" variant="h4">
        {items}
      </Typography>
      <IconButton aria-label="minus" onClick={addItems()}>
        <AddIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
};

export default AddItem;

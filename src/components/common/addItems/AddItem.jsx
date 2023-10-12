import { Box, Button, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";

const AddItem = ({ addItems, removeItems, contador, onAdd }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box
        id="box1"
        sx={{ display: "flex", alignItems: "center", width: "100%" }}
      >
        <Typography component="div" variant="h5">
          Cantidad
        </Typography>
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
            {contador}
          </Typography>
          <IconButton aria-label="minus" onClick={addItems()}>
            <AddIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => {
            onAdd(contador);
          }}
        >
          Agregar al carrito
        </Button>
      </Box>
    </Box>
  );
};

export default AddItem;

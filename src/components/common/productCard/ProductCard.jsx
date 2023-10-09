import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Modal,
} from "@mui/material";
import ModalItem from "../../pages/itemDetailContainer/ModalItem";
import * as React from "react";

const ProductCard = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card
        sx={{
          width: 345,
          transition: "transform 0.25s ease-in-out",
          "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={item.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              minHeight: "40.03px",
              "&:hover": {
                color: "red",
                backgroundColor: "white",
                cursor: "text",
              },
            }}
          >
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined" onClick={handleOpen}>
            Mas detalles
          </Button>
          <ModalItem open={open} handleClose={() => handleClose} item={item} />
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;

import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const sinStock = item.stock <= 0 && { pointerEvents: "none" };
  const conStock = item.stock > 0 && {
    "&:hover": {
      color: "red",
      backgroundColor: "white",
      cursor: "text",
    },
  };
  return (
    <>
      <Card
        sx={{
          width: 345,
          position: "relative",
          transition: "transform 0.25s ease-in-out",
          "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        }}
      >
        {item.stock <= 0 && (
          <Box
            sx={{
              position: "absolute",
              top: "0px",
              left: "0px",
              height: "100%",
              width: "100%",
              backgroundColor: "rgb(225 225 225 / 0.5)",
              color: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pointerEvents: "none",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                backgroundColor: "gb(225 225 225 / 1)",
                transform: "rotate(-45deg)",
                fontWeight: "Bold",
              }}
            >
              Sin Stock
            </Typography>
          </Box>
        )}
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={item.img}
        />

        <CardContent sx={{ position: "relative" }}>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              minHeight: "40.03px",
              ...conStock,
            }}
          >
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/itemDetail/${item.id}`} style={{ ...sinStock }}>
            <Button size="small" variant="outlined">
              Mas detalles
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;

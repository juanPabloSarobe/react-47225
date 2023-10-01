import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const ProductCard = ({ item }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
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
          <Button size="small" variant="outlined">
            Mas detalles
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;

import { Typography, Stack, Container } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h2" mt={10} mb={2} align="center">
          Nuestros productos
        </Typography>
        <Stack
          direction={{ xs: "row" }}
          flexWrap="wrap"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent={{ xs: "center" }}
          gap={2}
        >
          {items.map((item) => {
            return <ProductCard item={item} key={item.id} />;
          })}
        </Stack>
      </Container>
    </>
  );
};

export default ItemList;

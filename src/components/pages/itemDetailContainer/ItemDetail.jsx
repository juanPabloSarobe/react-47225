import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import AddItemsContainer from "../../common/addItems/AddItemsContainer";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ItemDetailSkeleton from "./ItemDetailSkeleton";

const ItemDetail = ({ item, onAdd, estado }) => {
  return (
    <>
      {estado.estado == "inicial" ? (
        <ItemDetailSkeleton />
      ) : (
        <Container
          id="test"
          sx={{
            my: { xs: 2, md: 4 },

            minWidth: "200px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              borderRadius: 8,
              pt: 2,
              width: "100%",
              maxWidth: "70vw",
              maxHeight: { xs: "50%", md: "40vh" },
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                display: "flex",
                objectFit: { xs: "contain", md: "cover" },
                width: { xs: 2 / 3, md: 1 / 2 },
                maxHeight: { xs: "40%", md: "100%" },
              }}
              image={item.img}
              alt={item.title}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: 1, md: "70%" },
              }}
            >
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography component="div" variant="h5">
                  {estado.estado == "noExiste"
                    ? "Item no encontrado"
                    : item.title}
                </Typography>
                <Typography variant="h7" color="text.secondary" component="div">
                  {estado.estado == "noExiste"
                    ? "Por favor selecciona un item valido"
                    : item.description}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.primary"
                  component="div"
                  mt={2}
                >
                  {estado.estado == "noExiste"
                    ? "Disculpe las molestias"
                    : `Precio unitario: $${item.price}`}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    m: 1,
                    width: "100%",
                  }}
                >
                  <Box>
                    {estado.estado == "existe" ? (
                      <AddItemsContainer item={item} onAdd={onAdd} />
                    ) : (
                      <Link to={"/"}>
                        <Button variant="contained"> Volver</Button>
                      </Link>
                    )}
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Container>
      )}
    </>
  );
};

export default ItemDetail;

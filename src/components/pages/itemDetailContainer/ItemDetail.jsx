import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import AddItemsContainer from "../../common/addItems/AddItemsContainer";
import { Link } from "react-router-dom";
import { Button, Skeleton, Stack } from "@mui/material";

const ItemDetail = ({ item, onAdd, estado }) => {
  let existe;
  if (estado.estado == "existe") {
    existe = true;
  } else if (estado.estado == "noExiste") {
    existe = false;
  } else {
    existe = true;
  }

  return (
    <>
      {estado.estado == "inicial" ? (
        <Stack
          spacing={1}
          width={1 / 1}
          gap={4}
          p={4}
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          <Box spacing={1} width={345}>
            <Skeleton
              variant="rounded"
              animation="wave"
              width={345}
              height={140}
            />
            <Skeleton
              variant="text"
              animation="wave"
              sx={{ fontSize: "2rem" }}
            />
            <Skeleton
              variant="text"
              animation="wave"
              sx={{ fontSize: "1rem" }}
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={140}
              height={60}
            />
          </Box>
        </Stack>
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
                  {estado.estado == "noExiste" && "Item no encontrado"}
                </Typography>
                <Typography variant="h7" color="text.secondary" component="div">
                  {estado.estado == "noExiste" &&
                    "Por favor selecciona un item valido"}
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

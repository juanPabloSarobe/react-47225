import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import AddItemsContainer from "../../common/addItems/AddItemsContainer";

const ItemDetail = ({ item, onAdd }) => {
  return (
    <Container
      id="test"
      maxWidth="50vw"
      //width="50vw"
      sx={{
        mt: { xs: 10, md: 20 },
        whidth: "70%",
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
          whidth: "100%",
          maxWidth: "70vw",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            display: "flex",

            width: { xs: 2 / 3, md: 1 / 2 },
            maxHeight: { xs: 280, md: 525 },
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
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h3">
              {item.title}
            </Typography>
            <Typography variant="h5" color="text.secondary" component="div">
              {item.description}
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
                <AddItemsContainer item={item} onAdd={onAdd} />
              </Box>
            </Box>
          </CardContent>
          {/* // Aca va el boton */}
        </Box>
      </Card>
    </Container>
  );
};

export default ItemDetail;

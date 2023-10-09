import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import { Container, maxHeight } from "@mui/system";
import { Button } from "@mui/material";
import AddItemsContainer from "../../common/addItems/AddItemsContainer";

const ItemDetail = ({ item }) => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: { xs: 10, md: 20 } }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: 8,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: { xs: 1, md: 1 / 2 },
              maxHeight: { xs: 280, md: 525 },
            }}
            image={item.img}
            alt={item.title}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: 1, md: 1 / 2 },
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
                  justifyContent: "space-between",
                  alignItems: "center",
                  m: 5,
                }}
              >
                <Typography component="div" variant="h4">
                  Cantidad
                </Typography>
                <Box>
                  <AddItemsContainer />
                </Box>
              </Box>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Button variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Box>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default ItemDetail;

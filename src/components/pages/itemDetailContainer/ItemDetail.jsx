import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Container, maxHeight } from "@mui/system";

const ItemDetail = ({ item }) => {
  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 10 }}>
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
              maxHeight: { xs: 420, md: 525 },
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
                sx={{ display: "flex", justifyContent: "space-between", m: 5 }}
              >
                <Typography component="div" variant="h4">
                  Cantidad
                </Typography>
                <Typography component="div" variant="h4">
                  - 5 +
                </Typography>
              </Box>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="previous"></IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next"></IconButton>
            </Box>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default ItemDetail;

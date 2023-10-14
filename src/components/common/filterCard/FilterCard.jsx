import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const FilterCard = ({ cat }) => {
  return (
    <Link
      to={cat.id === "Todos" ? `/` : `/category/${cat.category}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Box
        key={cat.id}
        sx={{
          height: "150px",
          width: "150px",
          minWidth: "150px",
          backgroundColor: "white",
          backgroundImage: `url(${cat.img})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: 100,
          margin: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            backgroundColor: "lightgrey",
            width: "120px",
            textAlign: "center",
            fontSize: "1.2rem",
            borderRadius: 2,
            overflow: "hidden",
            paddingLeft: 1,
          }}
        >
          {cat.category}
        </Box>
      </Box>
    </Link>
  );
};

export default FilterCard;

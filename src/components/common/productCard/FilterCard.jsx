import { Box, Button } from "@mui/material";

const FilterCard = ({ cat }) => {
  return (
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
      onClick={() => alert(`${cat.category}`)}
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
  );
};

export default FilterCard;

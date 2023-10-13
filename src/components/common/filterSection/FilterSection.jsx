import { Box } from "@mui/material";
import { useEffect } from "react";
import FilterCard from "../productCard/FilterCard";

const FilterSection = ({ catFinal }) => {
  return (
    <Box
      sx={{
        height: "200px",
        backgroundColor: "grey",
        display: "flex",
        direction: "row",
        alignItems: "center",
        overflow: "scroll",
      }}
    >
      {catFinal.map((cat) => {
        return <FilterCard cat={cat} key={cat.id} />;
      })}
    </Box>
  );
};

export default FilterSection;

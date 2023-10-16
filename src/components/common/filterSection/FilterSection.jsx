import { Box } from "@mui/material";

import FilterCard from "../filterCard/FilterCard";

const FilterSection = ({ catFinal }) => {
  return (
    <Box
      sx={{
        height: { xs: "12vh", md: "22vh" },
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

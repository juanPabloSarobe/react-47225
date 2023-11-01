import { useEffect, useState } from "react";
import { productsMockup } from "../../../../productsMockup";
import FilterSection from "./FilterSection";

const FilterSectionContainer = () => {
  const [catFinal, setCatFinal] = useState([]);

  const [categorias, setCategorias] = useState([
    {
      id: "Todos",
      category: "Todos",
      img: "https://res.cloudinary.com/dg8ndxl2y/image/upload/v1697320248/liquidStoreLogo_vrdfph.png",
    },
  ]);
  useEffect(() => {
    //console.log(categorias);
    productsMockup.map((elem) => {
      if (!categorias.some((cat) => cat.category === elem.category)) {
        const nuevaCat = {
          id: elem.category,
          category: elem.category,
          img: elem.img,
        };

        return setCategorias([...categorias, nuevaCat]);
      }
    });

    const tarea = new Promise((resolve, reject) => {
      resolve(categorias);
    });

    tarea.then((res) => {
      setCatFinal(res);
    });
  }, [categorias]);

  return <FilterSection catFinal={catFinal} />;
};

export default FilterSectionContainer;

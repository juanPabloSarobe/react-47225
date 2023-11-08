import { useEffect, useState } from "react";

import FilterSection from "./FilterSection";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const FilterSectionContainer = () => {
  const [catFinal, setCatFinal] = useState([]);
  const [products, setProducts] = useState([]);

  const [categorias, setCategorias] = useState([
    {
      id: "Todos",
      category: "Todos",
      img: "https://res.cloudinary.com/dg8ndxl2y/image/upload/v1697320248/liquidStoreLogo_vrdfph.png",
    },
  ]);

  useEffect(() => {
    let productsColection = collection(db, "productsMockup");
    getDocs(productsColection).then((res) => {
      let newArray = res.docs.map((prod) => {
        return { id: prod.id, ...prod.data() };
      });

      setProducts(newArray);
    });
  }, []);

  useEffect(() => {
    products.forEach((elem) => {
      if (!categorias.some((cat) => cat.category === elem.category)) {
        const nuevaCat = {
          id: elem.category,
          category: elem.category,
          img: elem.img,
        };

        setCategorias([...categorias, nuevaCat]);
      }
    });

    const tarea = new Promise((resolve, reject) => {
      resolve(categorias);
    });

    tarea.then((res) => {
      setCatFinal(res);
    });
  }, [products, categorias]);

  return <FilterSection catFinal={catFinal} />;
};

export default FilterSectionContainer;

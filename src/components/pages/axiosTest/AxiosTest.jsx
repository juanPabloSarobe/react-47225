import axios from "axios";
import { useState, useEffect } from "react";

// NO SE UTILIZA, PERO SE DEJA COMO REFERENCIA

const AxiosTest = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const peticion = axios.get("https://jsonplaceholder.typicode.com/posts");
    peticion.then((resp) => {
      setDatos(resp.data);
    });
  }, []);

  // ----------------------------------------

  /* let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://fullcontroldedicado.ddns.net/servicio/equipos.php/litev2",
    headers: {
      "content-Type": "application/json",
      Accept: "/",
      "Cache-Control": "no-cache",
      Cookie:
        "rol=usuarioNormal; sesion=bcb0272a5e7e87c9a395076a729835c6; usuario=jp.sarobe%40gmail.com",
    },
    credentials: "same-origin",
  };

  axios
    .request(config)
    .then((response) => {
      c onsole.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      c onsole.log(error);
    }); */

  return <div>datos</div>;
};
export default AxiosTest;

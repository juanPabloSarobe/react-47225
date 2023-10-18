import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AgeConsult = () => {
  const goTo = useNavigate();

  const [age, setAge] = useState(false);

  useEffect(() => {
    localStorage.setItem("mayorEdad", age);
  }, [age]);

  if (localStorage.getItem("mayorEdad") === null) {
    localStorage.setItem("mayorEdad", age);
  }
  if (!age) {
    setTimeout(() => {
      Swal.fire({
        title: "¿Sos mayor de edad?",
        text: "Al confirmar ser mayor de edad manifiestás tu conformidad con los términos de confidencialidad y el uso de cookies de este sitio web.",
        imageUrl:
          "https://res.cloudinary.com/dg8ndxl2y/image/upload/v1697320248/liquidStoreLogo_vrdfph.png",
        imageWidth: 400,
        imageAlt: "Custom image",
        showCancelButton: true,
        confirmButtonText: "Si, soy mayor de Edad",
        cancelButtonText: "NO :(",
        confirmButtonColor: "green",
        cancelButtonColor: "red",
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then((result) => {
        if (result.isConfirmed) {
          setAge(true);
          Swal.fire({
            title: "Bienvenido, ya puedes comprar",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          }).then(() => goTo("/"));
        } else {
          Swal.fire({
            title: "Lo sentimos debes ser mayor de edad para poder comprar",
            text: "Por favor revisa nuestras politicas de privacidad",
            icon: "warning",
            allowOutsideClick: false,
            allowEscapeKey: false,
          }).then(() => {
            goTo("/politics");
          });
        }
      });
    }, 1500);
  }

  return <></>;
};

export default AgeConsult;

/* function guardaCarrito() {
  localStorage.setItem("carritoLocal", JSON.stringify(carrito));
} */

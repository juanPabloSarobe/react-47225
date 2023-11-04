import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    !isInCart(product.id)
      ? addItemToCart(product)
      : setCart(addCantityToItem(product));
  };

  const isInCart = (id) => {
    return cart.some((e) => e.id === id);
  };

  const addItemToCart = (product) => {
    Swal.fire({
      title: `Se agregaron ${product.cantidad} items de ${product.title} al carrito`,
      icon: "success",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
    setCart([...cart, product]);
  };

  const addCantityToItem = (product) => {
    let newCart = cart.map((e) => {
      let cantidadFinal;
      if (e.id === product.id) {
        if (e.cantidad + product.cantidad < product.stock) {
          cantidadFinal = e.cantidad + product.cantidad;
          Swal.fire({
            title: `Se agregaron ${product.cantidad} items de ${product.title} al carrito`,
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
        } else {
          cantidadFinal = product.stock;
          Swal.fire({
            title: "cantidad maxima alcanzada",
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
        }

        return { ...e, cantidad: cantidadFinal };
      } else {
        return e;
      }
    });
    return newCart;
  };

  const clearCart = () => {
    setCart([]);
  };
  const totalItems = () => {
    console.log(cart);
    const itemsTotales = cart.reduce((acc = 0, val) => {
      return acc + val.cantidad, 0;
    });

    console.log(itemsTotales);
  };

  let data = { cart, addToCart, totalItems, clearCart };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;

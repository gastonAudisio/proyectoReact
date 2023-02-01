const { createContext, useState } = require("react");

export const cartContext = createContext();

export function CartContextProvider(props) {
  let [cart, setCart] = useState([]);

  function addItem(item) {

    const isInCart = cart.some((itemInCart) => itemInCart.id === item.id);

    if (isInCart) {
      let newCart = [...cart];
      let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
      alert("el item ya está en el carrito");
    } else {
      setCart([...cart, item]);
    }
  }

  function removeItem(idToDel) {
    setCart(cart.filter(item=> item.id === idToDel))
  }

   function clearCart() {
    setCart([])
  }

  function getTotalItems() {
    let total = 0;
    cart.forEach((item) => (total += 1));
    return total;
  }

  function getTotalPriceInCart() {
    return 999;
  }

  const value = {
    cart,
    addItem,
    getTotalItems,
    getTotalPriceInCart,
    removeItem,
    clearCart,
  };

  return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
}
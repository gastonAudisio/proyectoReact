const { createContext, useState } = require("react");

export const cartContext = createContext();

export function CartContextProvider(props) {
  let [cart, setCart] = useState([]);

  function addItem(item) {

    const isInCart = cart.some((itemInCart) => itemInCart.id === item.id);

    if (isInCart) {
      let newCart = [...cart];
      let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);

     console.log(newCart[index]) ;
    } else {
      setCart([...cart, item]);
    }
  }

  const removeItem = (id) => {
    const deleteItem = cart.filter(el => el.id !== id)
    setCart([...deleteItem]);
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
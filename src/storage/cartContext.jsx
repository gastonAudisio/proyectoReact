const { createContext, useState } = require("react");

export const cartContext = createContext();

export function CartContextProvider(props) {
  let [cart, setCart] = useState([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;


  const addItem =(item, quantity) =>{
    if(isInCart(item.id)){
     
      setCart (cart.map(product =>{
        return product.id === item.id ?{...product,quantity:product.quantity + quantity} : product
      }));

    }else{
      setCart ([...cart,{...item,quantity}]);
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
    cart.forEach((item) => (total += item.quantity
      ));
    return total;
  }

  
  function totalPrice(){
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity
        ; 
    })
    return total;
}

  const value = {
    cart,
    addItem,
    getTotalItems,
    totalPrice,
    removeItem,
    clearCart,
    
  };
  
  return(<cartContext.Provider value={value}>{props.children}</cartContext.Provider>);
}
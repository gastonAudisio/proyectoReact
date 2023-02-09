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
/*
  function addItem(item) {

    const isInCart = cart.some((itemInCart) => itemInCart.id === item.id);

    if (isInCart) {
      let newCart = [...cart];
      let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);

      setCart([newCart[index]])
      console.log(newCart[index]) ;
    } else {
      setCart([...cart, item]);
    }
  }*/
  
/*
  function addItem(item,cantidad) {
    const isInCart = cart.some((itemInCart) => itemInCart.id === item.id);

    if (isInCart) {
      let newCart = [...cart];
      let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
      
      newCart[index] = {...newCart[index], cantidad: newCart[index].cantidad + 1};
      setCart(newCart);
          setCart([...cart, item]);
        }


}

*/
/*
function addItem(item,cantidad){
  let itemIndex = cart.findIndex(itemInCart => item.id === itemInCart.id);
  const newCart = [...cart];
  if(itemIndex === -1){
      const newItem = {...item,count: cantidad};
      newCart.push(newItem);
  }
  else{
      if((newCart[itemIndex].count + cantidad) > newCart[itemIndex].stock ){
          alert("Lo sentimos", "No disponemos del stock suficiente", "warning");
      }
      else{
          newCart[itemIndex].count += cantidad;
      }
      setCart(newCart);
  }
  
}
*/
const removeItem = (id) => {
  const deleteItem = cart.filter(el => el.id !== id)
  setCart([...deleteItem]);
}


  function clearCart() {
    setCart([])
  }

  function getTotalItems() {
    let total = 0;
    cart.forEach((item) => (total += item.count));
    return total;
  }

  
  function totalPrice(){
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.count; 
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

  return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
}
import React, { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import { Link } from "react-router-dom";
import "./cartContainer.css";


function CartContainer() {
  const { cart , removeItem ,clearCart , totalPrice } = useContext(cartContext);

  return (
  
    <div>
      <h1>Tus Compras</h1>
      <div className="flexRow card ">
        {cart.map((item) => (
          <div >
            <h3>{item.title}</h3>
            <img width="100" src={item.imgurl} alt="img" />
            <p>${item.price}</p>
            <p>{item.quantity}</p>
            <button className="btn" onClick={() => removeItem(item.id)}>Eliminar del Carrito</button>
          </div>
        ))}
      </div>
      <div className="flexRow text">
      <Link to="/">
          <button className="btn ">Seguir Comprando</button> 
      </Link>
      
          <button className="btn" onClick={() => clearCart()}>Vaciar Carrito</button> 
          <h1>El total de tu compra es ${totalPrice()}</h1>
      
      </div>
      
      

    </div>
  
  );
}

export default CartContainer;
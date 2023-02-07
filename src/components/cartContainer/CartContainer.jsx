import React, { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import { Link } from "react-router-dom";
import "./cartContainer.css";


function CartContainer() {
  const { cart , removeItem ,clearCart , totalPrice } = useContext(cartContext);

  return (
  
    <div>
      <h1>Tus Compras</h1>
      <div classname="flexRow card">
        {cart.map((item) => (
          <div className="cart-item">
            <h3>{item.title}</h3>
            <img width="100" src={item.imgurl} alt="img" />
            <p>${item.price}</p>
            <p>{item.count}</p>
            <button className="btn" onClick={() => removeItem(item.id)}>Eliminar del Carrito</button>
          </div>
        ))}
      </div>
      <Link to="/">
          <button className="btn">Seguir Comprando</button> 
      </Link>
      
          <button className="btn" onClick={() => clearCart()}>Vaciar Carrito</button> 
          <h1>el total de tu compra es ${totalPrice()}</h1>

      

    </div>
  
  );
}

export default CartContainer;
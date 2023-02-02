import React, { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import { Link } from "react-router-dom";
import "./cartContainer.css";

function CartContainer() {
  const { cart , removeItem , product } = useContext(cartContext);

  return (
    
    <div>
      <h1>Tu carrito</h1>
      <div classname="flexRow card">
        {cart.map((item) => (
          <div className="cart-item">
            <h3>{item.title}</h3>
            <img width="100" src={item.imgurl} alt="img" />
            <p>${item.price}</p>
            <p>{item.count}</p>
            <button className="btn" onClick={() => removeItem(product.id)}>Eliminar del Carrito</button>
          </div>
        ))}
      </div>
      <Link to="/">
          <button className="btn">Seguir Comprando</button> 
      </Link>
      
    </div>
    
  );
}

export default CartContainer;
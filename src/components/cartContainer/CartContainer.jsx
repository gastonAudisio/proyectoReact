import React, { useState,useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import { Link } from "react-router-dom";
import "./cartContainer.css";
import Flex from "../flex/Flex";
import { createBuyOrder } from "../../services/firebase";
import CartForm from "./CartForm";

function CartContainer() {
  const { cart , removeItem ,clearCart , totalPrice } = useContext(cartContext);
  const [orderId, setOrderId] = useState(null);



  async function handleCheckout() {
    const items = cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      count: product.count,
    }));

    const order = {
      buyer: {
        name: "gaston",
        email: "gaston@gmail.com",
        phone: 5555,
      },
      items: items,
      date: new Date(),
      total: totalPrice(),
    };

    let id = await createBuyOrder(order); 
    setOrderId(id);
    clearCart()

  }

  if (orderId !== null)
    return (
      <div>
        <h1>Gracias por tu compra</h1>
        <p>El id de tu compra es: {orderId}</p>
      </div>
    );



  return (

    <div>
      {cart<1? (
        <Flex>
        <h3 className="card flexRow">Tu carrito esta vacio</h3>

        <Link to="/">
          <button className="btn ">Seguir Comprando</button> 
        </Link>
        </Flex> ): (
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
              <h3>El total de tu compra es ${totalPrice()}</h3>


          <button className="btn" onClick={handleCheckout}>Finalizar Compra</button>
          <CartForm onSubmit={handleCheckout} />
          </div>
        </div>
        )
      }
    </div>
  );
}

export default CartContainer;
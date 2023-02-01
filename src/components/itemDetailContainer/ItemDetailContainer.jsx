import React, { useState, useEffect , useContext } from "react";
import { getSingleItem } from "../../services/services";
import { useParams } from "react-router-dom" 
import "./itemDetail.css";
import ItemCount from "../itemCount/ItemCount";
import { cartContext } from "../../storage/cartContext";


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  let { itemid } = useParams();
 
   const { addItem , removeItem , clearCart} = useContext(cartContext);
  // onAddtoCart
   function handleAddToCart(count) {
    alert(`Agregaste ${count} de ${product.title} al carrito`);
    product.count = count;
    addItem(product);
  }
  useEffect(() => {
    getSingleItem(itemid)
      .then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => alert(`Error: ${error}`));
  }, [itemid]);

  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={product.imgurl} alt={product.title} />
      </div>
      <div className="card-detail_detail">
        <h1>{product.title}</h1>
        <h2 className="priceTag">$ {product.price}</h2>
        <small>{product.detail}</small>
   
        <ItemCount stock={product.stock} onAddToCart={handleAddToCart} />
      <button className="btn"> Ir al carrito</button>
      <button className="btn" onClick={() => removeItem(product.id)}>Eliminar Libro</button>
      <button className="btn"onClick={() => clearCart(product.id)}>Vaciar Carrito</button>
      </div>
      
    
    </div>

    
       
  
  )
}
export default ItemDetailContainer;
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import React, { useContext,useState } from "react";


function ItemDetail({product}){
  const { addItem , removeItem , clearCart } = useContext(cartContext);
  function handleAddToCart(count) {
    alert(`Agregaste ${count} de ${product.title} al carrito`);
    product.count = count;
    addItem(product);
  
  }

return(
<div>
{isInCart ? (
  <div className="card-detail_main">
  <div className="card-detail_img">
    <img src={product.imgurl} alt={product.title} />
  </div>
  <div className="card-detail_detail">
      <h1>{product.title}</h1>
      <h2 className="priceTag">$ {product.price}</h2>
      <small>{product.detail}</small>

      <ItemCount stock={product.stock} onAddToCart={handleAddToCart} />

      <Link to="/cart">
        <button className="btn">Ver Carrito</button> 
      </Link>
    
  </div>    
</div>
) : (
  <div className="card-detail_main">
        <div className="card-detail_img">
          <img src={product.imgurl} alt={product.title} />
        </div>
        <div className="card-detail_detail">
            <h1>{product.title}</h1>
            <h2 className="priceTag">$ {product.price}</h2>
            <small>{product.detail}</small>
      
            <Link to="/cart">
              <button className="btn">Ver Carrito</button> 
            </Link>
          
        
        </div>    
  </div>
)

}

</div>
);

}
export default ItemDetail;
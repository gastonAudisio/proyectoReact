import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import React, { useContext , useState } from "react";

function ItemDetail({product}){
  const [cantidad,setCantidad] = useState();
 
  const { addItem  } = useContext(cartContext);
  function handleAddToCart(count) {
    alert(`Agregaste ${count} de ${product.title} al carrito`);
    product.count = count;
    addItem(product);
    setCantidad(1);
  }

 
return(

  <div className="card-detail_main">
  <div className="card-detail_img">
    <img src={product.imgurl} alt={product.title} />
  </div>
  <div className="card-detail_detail">
      <h1>{product.title}</h1>
      <h2 className="priceTag">$ {product.price}</h2>
      <small>{product.detail}</small>

{cantidad>0 ?
      <Link to="/cart">
        <button className="btn">Ver Carrito</button> 
      </Link> 
      :   
      <ItemCount stock={product.stock}  onAddToCart={handleAddToCart} />
}    
  </div>    
</div>
)
}
export default ItemDetail;
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import React, { useContext , useState } from "react";

function ItemDetail({product}){
  const { addItem  } = useContext(cartContext);
  function handleAddToCart(count) {
    alert(`Agregaste ${count} de ${product.title} al carrito`);
    product.count = count;
    addItem(product);
  }

  const [btn,setBtn] = useState(true);
  const sBtn = () => {

    setBtn(false);
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

{btn ?
      <ItemCount stock={product.stock} onClick={sBtn} onAddToCart={handleAddToCart} />
      :   
      <Link to="/cart">
        <button className="btn" onClick={addItem}>Ver Carrito</button> 
      </Link> 
      }
    
  </div>    
</div>
)
}
export default ItemDetail;
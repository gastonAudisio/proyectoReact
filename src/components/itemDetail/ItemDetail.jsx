import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import React, { useContext , useState } from "react";
import "./itemDetail.css"
import Flex from "../flex/Flex";
function ItemDetail({product}){
  const [cantidad,setCantidad] = useState();
 
  const { addItem  } = useContext(cartContext);
  function handleAddToCart(count) {
    alert(`Agregaste ${count} de ${product.title} al carrito`);
    product.count = count;
    addItem(product,count);
    setCantidad(1);
  }

 
return(

  <div className=" flexRow card-detail">
    
    <div >
      <img className="img" src={product.imgurl} alt={product.title} />
    </div>
    <div >
        <h1>{product.title}</h1>
        <h2 className="priceTag">$ {product.price}</h2>
        <h5 className="texto">{product.detail}</h5>

        {cantidad>0 ?
            <Flex>
              <Link to="/cart">
                <button className="btn">Ver Carrito</button> 
              </Link> 
            </Flex>
              :   
              <ItemCount stock={product.stock}  onAddToCart={handleAddToCart} />
        }    
    </div>  
</div>
)
}
export default ItemDetail;
import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/firebase";
import { useParams } from "react-router-dom" 
import "./itemDetail.css";
import ItemDetail from "../itemDetail/ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  let { itemid } = useParams();
 
 
  useEffect(() => {
    getSingleItem(itemid)
      .then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => alert(`Error: ${error}`));
  }, [itemid]);

  
  return (
    <div>
      <ItemDetail product={product}/>
    </div>   
  )
  
}
export default ItemDetailContainer;
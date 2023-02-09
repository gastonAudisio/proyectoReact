

import React, { useState, useEffect } from "react";
import getItems, { getItemsByCategory } from "../../services/services";

import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom" 

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  let { categoryid } = useParams();
  
  
  useEffect(() => {
    if (categoryid) {
      getItemsByCategory(categoryid).then((respuesta) => {
        console.log(respuesta);
        setProducts(respuesta);
      });
    } else {
      getItems().then((respuesta) => {
       
        setProducts(respuesta);
      });
    }
  },[categoryid]);


  return (
    <>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;
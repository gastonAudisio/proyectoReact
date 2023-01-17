

import React, { useState, useEffect } from "react";

import "../Item/item.css"
import getItems,{ getItemsByCategory } from "../../services/services";
import ItemList from "../itemList/ItemList";


function ItemListContainer() {
  const [products, setProducts] = useState([]);

  
  let idcategory = "undefined";
  
  useEffect(() => {
    if (idcategory) {
      getItemsByCategory(idcategory).then((respuesta) => {
        console.log(respuesta);
        setProducts(respuesta);
      });
    } else {
      getItems().then((respuesta) => {
        console.log(respuesta);
        setProducts(respuesta);
      });
    }
  }, []);


  return (
    <>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;
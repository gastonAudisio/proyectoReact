

import React, { useState, useEffect } from "react";

import "../Item/item.css"
import getItems from "../../services/services";
import ItemList from "../itemList/ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  console.log("Renderizamos el componente...");

  useEffect( () => {
    getItems().then((respuesta) => {
      console.log(respuesta);
      setProducts(respuesta);
    });
   }, [])
  

  return (
    <>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;
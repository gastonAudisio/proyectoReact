
import React, { useState, useEffect } from "react";
import  { getItemsByCategory ,getItemsPromise} from "../../services/firebase";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom" 
import Notification from "../notification/Notification";
import Loader from "../loader/Loader";
import Flex from "../flex/Flex";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  
  const [notification, setNotification] = useState({
    type: "info",
    text: "Cargando datos",
  });
  let { categoryid } = useParams();
  
 
async function getProducts() {
  if (!categoryid) {
    try {
      let response = await getItemsPromise();
      setProducts(response);
      setNotification({
        type: "default",
        text: `Se cargaron ${response.length} productos correctamente...`,
      });
    } catch (error) {
      alert(error);
      setNotification({
        type: "danger",
        text: `Error cargando los productos: ${error}`,
      });
    } finally {
      setIsLoading(false);
    }
  } else {
    let response = await getItemsByCategory(categoryid);
    setProducts(response);
    setIsLoading(false);
  }
}

useEffect(() => {
  getProducts();
},[categoryid] );


  return (
    <>
       {notification.type && <Notification notification={notification} />}
       {isLoading ? (
        
        <Flex>
          <Loader />
        </Flex>
        
        
      ) : (
        <ItemList products={products} />
      )}
      
    </>
  );
}

export default ItemListContainer;
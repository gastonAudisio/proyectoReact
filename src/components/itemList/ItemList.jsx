import React from "react";
import Flex from "../flex/Flex";
import Item from "../Item/Item";
function ItemList(props) {
  return (
    <Flex>
      {props.products.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          price={item.price}
          detail={item.detail}
          imgurl={item.imgurl}
          />
          
      ))}
      
    </Flex>
  );
}

export default ItemList;
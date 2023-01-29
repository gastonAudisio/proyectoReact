import { useState } from "react";

import "./itemCount.css";


function ItemCount( { stock } ) {
  const [count, setCount] = useState(1);
 
  function handleAdd() {
   
    setCount(count + 1);
  
  
  }

  function handleSubstract() {
    
    setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <small>Agregá la cantidad deseada al carrito</small>
      <div className="itemcount_control">
        <button disabled={count <=1} className="btn" onClick={handleSubstract}>
          -
        </button>
        <span className="itemcount_count">{count}</span>
        <button disabled={count >=stock} className="btn" onClick={handleAdd}>
          +
        </button>
      </div>

      <div className="itemcount_btns">
        <button className="btn" onClick={() => alert("onAddToCart")}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
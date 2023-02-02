import { useContext } from "react";
import { cartContext } from "../../../storage/cartContext";
import { Link } from "react-router-dom";


function CartWidget() {
  const { getTotalItems } = useContext(cartContext);
    return(

      <span>
         <Link to="/cart">
         🛒
      {getTotalItems()>0&&getTotalItems()}
      </Link>
      </span>

    
    );
    }
  
  export default CartWidget;


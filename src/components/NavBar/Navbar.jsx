import { useContext } from "react";
import { Link } from "react-router-dom";
import Flex from "../flex/Flex";
import CartWidget from "./CartWidget/CartWidget";
import UserMenu from "./UserMenu";
import { cartContext } from "../../storage/cartContext";

  

function NavBar({ onLogin }) {

 function handleSubmit(evt) {
    evt.preventDefault();
    let username = evt.target.elements[0].value;
    onLogin(username);
  }

  const { getTotalItems } = useContext(cartContext);

    return (
      <Flex>
      <ul>
      <Link className="nav-link" to="/"><h2>Los Libros de Gaston</h2></Link>
        
        <li>
        <Link className="nav-link" to="/category/detectives">Detectives</Link>
        
        </li>
        <li>
        <Link className="nav-link" to="/category/cienciaFiccion">Ciencia Ficcion</Link>
        </li>
        <li>
          <Link className="nav-link" to="/category/aventura">Aventura</Link>
        </li>
         
      </ul>
      <li>
          <Link className="nav-link" to="/contacto">Contacto</Link>
        </li>

        <form onSubmit={handleSubmit}>
          <label>
            Ingresa tu nombre:
            <input name="username" placeholder="username" />
          </label>
          <button type="submit">Login</button>
        </form>

        <span>
          
          <CartWidget/>
          
          {getTotalItems()>0&&getTotalItems()}
        </span>
      </Flex>
    );
    
  }

  export default NavBar;
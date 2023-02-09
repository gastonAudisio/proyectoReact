import { Link } from "react-router-dom";
import "./navbar.css";
import Flex from "../flex/Flex";
import CartWidget from "./CartWidget/CartWidget";
  

function NavBar({ onLogin }) {

 function handleSubmit(evt) {
    evt.preventDefault();
    let username = evt.target.elements[0].value;
    onLogin(username);
  }

    return (
      
      <nav>
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
        <li>
          <Link className="nav-link" to="/contacto">Contacto</Link>
        </li>
      </ul>
     

        <form onSubmit={handleSubmit}>
          <label>
            Ingresa tu nombre:
            <input name="username" placeholder="username" />
          </label>
          <button type="submit">Login</button>
        </form>
       
        <CartWidget/>
        
        </Flex>
      </nav>
      
    );
    
  }

  export default NavBar;
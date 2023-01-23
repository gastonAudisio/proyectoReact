
import { Link } from "react-router-dom";

import Flex from "../flex/Flex";
import CartWidget from "./CartWidget/CartWidget";



  

function NavBar() {
 
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
         <CartWidget/>
      </ul>
      <li>
          <Link className="nav-link" to="/contacto">Contacto</Link>
        </li>
      </Flex>
    );
    
  }

  export default NavBar;
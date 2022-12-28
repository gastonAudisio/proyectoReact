
// import CartWidget from "./components/NavBar/CartWidget/CartWidget";

import CartWidget from "./CartWidget/CartWidget";



function NavBar() {
    return (
      <ul>
        <h2>Los Libros de Gaston</h2>
        <li>
          <a href="/">Terror</a>
        </li>
        <li>
          <a href="/">Ciencia Ficcion</a>
        </li>
        <li>
          <a href="/">Drama</a>
        </li>
         <CartWidget/>
      </ul>
    );
  }
  
  export default NavBar;
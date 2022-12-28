import "./App.css";
import "./components/Item/item.css"
import Flex from "./components/flex/Flex";

import Item from "./components/Item/Item";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import NavBar from "./components/NavBar/Navbar"
// Componente APP
function App() {
  return (
    <>
    <ItemListContainer/>
      <Flex>
        <NavBar/>
      </Flex>
      
      <Flex>
        <Item
          title="1984"
          price={4000}
          detail="Distopia"
          imgurl="/assets/img/1984.svg"
        />
        <Item
          title="El Libro de la Selva"
          price={5000}
          detail="Aventura"
          imgurl="/assets/img/libro selva.svg"
        />
        <Item
          title="Arsene Lupin"
          price={6000}
          detail="Detectives"
          imgurl="/assets/img/lupin.svg"
        />
        <Item
          title="la Vuelta al Mundo"
          price={3000}
          detail="Aventura"
          imgurl="/assets/img/vuelta.svg"
        />
         </Flex>
    </>
  );
}


export default App;
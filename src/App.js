import "./App.css";
import "./components/Item/item.css"
import NavBar from "./components/NavBar/Navbar"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { CartContextProvider } from "./storage/cartContext";

function App() {
  function handleLogin(username) {
    alert(`${username} Iniciaste sesión`);
  }
  return (
    <CartContextProvider> 
    <BrowserRouter>
      <NavBar onLogin={handleLogin}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryid" element={<HomePage />} />

        <Route path="/item/:itemid" element={<ItemDetailContainer />} />

        <Route path="/contacto" element={<h1>Contacto</h1>} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}


export default App;
import "./App.css";
import "./components/Item/item.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/Navbar"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryid" element={<HomePage />} />

        <Route path="/item/:itemid" element={<ItemDetailContainer />} />

        <Route path="/contacto" element={<h1>Contacto</h1>} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
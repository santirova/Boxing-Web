import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./client-component/NavBar";
import NavBar from "./client-component/NavBar";
import Home from "./client-views/home";
import Price from "./client-views/price/price";
import Footer from "./client-component/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Precios" element={<Price />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

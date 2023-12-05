import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./client-component/NavBar";
import NavBar from "./client-component/NavBar";
import Home from "./client-views/home/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

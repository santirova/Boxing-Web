import { BrowserRouter, Routes } from "react-router-dom";
import "./client-component/NavBar";
import NavBar from "./client-component/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

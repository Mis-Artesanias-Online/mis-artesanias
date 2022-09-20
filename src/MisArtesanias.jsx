import { Inicio } from "./components/Inicio";
import {Login} from "./components/Login/Login";
import { Routes, Route, Link } from "react-router-dom";
import { NavArtesanias } from "./components/Inicio/NavArtesanias";
import { Footer } from "./components/Inicio/Footer";
import { Register } from "./components/Login/Register";



export const MisArtesanias = () => {
  return (
    <>
      <NavArtesanias/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
      <Footer />
    </>
  )
}
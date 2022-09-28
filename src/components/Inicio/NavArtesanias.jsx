import {useEffect, useState} from 'react';
import logotitulo from '../../asssets/icons/logotitulo.png';
import '../../styles/NavArtesanias.css';
import { Link } from 'react-router-dom';
import {getItem} from "../../lib/sessionStorage.js";

export const NavArtesanias = () => {
  const [name, setName] = useState("")

  useEffect(() => {
    setName(getItem("name"))
  }, [name])

  return (
    <header className="navbar-container m-3">
      <nav className="navbar-artesanias">
        <img className="img-nav" src={logotitulo} alt="logo-artesanias" />

        <div className="menu-container">
          <Link to="/">Inicio</Link>

          <Link to="/Productos">Productos</Link>
        </div>

        <div>

          <Link to="/Login">
            <ion-icon name="person-outline"></ion-icon>
            {name}
          </Link>

          <ion-icon name="cart-outline"></ion-icon>
        </div>

      </nav>
    </header>
  )
}

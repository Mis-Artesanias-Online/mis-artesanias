import { useEffect } from 'react';
import logotitulo from '../../asssets/icons/logotitulo.png';
import '../../styles/NavArtesanias.css';
import { Link } from 'react-router-dom';

export const NavArtesanias = () => {

  useEffect(() => { }, [])
  return (
    <>
      <header className="navbar-container m-3">
        <nav className="navbar-artesanias">
          <img className="img-nav" src={logotitulo} alt="logo-artesanias"/>

          <div className="menu-container">
            <Link to="/">Inicio</Link>
            
            <a>Productos</a>
          </div>

          <div>
            <Link to="/Login">
              <ion-icon name="person-outline"></ion-icon>
            </Link>
            
            <ion-icon name="cart-outline"></ion-icon>
          </div>

        </nav>
      </header>
    </>
  )
}

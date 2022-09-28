import { Link } from 'react-router-dom';

import '../../styles/Footer.css';
import logotitulo from '../../asssets/icons/logotitulo.png';
import facebook from '../../asssets/icons/facebook.svg';
import instagram from '../../asssets/icons/instagram.svg';
import red from '../../asssets/icons/red.svg';
import twitter from '../../asssets/icons/twitter.svg';

export const Footer = () => {

    return (
        <footer className='footer container-fluid w-100 h-auto'>
            <div className='footer-container d-flex justify-content-between align-items-center p-4'>
                <Link to="/"><img className='footer-img' src={logotitulo} alt="logo" /></Link>
                <div className='footer-menu'>
                    <a href="" className='footer-menu__item m-3'>Informacion</a>
                    <a href="" className='footer-menu__item m-3'>Ayuda</a>
                    <a href="" className='footer-menu__item m-3'>Politicas de privacidad</a>
                </div>
                <div className='social-media-container h-auto'>
                    <a href=""> <img className='social-media-logo' src={facebook} alt="facebook-logo" /></a>
                    <a href=""> <img className='social-media-logo' src={instagram} alt="instagram-logo" /></a>
                    <a href=""> <img className='social-media-logo' src={twitter} alt="twitter-logo" /></a>
                    <a href=""> <img className='social-media-logo' src={red} alt="red-logo" /> </a>
                </div>
            </div>
            <hr />
            <p>© 2022 Mís Artesanías. All rights reserved</p>
        </footer>
    )
}
import '../../styles/Footer.css';
import logotitulo from '../../asssets/icons/logotitulo.png';
import facebook from '../../asssets/icons/facebook.svg';
import instagram from '../../asssets/icons/instagram.svg';
import red from '../../asssets/icons/red.svg';
import twitter from '../../asssets/icons/twitter.svg';

export const Footer = () => {

    return (
        <footer className='footer w-100'>
            <img className='logoFooter' src={logotitulo} alt="" />
            <div className='footerI'>
                <a href="">Informacion</a>
                <a href="">Ayuda</a>
                <a href="">Politicas de privacidad</a>
            </div>
            <hr/>
            <div>
                <a href=""> <img className='logos' src={facebook} alt="" /></a>
                <a href=""> <img className='logos'  src={instagram} alt="" /></a>
                <a href=""> <img className='logos' src={twitter} alt="" /></a>
                <a href=""> <img className='logos' src={red} alt="" /> </a>
            </div>
            <div><p className="m-0">© 2022 Mís Artesanías. All rights reserved</p></div>
        </footer>
    )
}
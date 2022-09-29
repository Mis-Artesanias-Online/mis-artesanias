import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../styles/BrandBenefits.css';

import bloquear from '../../asssets/icons/bloquear.png';
import certificacion from '../../asssets/icons/certificacion.png';
import colombia from '../../asssets/icons/colombia.png';
import vip from '../../asssets/icons/vip.png';


export const BrandBenefits = () => {
    return (
        <div className="benefits-container container-fluid w-100 h-auto">
            <h1 className="text-center">Nuestros Beneficios</h1>

            <div className="row mt-5">
            {
                <Row className="d-flex justify-content-center w-100 h-auto mb-5 mt-5">
                    <Col xl={3} md={6} className="d-block text-center">
                        <img className="benefit-img mb-3" src={colombia} alt="Envios Nacionales" />
                        <h2>Envios Nacionales</h2>
                        <p>Envios a todo el territorio nacional</p>
                    </Col>
                    
                    <Col xl={3} md={6} className="d-block text-center">
                        <img className="benefit-img mb-3" src={vip} alt="Productos Exclusivos" />
                        <h2>Productos Exclusivos</h2>
                        <p>Productos 100% exclusivos</p>
                    </Col>

                    <Col xl={3} md={6} className="d-block text-center">
                        <img className="benefit-img mb-3" src={certificacion} alt="Productos Certificados" />
                        <h2>Productos Garantizados</h2>
                        <p>Todos nuestros productos son de alta calidad</p>
                    </Col>

                    <Col xl={3} md={6} className="d-block text-center">
                        <img className="benefit-img mb-3" src={bloquear} alt="Pagos Seguros" />
                        <h2>Pagos Seguros</h2>
                        <p>Plataforma de pago segura</p>
                    </Col>
                </Row>
            }
            </div>

        </div>

    )
}
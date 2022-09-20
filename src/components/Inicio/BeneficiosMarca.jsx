import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../styles/BeneficiosMarca.css';
import bloquear from '../../asssets/icons/bloquear.png';
import certificacion from '../../asssets/icons/certificacion.png';
import colombia from '../../asssets/icons/colombia.png';
import vip from '../../asssets/icons/vip.png';


export const BeneficiosMarca = () => {
    return (
        <>
            <h1 className="d-flex align-center justify-content-center mt-5">Nuestros Beneficios</h1>

            {
                <Row className="d-flex justify-content-center w-100 mb-5 mt-5">
                    <Col xl={3} md={6}>
                        <div className="d-block text-center">
                            <img className="icon-div mb-3" src={colombia} alt="Envios Nacionales"/>
                            <h2>Envios Nacionales</h2>
                            <p>Envios a todo el territorio nacional</p>
                        </div>
                    </Col>
                    <Col xl={3} md={6}>
                        <div className="d-block text-center">
                            <img className="icon-div mb-3" src={vip} alt="Productos Exclusivos"/>
                            <h2>Productos Exclusivos</h2>
                            <p>Productos 100% exclusivos</p>
                        </div>
                        
                    </Col>
                    <Col xl={3} md={6}>
                        <div className="d-block text-center">
                            <img className="icon-div mb-3" src={certificacion} alt="Productos Certificados"/>
                            <h2>Productos Garantizados</h2>
                            <p>Todos nuestros productos son de alta calidad</p>
                        </div>
                        
                    </Col>
                    <Col xl={3} md={6}>
                        <div className="d-block text-center">
                            <img className="icon-div mb-3" src={bloquear} alt="Pagos Seguros"/>
                            <h2>Pagos Seguros</h2>
                            <p>Plataforma de pago segura</p>
                        </div>
                    </Col>
                </Row>
            }

        </>

    )
}
import '../../styles/NuestrosProductos.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sombrero1 from '../../asssets/products/sombrero1.jpg';
import sombrero2 from '../../asssets/products/sombrero2.jpg';
import sombrero3 from '../../asssets/products/sombrero3.jpg';
import { CardArt } from "../../components/Inicio/CardArt";


export const NuestrosProductos = () => {
    return (
        <div className="div-nuestros-productos container">
            <h1 className="d-flex align-center justify-content-center mt-5 mb-5">Nuestros Productos</h1>

            {
                <Row className="w-100">
                    <Col xl={4} md={6} className="d-flex align-center justify-content-center">
                        <CardArt
                            foto={sombrero1}
                            titulo={'Sombrero Tradicional'}
                            precio={'200.000 $'}
                        />
                    </Col>
                    <Col xl={4} md={6} className="d-flex align-center justify-content-center">
                        <CardArt
                            foto={sombrero2}
                            titulo={'Sombrero Engomao'}
                            precio={'250.000 $'} />
                    </Col>
                    <Col xl={4} md={6} className="d-flex align-center justify-content-center">
                        <CardArt
                            foto={sombrero3}
                            titulo={'Sombrero de color'}
                            precio={'200.000 $'} />
                    </Col>
                </Row>
            }
        </div>

    )
}
import '../../styles/NuestrosProductos.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sombrero1 from '../../asssets/products/sombrero1.jpg';
import sombrero2 from '../../asssets/products/sombrero2.jpg';
import sombrero3 from '../../asssets/products/sombrero3.jpg';


export const NuestrosProductos = () => {
    return (
        <div className="div-nuestros-productos container">
            <h1 className="d-flex align-center justify-content-center mt-5 mb-5">Nuestros Productos</h1>

            {
                <Row className="w-100">
                    <Col xl={4} md={6} className="d-flex align-center justify-content-center">
                        <div className="d-block text-center">
                            <h2>Sombrero Tradicional</h2>
                            <img src={sombrero1} className="sombrero" />
                        </div>
                    </Col>
                    <Col xl={4} md={6} className="d-flex align-center justify-content-center">
                        <div className="d-block text-center">
                            <h2>Sombrero Engomado</h2>
                            <img src={sombrero2} className="sombrero" />
                        </div>
                    </Col>
                    <Col xl={4} md={6} className="d-flex align-center justify-content-center">
                        <div className="d-block text-center">
                            <h2>Sombrero Color</h2>
                            <img src={sombrero3} className="sombrero" />
                        </div>
                    </Col>
                </Row>
            }

        </div>

    )
}
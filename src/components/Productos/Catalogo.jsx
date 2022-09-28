import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import sombrero1 from '../../asssets/products/sombrero1.jpg';
import sombrero2 from '../../asssets/products/sombrero2.jpg';
import sombrero3 from '../../asssets/products/sombrero3.jpg';
import { CardArt } from "../../components/Inicio/CardArt";

export const Catalogo = () => {
    return (
        <div className="div-nuestros-productos container h-auto">

            <h1 className="d-flex align-center justify-content-center ">Nuestros Productos</h1>
            <Container>
                <Row >
                    <Col>
                        <CardArt
                            foto={sombrero1}
                            titulo={'Sombrero Tradicional'}
                            precio={'200.000 $'}
                        />
                    </Col>
                    <Col>
                        <CardArt
                            foto={sombrero2}
                            titulo={'Sombrero Engomao'}
                            precio={'250.000 $'} />
                    </Col>
                    <Col>
                        <CardArt
                            foto={sombrero3}
                            titulo={'Sombrero de color'}
                            precio={'200.000 $'} />
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <CardArt
                            foto={sombrero1}
                            titulo={'Sombrero Tradicional'}
                            precio={'200.000 $'}
                        />
                    </Col>
                    <Col>
                        <CardArt
                            foto={sombrero2}
                            titulo={'Sombrero Engomao'}
                            precio={'250.000 $'} />
                    </Col>
                    <Col>
                        <CardArt
                            foto={sombrero3}
                            titulo={'Sombrero de color'}
                            precio={'200.000 $'} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
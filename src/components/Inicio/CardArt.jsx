
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const CardArt = ({foto,titulo,precio}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={foto}/>
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                    {precio}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    )
}
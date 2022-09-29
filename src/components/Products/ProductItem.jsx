import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ProductItem = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/dsd61ioc7/image/upload/v1664416336/mis-artesanias/product/gmhbtsq0x39kiekehqly.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
};
import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getAllProducts } from "../../api/products/products";

export const ProductItem = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const products = await getAllProducts();
    setProducts(products);
  };

  console.log(products);

  //   const productsItems = products.map((product) => {
  //     return (
  //       <Card className="card-product" key={product._id}>
  //         <Card.Img variant="top" src={product.img} />
  //         <Card.Body>
  //           <Card.Title>{product.name}</Card.Title>
  //           <Card.Text>{product.description}</Card.Text>
  //           <Card.Text>{product.price}</Card.Text>
  //           <Button variant="primary">Agregar al carrito</Button>
  //         </Card.Body>
  //       </Card>
  //     );
  //   });

  useEffect(() => {
    getProducts();
  }, [products]);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://res.cloudinary.com/dsd61ioc7/image/upload/v1664416336/mis-artesanias/product/gmhbtsq0x39kiekehqly.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

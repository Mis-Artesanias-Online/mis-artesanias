import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getAllProducts } from "../../api/products/products";

export const ProductItem = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const setAllProducts = async () => {
    setLoading(true);
    const products = await getAllProducts();
    setProducts(products);
    setLoading(false);
  };

  const productsCards = () => {
    return products.map((product) => {
      return (
        <Card key={product._id} className="mb-4">
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
    });
  };

  useEffect(() => {
    setAllProducts();
  }, []);

  return (
    <>
      {products.length > 0 ? (
        productsCards()
      ) : (
        <h1 className="text-center">No hay productos</h1>
      )}
    </>
  );
};

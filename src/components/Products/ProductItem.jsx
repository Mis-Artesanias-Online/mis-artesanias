import { useEffect, useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getAllProducts } from "../../api/products/products";

const VITE_API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

export const ProductItem = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const setAllProducts = async () => {
    setLoading(true);
    const products = await getAllProducts();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    setAllProducts();
  }, []);

  return (
    <>
      {
        products.map((product) => {
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>;
        })
      }
    </>
  );
};



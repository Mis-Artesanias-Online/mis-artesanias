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

  useEffect(() => {
    getProducts();
  }, [products]);

  console.log(`Productos: ${products}`)

   return (
     <>
       {
         products.map(product => {
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={product.image}
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>

        })
       }
     </>
   )
};

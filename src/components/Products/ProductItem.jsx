import { useEffect, useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { getAllProducts } from "../../api/products/products";

const VITE_API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

export const ProductItem = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // VITE_API_KEY => REQUIRED
  const getAllProducts = async () => {
    let config = {
      method: "get",
      url: `${VITE_API_ENDPOINT}/products`,
      headers: {
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
    };

    await axios(config)
      .then(function (response) {
        const { products } = response.data;
        // console.log(products);
        setProducts(products);
        return products;
      })
      .catch(function (error) {
        console.error(error);
      });
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
    setLoading(true);
    getAllProducts();
    setLoading(false);
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

// {
//   products.map((product) => {
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src={product.image} />
//       <Card.Body>
//         <Card.Title>{product.name}</Card.Title>
//         <Card.Text>{product.description}</Card.Text>
//         <Button variant="primary">Comprar</Button>
//       </Card.Body>
//     </Card>;
//   });
// }

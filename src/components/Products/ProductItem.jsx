import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getAllProducts } from "../../api/products/products";

import  WhatsAppImage  from "../../asssets/icons/whatsapp.png";

import "../../styles/ProductItem.css";

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
      <div className="cards-container d-flex justify-content-center text-center m-5">
        {products.map((product, index) => {
          return (
            <Card className="card m-4" key={ index }>
              <Card.Img className="card-img" src={ product.image } />
              <Card.Body className="card-body">
                <Card.Title className="card-title">{product.name}</Card.Title>
                <Card.Text className="card-description">{product.description}</Card.Text>
                <Button className="card-button" href="https://api.whatsapp.com/send?phone=573223492581" target="_blank">Comprar por WhatsApp <img src={ WhatsAppImage }/></Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

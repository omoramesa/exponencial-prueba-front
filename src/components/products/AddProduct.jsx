import { React, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";


export function AddProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [productDescription, setDate] = useState("");
  // const [typeT, setTypeT] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const addProduct = () => {
    navigate("/");
  };

  return (
    <Container>
      <Form onSubmit={addProduct}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="productName"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            name="productDescription"
            type="text"
            value={productDescription}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            name="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          /> 
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClose} >
          Registrar
        </Button>{" "}
        <Button variant="primary" type="submit">
          Cancelar
        </Button>
      </Form>
    </Container>
  );
}
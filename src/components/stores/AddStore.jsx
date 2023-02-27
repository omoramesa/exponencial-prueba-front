import React, { useEffect, useState } from "react";
//import { React, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
//import { BsPlusCircleFill } from "react-icons/bs";
import Table from "react-bootstrap/Table";




export function AddStore() {
  const [storeName, setStoreName] = useState("");
  const urlProducts = 'http://localhost:8090/exponencial-prueba/api/products/all'

  const [products, setProducts] = useState()

  // const [amount, setAmount] = useState(0);
  // const [date, setDate] = useState("");
  // const [typeT, setTypeT] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const addStore = () => {
    navigate("/");
  };

  const fetchApi = async () => {
  const response = await fetch(urlProducts)
  console.log(response.statusText)
  const responseJSON = await response.json()
  setProducts(responseJSON)
  console.log(responseJSON)
 }

 useEffect (() =>{
       fetchApi()
 },[])

  return (
    <Container>
      <Form onSubmit={addStore}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="storeName"
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
          />

            <Table striped bordered hover>
              <tbody>
               {products.map((products) => ( 
                        <tr key={products.productId}>
                            <td>{products.productId}</td>                    
                            <td>{products.name}</td>
                            <td><button  className="btn btn-success"><i className="fa-solid fa-trash"></i>Seleccionar</button></td>
                        </tr>
                    ))}
           </tbody>
            </Table>

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
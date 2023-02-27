import React, { useEffect, useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Container } from 'react-bootstrap';
import { AddProduct } from "./AddProduct";


export const ProductList = () => {
    const [show, setShow] = useState(false);

    const url = 'http://localhost:8090/exponencial-prueba/api/products/all'
    const [products, setProducts] = useState()

    
    const fetchApi = async () => {
        const response = await fetch(url)
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
            <BsPlusCircleFill onClick={() => setShow(true)} className="buton_add" />

            <Table striped bordered hover>
            <tbody>
               {products.map((products) => ( 
                        <tr key={products.productId}>
                            <td>{products.productId}</td>                    
                            <td>{products.name}</td>
                            <td><button  className="btn btn-success"><i className="fa-solid fa-trash"></i>Editar</button></td>
                            <td><button  className="btn btn-danger"><i className="fa-solid fa-trash"></i>Eliminar</button></td>
                            
                        </tr>
                    ))}
           </tbody>
            </Table>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        <h2>Registro de Productos</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddProduct />
                </Modal.Body>
            </Modal>
        </Container>
    )
}


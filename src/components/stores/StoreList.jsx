import React, { useEffect, useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Container } from 'react-bootstrap';
import { AddStore } from "./AddStore";


export const StoreList = () => {
    const [show, setShow] = useState(false);

    const url = 'http://localhost:8090/exponencial-prueba/api/stores/all'
    const [stores, setStores] = useState()

    
    const fetchApi = async () => {
        const response = await fetch(url)
        console.log(response.statusText)
        const responseJSON = await response.json()
        setStores(responseJSON)
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
               {stores.map((stores) => ( 
                        <tr key={stores.storeId}>
                            <td>{stores.storeId}</td>                    
                            <td>{stores.name}</td>
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
                        <h2>Registro de Tiendas</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddStore />
                </Modal.Body>
            </Modal>
        </Container>
    )
}

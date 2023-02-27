import Button from 'react-bootstrap/Button';
import React from 'react'
import { Form, Navigate, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { CardGroup, Container } from 'react-bootstrap';


export function Home() {
    const navigate = useNavigate();
    const handleStore = () => {
        navigate("/store");
    }

    const handleProduct = () => {
        navigate("/product");
    }
    

  return (
    <Container>
        <div>
            <div className='card_container'><>
                <CardGroup className='cards'>
                    <Card className="card" style={{borderTopLeftRadius: "10%", borderTopRightRadius: "10%"}}>
                        <Card.Body>
                            <Card.Title>Administrar Tiendas</Card.Title>
                            <Card.Text>
                            Aquí puedes realizar las operaciones de listar, crear, actualizar o eliminar una tienda 
                            </Card.Text>
                            <Button onClick = {handleStore} variant="danger" className="button_logout">Ir a Tiendas</Button>{' '}
                        </Card.Body>
                        <Card.Img variant="top" src="Tienda.png"  />
                    </Card>

                    <Card className="card" style={{borderTopLeftRadius: "10%", borderTopRightRadius: "10%"}}>
                        <Card.Body>
                            <Card.Title>Administrar Productos</Card.Title>
                            <Card.Text>
                            Aquí puedes realizar las operaciones de listar, crear, actualizar o eliminar un producto 
                            </Card.Text>
                            <Button onClick = {handleProduct} variant="danger" className="button_logout">ir a productos</Button>{' '}
                        </Card.Body>
                        <Card.Img variant="top" src="Productos.png" />
                    </Card> 
                </CardGroup>
            </>
            </div>
        </div>
    </Container>   
  )
}


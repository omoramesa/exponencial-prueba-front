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
                        <Card.Img variant="top" src="holder.js/100px180"  />
                        <Card.Body>
                            <Card.Title>Administrar Tiendas</Card.Title>
                            <Card.Text>
                            Aquí puedes realizar las operaciones de listar, crear, actualizar o eliminar una tienda 
                            </Card.Text>
                            <Button onClick = {handleStore} variant="danger" className="button_logout">Go to stores</Button>{' '}
                        </Card.Body>
                    </Card>

                    <Card className="card" style={{borderTopLeftRadius: "10%", borderTopRightRadius: "10%"}}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Administrar Productos</Card.Title>
                            <Card.Text>
                            Aquí puedes realizar las operaciones de listar, crear, actualizar o eliminar un producto 
                            </Card.Text>
                            <Button onClick = {handleProduct} variant="danger" className="button_logout">Go to products</Button>{' '}
                        </Card.Body>
                    </Card> 
                </CardGroup>
            </>
            </div>
        </div>
    </Container>   
  )
}


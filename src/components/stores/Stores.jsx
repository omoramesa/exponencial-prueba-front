import React from 'react'
import { Container } from 'react-bootstrap'
import { StoreList } from './StoreList'

export function Stores() {
  return (
    <Container className="store_container">
      <header>
        <img
          src="TiendaBanner.png"
        />
        
        <hr />
      </header>
        <h1>Bienvenido (Administración de Tiendas)</h1>
        
        { <StoreList/> }
        

    </Container>
  )
}


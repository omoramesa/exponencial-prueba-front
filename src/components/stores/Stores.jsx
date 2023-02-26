import React from 'react'
import { Container } from 'react-bootstrap'
import { StoreList } from './StoreList'

export function Stores() {
  return (
    <Container className="store_container">
      <header>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/prueba-tecnica-makaia.appspot.com/o/images%2FprismaFinal.png?alt=media&token=48c3b15d-e7e1-4b6e-b842-b40369b21595"
          alt="logo prisma"
        />
        
        <hr />
      </header>
        <h1>Bienvenido </h1>
        
        { <StoreList/> }
        

    </Container>
  )
}


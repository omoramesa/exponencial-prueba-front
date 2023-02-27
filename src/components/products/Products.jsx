import React from 'react'
import { Container } from 'react-bootstrap'
import { ProductList } from './ProductList'

export function Products() {
  return (
    <Container className="product_container">
      <header>
        <img
          src="TiendaBanner.png"
        />
        
        <hr />
      </header>
        <h1>Bienvenido (Administración de productos)</h1>
        
        { <ProductList/> }
        

    </Container>
  )
}


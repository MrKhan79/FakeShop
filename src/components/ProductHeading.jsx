import React from 'react'
import styled from 'styled-components'

const Container = styled.h2`
    height: 100px;
    width: 100%;
    background-color: white;
    color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    font-weight: 500;
` 

const ProductHeading = () => {
  return (
    <Container>
    Our Products
</Container>
  )
}

export default ProductHeading

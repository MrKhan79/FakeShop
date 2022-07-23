import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';


const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Products = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios
    .get(
      "https://fakestoreapi.com/products"
    )
    .then((res) => {
      setData(res.data);
    });
    


  },[])

  return (
    <Container>
    {data.map(item=>(
        <ProductItem item={item} key={item.id}/>
    ))}
  </Container>
  )
}

export default Products

import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Newsletter from './Newsletter'
import styled from 'styled-components'
import axios from 'axios'
import { useParams, NavLink } from 'react-router-dom'
import { useState,useEffect } from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const MainContainer = styled.div`
display: flex;
flex-direction: column;
;

`
const Container = styled.div`
display: flex;
width: 80%;
height: 60%;
flex-direction: row;
margin-top: 10%;
padding: 0 5%;
padding-bottom: 5%;
`
const Left = styled.div`
display: flex;
flex: 1;

`
const Right = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
flex: 1;
`

const Description = styled.div`
`
const Image = styled.img`
width: 50%;
`
const Title = styled.h1`
`
const Rating = styled.h5`
display: flex;
flex-direction: row;
align-items: center;
`
const Stars = styled.h5`
display: flex;
flex-direction: row;
color: gold;
`
const Button = styled.button`
padding:10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
margin-right: 15px;
margin-top: 15px;
`;

const Buttons = styled.div`
display: flex;
flex-direction: row;
`
const Price = styled.h3`
`
const Btn = styled.button`
margin-top: 5%;

display: flex;
justify-content: center;
align-items: center;
font-size:20px;
padding:10px;
background-color: teal;
color: white;

`

const ProductDetails =  () => {
const {itemId} = useParams()
const [data, setData] = useState([])
const [rate, setRate] = useState([])

useEffect(()=>{
    axios
    .get(
        `https://fakestoreapi.com/products/${itemId}`
    )
    .then((res) => {
      setData(res.data);
        setRate(res.data.rating)
});
    


  },[itemId])

  const stars = (ranking)=>{
    console.log(ranking)
    if(ranking.rate>0.5 && ranking.rate<=1.5){
    return (<Stars>
        <StarIcon/>
        <StarBorderIcon/>
        <StarBorderIcon/>
        <StarBorderIcon/>
        <StarBorderIcon/>
        </Stars>
    )        
    }
    else if(ranking.rate>1.5 && ranking.rate<=2.5){
        return (<Stars>
            <StarIcon/>
            <StarIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
            </Stars>
        )        
        } else if(ranking.rate>2.5 && ranking.rate<=3.5){
            return (<Stars>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarBorderIcon/>
                <StarBorderIcon/>
                </Stars>
            )        
            } else if(ranking.rate>3.5 && ranking.rate<=4.5){
                return (<Stars>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarBorderIcon/>
                    </Stars>
                )        
                }else {
                    return (<Stars>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        </Stars>
                    )        
                }
}




  return (
    <MainContainer>
        <Navbar />
    <Container>
      <Left>
       <Image src={data.image} />
      </Left>
      <Right>
      <Title>{data.title}</Title>
      <Price>Deal Price: <span style={{color:"brown"}}>{data.price} $</span></Price>
      <Rating>{stars(rate)}&nbsp;{rate.rate}  <span style={{color:"gray"}}>&nbsp; &nbsp; &nbsp;|&nbsp; &nbsp; &nbsp;</span>{rate.count} Ratings</Rating>
      <Description>{data.description}</Description>
      <Buttons>
         <Button>SHOP NOW</Button>
         <Button>ADD TO CART</Button>
      </Buttons>
      <Buttons>
        <Btn>
        <ArrowBackIcon /> Back to home
        </Btn>
      </Buttons>
      </Right>
    </Container>
    <Newsletter />
    <Footer />
    </MainContainer>


  )
}

export default ProductDetails

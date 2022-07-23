import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { NavLink } from "react-router-dom";



const MainContainer = styled.div`
margin: 7px;
min-width: 320px;
max-width: 320px;
height: 380px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #f5fbfd;
margin-bottom: 50px;
`

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;
`;
const Image = styled.img`
height: 250px !important;
width: 70% !important;
z-index: 2;
`;

const Circle= styled.div`
width: 250px;
height: 250px;
border-radius: 50%;
background-color: white;
position:absolute;
`;
const Info= styled.div`
opacity: 0;
width: 100%;
height: 100%;
position:absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.7s ease;

&:hover{
    opacity: 100%;
}
`;

const Icon= styled.div`
width: 60px;
height: 60px;
border-radius:50%;
display: flex;
color: white;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
cursor: pointer;


&:hover{
    background-color:#e9f5f5 ;
    color: grey;
    transform: scale(1.1);
}
`;
const Title = styled.h4`
padding: 3px 3px;
`

const TitleContainer = styled.div`
margin: 5px 5px !important;



`

const ProductItem = ({item}) => {
 
  const link = "items/"+item.id

  return (
    <MainContainer>
        <TitleContainer>
        <Title>{item.title} ( <span style={{color: "green"}}>{item.price} $</span> )</Title>
        </TitleContainer>
    <Container>

        <Circle />
      <Image src={item.image} />
      <Info><span style={{color: "white"}}>Go to</span> 
          <NavLink to={link}>  <Icon >
              <ArrowCircleRightOutlinedIcon style={{fontSize: "50px"}}/>
          </Icon>
          </NavLink>
          {/* <Icon>
               <SearchOutlinedIcon />
          </Icon>
          <Icon>
               <FavoriteBorderOutlinedIcon />
          </Icon> */}
      </Info>
    </Container>
    </MainContainer>
  )
}

export default ProductItem

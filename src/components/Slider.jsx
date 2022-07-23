import React from 'react'
import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';
import { sliderItems } from '../data';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    justify-content: space-between;
    position: relative;
    padding-top: 50px;
    overflow: hidden;
`

const Arrow = styled.div`
height: 50px;
width: 50px;
background-color: #fff7f7;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === 'left' && "10px"};
right: ${props => props.direction === 'right' && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5 ;
z-index: 2;
`
const Wrapper =styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex*-100}vw);
    transition: all 1.5s ease;
`;

const Slide = styled.div`
display:flex;
align-items: center;
min-width: 100vw;
height: 100vh;
margin: 0;
padding: 0;
background-color: #${props=>props.bg};
`;
const ImgContainer = styled.div`

flex: 1;
display: flex;
height: 100%;
justify-content: center;
`;

const Image = styled.img`

height: 80%;
padding: 50px;

`;

const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`;


const Title = styled.h1`
font-size: 70px;
font-weight: 600;
`;
const Description = styled.p`
font-style: 20px;
margin: 50px 0px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
padding:10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;



const Slider = () => {

const [slideIndex, setSlideIndex] = useState(0)

const handleClick = (direction) => {
    if(direction==="right"){
        setSlideIndex(slideIndex<2? slideIndex+1:0)
    }
    if(direction==="left"){
        setSlideIndex(slideIndex>0? slideIndex-1:2)

    }

}
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")} >
<ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
          {sliderItems.map(item=>(
          <Slide bg={item.bg}>
           <ImgContainer>
           <Image src={item.img} />
           </ImgContainer>
           <InfoContainer>
               <Title>
                {item.title}
               </Title>
               <Description>
                  {item.desc}
               </Description>
               <Button>
                  SHOP NOW
               </Button>
           </InfoContainer>
           </Slide>
           ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
<ArrowRightIcon />
      </Arrow>
      </Container>
  )
}

export default Slider

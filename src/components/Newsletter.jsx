import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`;

const Description = styled.div`
font-size: 24px;
margin-bottom: 20px;
`;
const InputContainer = styled.div`
width: 50%;
height: 50px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lighgray;
`;
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`;
const Button = styled.button`
flex: 1;
border: none;
background-color:teal ;
color: white;
cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>
          Newsletter
      </Title>

          <Description>
           Get timely updates from your favorite products
          </Description>
      <InputContainer>
      <Input placeholder='Your Email' />
      <Button>
          <SendIcon />
          </Button>            
      </InputContainer>
    </Container>
  )
}

export default Newsletter

import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
height: 30px;
width: 100% !important;
position: sticky;
    top: 0;
    z-index: 5;
    background-color: white ;
    
`

const Wrapper =styled.div`
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
`

//////////Left/////////////

const Left = styled.div`
flex:1;
display: flex;
align-items: center;

`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
`    
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display:flex;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
border: none;
`

//////////Center/////////////


const Center = styled.div`
flex:1;
text-align: center;
`
const Logo = styled.h1`
    font-weight: bolder;
    
`


//////////Right/////////////


const Right = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
align-items: center;
`

const MenuItem =styled.div`
    font-size: 14px;
cursor: pointer;
margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
        <Left><Language>EN</Language>
        <SearchContainer>
         <Input/>
         <SearchIcon style={{color:"gray", fontSize:"16px"}} />
        </SearchContainer>
        </Left>
        
        <Center>
            <Logo>
            FakeShop.
            </Logo>
        </Center>
        <Right>
        <NavLink to='/'><MenuItem>HOME</MenuItem></NavLink>
        <MenuItem>LOGIN</MenuItem>
        <MenuItem>
        <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlinedIcon color="action" />
    </Badge>
        </MenuItem>
        
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar

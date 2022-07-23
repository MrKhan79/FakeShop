import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
font-weight:1000;
`;

const Desc = styled.p`
margin: 15px 0px;
/* font-size:12px; */
`;

const SocialContainer = styled.div`
display:flex;
`;

const SocialIcon = styled.div`
width: 40px;
height:40px;
border-radius: 50%;
color: white;
background-color: #${props =>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-left:20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 15px;
`;

const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
 margin: 0;
 padding: 0;
 list-style: none;
 display: flex;
 flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 15px;
    
`;
const ContactItem = styled.div`
    flex: 1;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
`;
const Payment =styled.img`
    padding-top: 10px;
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
          <Logo>SHAUK</Logo>
          <Desc>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          </Desc>
          <SocialContainer>
              <SocialIcon color="3B5999">
              <FacebookIcon />
              </SocialIcon>
              
              <SocialIcon color="E4405F">
              <InstagramIcon />
              </SocialIcon>
              
              <SocialIcon color="55ACEE">
              <TwitterIcon />
              </SocialIcon>
              
              <SocialIcon color="E60023">
              <PinterestIcon />
              </SocialIcon>
              
          </SocialContainer>
        </Left>
        <Center>
           <Title>Useful Links</Title>
           <List>
               <ListItem>Home</ListItem>
               <ListItem>Cart</ListItem>
               <ListItem>Man Fashion</ListItem>
               <ListItem>Woman Fashion</ListItem>
               <ListItem>Accessories</ListItem>
               <ListItem>My Account</ListItem>
               <ListItem>Order Tracking</ListItem>
               <ListItem>Wishlist</ListItem>
               <ListItem>Terms</ListItem>
           </List>
        </Center>
        <Right>
           <Title>
               Contact
           </Title>
           <ContactItem>
           <RoomIcon style={{marginRight:"10px"}} /> Bengaluru, 560103, Karnataka, India
           </ContactItem>
           <ContactItem>
          <LocalPhoneIcon style={{marginRight:"10px"}} /> +1 234 56 78 90
           </ContactItem>
           <ContactItem>
           <EmailIcon style={{marginRight:"10px"}} /> contact@shauk.com
           </ContactItem>
           <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>

    </Container>
  )
}

export default Footer

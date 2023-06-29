import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import  mobile  from '../responsive';


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })} 
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding:'10px 0px'})}
`
const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display:'none'})}
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  align-items: center;
  display: flex;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
  ${mobile({ width:'50px'})}
`

const Center = styled.div`
   flex:1;
   text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Poppins', sans-serif;
  ${mobile({ fontSize:'24px'})}
  `

const Right = styled.div`
     flex:1;
     display: flex;
     justify-content: flex-end;
     ${mobile({ justifyContent:'center'})}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 25px;
  ${mobile({ fontSize:'12px',marginLeft:'10px'})}
`

const Navbar = () => {


  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input placeholder='Search'/>
            <SearchIcon style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ASRA'S</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartRoundedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar

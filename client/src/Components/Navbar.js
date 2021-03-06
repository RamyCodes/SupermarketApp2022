import { Badge, Button } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { useState } from "react";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 90 px;
  background-color: black; // or remove bc useless
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background-color: black;
  border-color: black;

`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 17px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: bold;
  color: white;
`;

export function getText(){
  return document.getElementById("searchTxt").value;  
}

const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity)

  return (
    <Container>
      <Wrapper>
          <Left>
          <Link style={{color: "black"}} to={`/Order/`}>
          <MenuItem>YOUR ORDERS</MenuItem>
          </Link>
          </Left>
          <Center>
        <Link style={{color: "black"}} to={`/Home/`}>
          <MenuItem>
          <Logo>Rabbit</Logo>
          </MenuItem>
          </Link>
        </Center>
        <Right>
          <Link style={{color: "black"}} to={`/Home`}>
          <MenuItem>HOME</MenuItem>
          </Link>
          <Link style={{color: "black"}} to={`/Register`}>
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link style={{color: "black"}} to={`/Cart`}>
          <MenuItem>
          <Badge badgeContent ={quantity} color="primary">
            <ShoppingCartOutlined />
          </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

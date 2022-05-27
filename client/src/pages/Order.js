import Announcement from "../Components/Announcement";
import React from 'react'
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  color: white;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 30px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: black;
  color: black;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;


const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid black;
  border-radius: 10px;
  padding: 20px;
  height: 30vh;
  background-color: black;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: green;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const [order, setOrder] = useState([]);
  let priceFinal = 0;
  useEffect(()=> {
    axios.get(`http://localhost:5000/api/orders`)
        .then( res => {
          console.log(res)
          setOrder(res.data)
        })
        .catch(err => {
          console.log(err)
        })
        
    },[])


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your order</Title>
        <Top>
        <Link style={{color: "white", background: "black"}} to={`/Product`}>
          <TopButton style={{color: "white"}}>GO BACK TO CATALOG</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
            <Hr />
            {order.map((order, index)=>(<Product>
            <ProductDetail>
              <Details>
              <ProductPrice>
                  <b>Order ID:</b> {order._id}
                  </ProductPrice>
                <ProductPrice>
                  <b>Products:</b> {order.products.item} ({order.products.quantity}) 
                  </ProductPrice>
                  <ProductPrice>
                  <b>Shipping address:</b> {order.address}
                  </ProductPrice>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
              <ProductPrice>
                 <b>Order status: </b> {order.status}
                 </ProductPrice>
              </ProductAmountContainer>
              <ProductPrice> <b>Order price: </b> {order.amount} EGP</ProductPrice>
            </PriceDetail>
          </Product>
          ))}

          {cart.products.map((product, index)=>(<Product>
            <ProductDetail>
            <Image img src={product.img} />
              <Details>
                <ProductName>
                  <b>Product:</b> {product.item}
                </ProductName>
                <ProductSize>
                  <b>Quantity:</b> {product.quantity}
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <Add />
                <ProductAmount>{product.quantity}</ProductAmount>
                <Remove />
              </ProductAmountContainer>
              <ProductPrice>{product.price} EGP</ProductPrice>
            </PriceDetail>
          </Product>
          ))}
            <Hr/>
          </Info>
          
          <Summary>
            <SummaryTitle style={{color: "white"}}>Order Details</SummaryTitle>
            <SummaryItem>
              <SummaryItemText style={{color: "white"}}>Subtotal</SummaryItemText>
              {order.map((order)=>(
              <SummaryItemPrice style={{color: "white"}}>{priceFinal += order.amount} EGP</SummaryItemPrice>
              ))}
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText style={{color: "white"}}>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice style={{color: "white"}}>0 EGP</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
            </SummaryItem>
            <SummaryItem type="total">
              <b>
              <SummaryItemText style={{color: "white"}}>Total</SummaryItemText>
              </b>
              <b>
              <SummaryItemPrice style={{color: "white"}}>{priceFinal} EGP</SummaryItemPrice>
              </b>
              
            </SummaryItem>
            <TopButton style={{width: "350px", color: "white", fontSize: 18}} disabled>PAID</TopButton>
          </Summary>
          
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;

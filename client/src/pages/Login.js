import styled from "styled-components";
import React, { Component } from 'react';
import Navbar from '../Components/Navbar';


const Container = styled.div`
  // background-image;
  // display: flex;
  // align-items: center;
  // justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  align-items: center;
  margin-left: 500px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Navbar/>      
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Button>SIGN IN</Button>
        </Form>
      </Wrapper>
      <ImgContainer>
            <Image img src={process.env.PUBLIC_URL + '/83846.jpg'} />
          </ImgContainer>
    </Container>
  );
};

export default Login;

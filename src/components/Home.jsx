import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3em;
  margin: 40px 0;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.5em;
  margin: 20px 0;
  color: #666;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  background-color: blue;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    background-color: #333;
  }
`;

function Home() {
  return (
    <Container className="bg-home">
      <Title>Welcome to My App</Title>
      <Subtitle>This is the home page</Subtitle>
      <Button to="/login">Log in</Button>
    </Container>
  );
}

export default Home;

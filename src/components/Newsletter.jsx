import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Mobile } from "../Responsive";

const Container = styled.div`
  height: 60vh;
  display: flex;
  background-color: #fcf5f5;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${Mobile({ paddingBottom: "10px" })}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${Mobile({ fontSize: "50px" })}
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${Mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  background: white;
  ${Mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  outline: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background: teal;
  color: white;
  cursor: pointer;
`;
function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favourite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;

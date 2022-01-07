import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { Mobile } from "../Responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${Mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "teal" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${Mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${Mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
  ${Mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 30px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${Mobile({ margin: "5px 15px" })}
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductAmountPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${Mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 10px;
`;

const SummaryTitle = styled.h1`
  display: flex;
  font-weight: 200;
  justify-content: center;
`;
const SummaryItem = styled.div`
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  background-color: teal;
  font-weight: 600;
  color: white;
  padding: 10px;
`;
function Cart() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <ProductImage src="https://media.istockphoto.com/photos/white-vneck-shirt-mock-up-picture-id700522018?k=20&m=700522018&s=612x612&w=0&h=WtUrlBAC5FAEvkazh-1L6swoAwJDzQMnBLdf9yfwMok=" />
                <Details>
                  <ProductName>
                    <b>Product:</b> T-shirt
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 123
                  </ProductId>
                  <ProductColor color="EEE" />
                  <ProductSize>
                    <b>Size:</b> 37.4
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountDetail>
                  <Add />
                  <ProductAmount> 2 </ProductAmount>
                  <Remove />
                </ProductAmountDetail>
                <ProductAmountPrice> $ 30</ProductAmountPrice>
              </PriceDetail>
            </Product>

            <Hr />

            <Product>
              <ProductDetail>
                <ProductImage src="https://media.istockphoto.com/photos/white-vneck-shirt-mock-up-picture-id700522018?k=20&m=700522018&s=612x612&w=0&h=WtUrlBAC5FAEvkazh-1L6swoAwJDzQMnBLdf9yfwMok=" />
                <Details>
                  <ProductName>
                    <b>Product:</b> T-shirt
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 123
                  </ProductId>
                  <ProductColor color="EEE" />
                  <ProductSize>
                    <b>Size:</b> 37.4
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountDetail>
                  <Add />
                  <ProductAmount> 2 </ProductAmount>
                  <Remove />
                </ProductAmountDetail>
                <ProductAmountPrice> $ 30</ProductAmountPrice>
              </PriceDetail>
            </Product>
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 60</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Fee</SummaryItemText>
              <SummaryItemPrice>$ 5.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>- $ 1.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 63.01</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;

import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content:center;
background-color: #f5fbfd;
position: relative;
`;
// const Circle = styled.div`
// width: 200px;
// height: 200px;
// border-radius: 50%;
// background-color: white;
// position:absolute
// `;
const Image = styled.img`
height: 75%;
z-index: 2;
`;
const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 3;
background-color: gray;
display: flex;
align-items: center;
justify-content:center;
`;
const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
background-color: white;
align-items: center;
justify-content:center;
margin: 10px
`;
function Product({ product }) {
  return (
    <Container>
      {/* <Circle /> */}
      <Image src={product.img}/>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
}

export default Product;

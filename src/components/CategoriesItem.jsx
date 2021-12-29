import styled from "styled-components";

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position:relative;
`
;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit:cover;
`;
const Info = styled.div`
position:absolute;
top: 0;
bottom: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width:100%;
height: 100%;

`;
const Title = styled.h1``;

const Button = styled.button`
padding: 5px;
font-size: 20px;
`;
function CategoriesItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}

export default CategoriesItem;

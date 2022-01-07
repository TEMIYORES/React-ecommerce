import styled from "styled-components";
import { categories } from "../data";
import CategoriesItem from "./CategoriesItem";
import { Mobile } from "../Responsive";
const Container = styled.div`
  display: flex;
  padding: 20px;
  ${Mobile({ padding: "0px", flexDirection: "column" })}
`;
function Categories() {
  return (
    <Container>
      {categories.map((item) => {
        return <CategoriesItem item={item} key={item.id} />;
      })}
    </Container>
  );
}

export default Categories;

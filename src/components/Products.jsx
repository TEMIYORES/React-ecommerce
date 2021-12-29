import styled from "styled-components";
import {popularProducts} from '../data'
import Product from "./Product";

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
function Products() {
    return (
        <Container>
            {
                popularProducts.map((product)=>{
                    return(
                        <Product product={product} key={product.id}/>
                    )
                })
            }
        </Container>
    )
}

export default Products

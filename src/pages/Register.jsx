import React from 'react'
import styled from 'styled-components';

const Container = styled.div``;
const Wrapper = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
const Agreement = styled.span``;
const Button = styled.button``;
function Register() {
    return (
        <Container>
           <Wrapper>
               <Form>
                   <Input placeholder="First Name"/>
                   <Input placeholder="Last Name"/>
                   <Input placeholder="Userame"/>
                   <Input placeholder="Password"/>
                   <Input placeholder="Confirm password"/>
                   <Agreement>By creating account, I hereby Accept the terms and conditions of <b>PRIVACY POLICY</b></Agreement>
                   <Button>CREATE</Button>
               </Form>
           </Wrapper> 
        </Container>
    )
}

export default Register
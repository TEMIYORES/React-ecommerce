import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
`;
function Announcement() {
  return <Container>Super Deal!, Free shipping over 50%</Container>;
}

export default Announcement;

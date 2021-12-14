import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <MainContainer>
        <Title>Free the Game</Title>
        <NavContainer>
          <StyledLink to="/">Homepage</StyledLink>
          <StyledLink to="/Profilepage">Profile</StyledLink>
          <StyledLink to="/loginpage">Login</StyledLink>
        </NavContainer>
      </MainContainer>
    </>
  );
};

export default Navbar;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #c9ada7;
`;
const Title = styled.div`
  font-size: 40px;
`;
const NavContainer = styled.div`
  color: black;
`;
const StyledLink = styled(Link)`
  padding: 0px 30px;
  font-size: 30px;
  text-decoration: none;
  a:visited {
    color: black;
  }
`;

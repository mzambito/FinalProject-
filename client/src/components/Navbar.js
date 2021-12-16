import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./logoutButton";
const Navbar = () => {
  return (
    <>
      <MainContainer>
        <Title>GamaHolics</Title>
        <NavContainer>
          <StyledLink to="/">Homepage</StyledLink>
          <StyledLink to="/Profilepage">Profile</StyledLink>
          <LoginButton />
          <LogoutButton />
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
  font-size: 50px;
`;
const NavContainer = styled.div`
  color: black;
`;
const StyledLink = styled(Link)`
  padding: 0px 30px;
  font-size: 30px;
  text-decoration: none;
  &:visited {
    color: black;
  }
  &:hover {
   border-radius: 5px;
   background: #780000;
`;

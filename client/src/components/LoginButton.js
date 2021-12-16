import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <Button onClick={() => loginWithRedirect()}>Log in</Button>
    )
  );
};

export default LoginButton;
const Button = styled.button`
  font-size: 25px;
  background-color: #c9ada7;
  border-radius: 5px;
  &:hover {
    background: #780000;
  }
`;

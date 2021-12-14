import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Loginpage = () => {
  const [email, setEmail] = useState(null);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  };

  useEffect(() => {
    fetch("/getEmail", handleChange)
      .then((res) => res.json())
      .then((data) => data.json());
  });

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <Container>
        <Title>Login</Title>
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label for="fullName">FirstName:</label>
        <input
          type="text"
          id="FirstName"
          name="FirstName"
          class="textInput"
          autocomplete="on"
          required
        />
        <label for="fullName">LastName:</label>
        <input
          type="text"
          id="LastName"
          name="LastName"
          class="textInput"
          autocomplete="on"
          required
        />
        <label>
          Password
          <input
            type="password"
            id="password"
            name="password"
            class="textInput"
            autocomplete="on"
            required
          />
        </label>
        <label for="confirmPass">Confirm Password</label>
        <input
          type="password"
          id="confirmPass"
          name="confirmPass"
          class="textInput"
          autocomplete="on"
          required
        />
        <Button type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Container>
    </form>
  );
};

export default Loginpage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
  box-sizing: ;
`;

const Title = styled.div`
display: flex
justify-content: center
align-items: center;
font-size:60px
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  margin: 40px;
  font-size: 30px;
  padding: 0px 20px;
`;

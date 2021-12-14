import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const Gamedetails = () => {
  const { _id } = useParams;
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    fetch(`/game/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setGameDetails(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <Header>Game details</Header>
      <Container>
        <Image src={gameDetails?.thumbnail} alt="image" />
      </Container>
    </Wrapper>
  );
};

export default Gamedetails;

const Wrapper = styled.div``;
const Header = styled.div`
  font-size: 30px;
`;
const Container = styled.div``;
const Image = styled.div``;

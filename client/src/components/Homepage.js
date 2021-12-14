import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
const Homepage = () => {
  const { id } = useParams();
  const [games, setGames] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games?rapidapi-key=269185a593msh542d17022fe52e8p159ae1jsnce9931a80e29",
      {
        method: "GET",
        header: "Access-Control-Allow-Origin",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setGames(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = (_id, event) => {
    event.stopPropagation();
    navigate(`/Gamedetails`);
  };

  return (
    <Wrapper>
      <Title>Game list</Title>
      <Container>
        {games?.map((games) => (
          <ItemContainer
            key={id}
            onClick={(e) => {
              handleClick(games._id, e);
            }}
          >
            <img src={games.thumbnail} alt="image" />
            <Gametitle>{games?.title}</Gametitle>
            <Genre>{games?.genre}</Genre>
          </ItemContainer>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Homepage;

const Wrapper = styled.div`
  background: #e70e02;
`;

const Title = styled.div`
  text-align: center;
  font-size: 60px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
`;

const ItemContainer = styled.div`
  background: white;
  border-radius: 5px;
`;

const Gametitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Genre = styled.div``;

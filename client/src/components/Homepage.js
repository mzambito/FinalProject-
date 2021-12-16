import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import CustomSelect from "./CustomSelect";
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

  const handleClick = (id, event) => {
    event.stopPropagation();
    navigate(`/Gamedetails/${id}`);
  };

  // const handleGenre = (event) => {
  //   setGenre(event.target.value);
  // };

  return (
    <Wrapper>
      <TitleContainer>
        <Title>Game list</Title>
      </TitleContainer>
      <Container>
        {games?.map((games, id) => (
          <ItemContainer
            key={id}
            onClick={(e) => {
              handleClick(games.id, e);
            }}
          >
            <img src={games.thumbnail} />
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
  background: #780000;
`;

const TitleContainer = styled.div`
  /* display: flex; */
`;

const Title = styled.div`
  text-align: center;
  font-size: 60px;
`;

// const FilterContainer = styled.div`
//   display: flex;
//   /* justify-content: flex-start; */
//   align-items: center;
//   margin: 40px auto;
//   width: 70%;
//   padding: 10px;
//   border-bottom: 2px solid #3c6e71;
//   color: #353535;
//   font-weight: bolder;
//   font-size: 30px;
// `;
// const SelectContainer = styled.div`
//   margin: 5px;
// `;
// const Select = styled.div`
//   width: 150px;
//   border: 2px solid #3c6e71;
//   border-radius: 5px;
//   margin-bottom: 10px;
//   margin-left: 20px;
//   font-size: 16px;
// `;

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

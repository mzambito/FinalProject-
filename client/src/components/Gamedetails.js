import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

const Gamedetails = () => {
  const { user, isAuthenticated } = useAuth0();
  const { id } = useParams();
  const [game, setGame] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key":
            "269185a593msh542d17022fe52e8p159ae1jsnce9931a80e29",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setGame(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    fetch(`/library?email=${user.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gameData: game,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <Header>{game?.title}</Header>
          <Thumbnail src={game?.thumbnail} alt="image" />
          <Button onClick={() => handleClick()}>
            Add to Profile's library
          </Button>
        </ImageContainer>
        <GameContainer>
          <About>About {game?.title}</About>
          <Description>{game?.description}</Description>
          <Url hrf={game?.game_url} target="_blank">
            {game?.title}
          </Url>
          <ScreenshotsContainer>
            {game?.screenshots.map((imgsrc) => {
              return <Screenshots src={imgsrc.image} alt="image" />;
            })}
          </ScreenshotsContainer>

          <BigContainer>
            <InfoContainer>
              <Header2>Additional information</Header2>
              <Genre>Genre: {game?.genre}</Genre>
              <Platform>Platform: {game?.platform}</Platform>
              <Publisher>Publisher: {game?.publisher}</Publisher>
              <Releasedate>Releasedate: {game?.release_date}</Releasedate>
            </InfoContainer>
            <SystemRequirements>
              <Header3>Minimum System Requirements</Header3>
              <Storage>
                Storage: {game?.minimum_system_requirements.storage}
              </Storage>
              <OS>OS: {game?.minimum_system_requirements.os}</OS>
              <Processor>
                Processor: {game?.minimum_system_requirements.processor}
              </Processor>
              <Memory>
                Memory: {game?.minimum_system_requirements.memory}
              </Memory>
              <Graphics>
                Graphics: {game?.minimum_system_requirements.graphics}
              </Graphics>
            </SystemRequirements>
          </BigContainer>
        </GameContainer>
      </Container>
    </Wrapper>
  );
};

export default Gamedetails;

const Wrapper = styled.div`
  background: #463f3a;
`;
const Url = styled.div``;
const BigContainer = styled.div`
  display: flex;
  gap: 20em; ;
`;
const Header = styled.div`
  padding: 0px 30px;
  font-size: 60px;
  font-weight: bold;
`;
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
`;
const Button = styled.button`
  font-size: 35px;
  background: #780000;
  border-radius: 5px;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 2em;
`;
const Thumbnail = styled.img`
  height: 350px;
  width: auto;
  display: flex;
  padding-top: 10px;
`;
const About = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  padding: 5px;
`;

const Description = styled.div`
  font-size: 30px;
  flex-wrap: wrap;
  display: flex;
  padding-top: 10px;
`;

const ScreenshotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3em;
`;
const Screenshots = styled.img`
  height: 250px;
  width: auto;
`;
const Header2 = styled.div`
  font-size: 40px;
  font-weight: bold;
  justify-content: flex-start;
  display: flex;
  padding: 20px 0px;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 20px;
  flex-direction: column;
`;
const Genre = styled.div``;
const Releasedate = styled.div``;
const Publisher = styled.div``;
const Platform = styled.div``;

const SystemRequirements = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 20px;
  flex-direction: column;
`;
const Header3 = styled.div`
  font-size: 40px;
  font-weight: bold;
  align-items: flex-start;
  display: flex;

  padding: 20px 0px;
`;
const Storage = styled.div``;
const OS = styled.div``;
const Processor = styled.div``;
const Memory = styled.div``;
const Graphics = styled.div``;

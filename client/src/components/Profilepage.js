import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Profilepage = () => {
  const { user, isAuthenticated } = useAuth0();
  const [library, setLibrary] = useState([]);

  const handleClick = (id) => {
    console.log(id);
    const gameIndex = library.findIndex((game) => {
      if (game.id === id) return game;
    });
    library.splice(gameIndex, 1);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetch("/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          picture: user.picture,
          nickname: user.nickname,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setLibrary(data.result.library);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, []);
  console.log(library);

  return (
    isAuthenticated && (
      <MainContainer>
        <>
          <User>
            <img src={user?.picture} />
            <Welcome>Welcome! {user?.nickname} :)</Welcome>
          </User>
          <Container>
            <Library>Library</Library>
            {library?.map((library) => (
              <Itemcontainer>
                <ImageContainer>
                  <img src={library?.gameData?.thumbnail} />
                </ImageContainer>
                <InfoContainer>
                  <Title>Title:</Title>
                  <Gametitle>{library?.gameData?.title}</Gametitle>
                  <Description>
                    <TitleDescription>Description:</TitleDescription>
                    {library?.gameData?.short_description}
                  </Description>
                  <GenreInfo>Genre:</GenreInfo>
                  <Genre>{library?.gameData?.genre}</Genre>
                </InfoContainer>
                <ButtonContainer>
                  <Button
                    onClick={() => {
                      handleClick(library?.gameData?.id);
                    }}
                  >
                    Delete
                  </Button>
                </ButtonContainer>
              </Itemcontainer>
            ))}
          </Container>
        </>
      </MainContainer>
    )
  );
};

export default Profilepage;
const MainContainer = styled.div`
  background: #463f3a; ;
`;

const Container = styled.div`
  background: #780000;
  border: 5px solid;
`;
const User = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Welcome = styled.div`
  padding: 45px;
  font-size: 30px;
`;
const Gametitle = styled.div``;
const Itemcontainer = styled.div`
  display: flex;
`;
const Description = styled.div``;
const Genre = styled.div``;
const Library = styled.div`
  font-size: 40px;
  font-weight: bold;
  padding: 25px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
const InfoContainer = styled.div`
  font-size: 25px;
`;
const ImageContainer = styled.div`
  padding: 0px 25px 25px;
`;
const GenreInfo = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
const TitleDescription = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background: #c9ada7;
  border-radius: 5px;
  margin: 50px;
  padding: 10px 20px;
`;
const ButtonContainer = styled.div``;

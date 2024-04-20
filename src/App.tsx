import { Button, Grid, GridItem, Show, useColorMode } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setPlatorm] = useState<Platform | null>(null);

  const templateArea = {
    base: '"nav" "main"',
    lg: '"nav nav" "aside main"', // wider then 1024
  };

  const templeteColumns = {
    base: "1fr",
    lg: "250px 1fr",
  };

  return (
    <>
      <Grid templateAreas={templateArea} templateColumns={templeteColumns}>
        <GridItem area="nav">
          <Navbar></Navbar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList onGenreSelection={(genre) => setGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onPlatformSelection={(platform) => setPlatorm(platform)}
          ></PlatformSelector>
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

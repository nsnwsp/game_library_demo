import { Button, Grid, GridItem, Show, useColorMode } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import { Game } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
            <GenreList
              onGenreSelection={(genre) =>
                setGameQuery({ ...gameQuery, genre })
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onPlatformSelection={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

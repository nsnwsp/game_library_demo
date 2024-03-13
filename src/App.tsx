import { Button, Grid, GridItem, Show, useColorMode } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const templateArea = {
    base: '"nav" "main"',
    lg: '"nav nav" "aside main"', // wider then 1024
  };
  return (
    <>
      <Grid templateAreas={templateArea}>
        <GridItem area="nav">
          <Navbar></Navbar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

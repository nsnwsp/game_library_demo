import { Button, Grid, GridItem, Show, useColorMode } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const templateArea = {
    base: '"nav" "main"',
    lg: '"nav nav" "aside main"', // wider then 1024
  };
  return (
    <>
      <Grid templateAreas={templateArea}>
        <GridItem area="nav" bg="coral">
          nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

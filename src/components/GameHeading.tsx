import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery?.platform?.name || ""} ${
    gameQuery?.genre?.name || ""
  } Games`;

  return (
    <Heading paddingLeft={3} paddingBottom={2} as="h1">
      {heading}
    </Heading>
  );
}

export default GameHeading;

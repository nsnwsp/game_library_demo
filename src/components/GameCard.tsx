import { Card, CardBody, Heading, Text, Image, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import GameCriticScore from "./GameCriticScore";
import getCroppedImageUrl from "../services/image-url";
import EmojiScore from "./EmojiScore";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card
      _hover={{ transform: "scale(1.05)" }}
      borderRadius={10}
      overflow="hidden"
    >
      <Image src={getCroppedImageUrl(game.background_image)} alt="game_image" />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <GameCriticScore score={parseInt(game.metacritic)} />
        </HStack>
        <Heading size="md">{game.name}</Heading>
        <EmojiScore rating={game.rating_top}></EmojiScore>
      </CardBody>
    </Card>
  );
}

export default GameCard;

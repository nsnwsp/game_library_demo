import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

interface Props {
  image: string;
  name: string;
  description: string;
}

function GameGridItem({ image, name, description }: Props) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt="game_image" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
          <Text color="red.600" fontSize="2xl">
            COMING SOON
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default GameGridItem;

import {
  HStack,
  List,
  ListItem,
  SkeletonText,
  Text,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onGenreSelection: (genre: Genre) => void;
}

function GenreList({ onGenreSelection }: Props) {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading && <Spinner />}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={3}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={10}
                src={genre.image_background}
              ></Image>
              <Button variant="link" onClick={() => onGenreSelection(genre)}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;

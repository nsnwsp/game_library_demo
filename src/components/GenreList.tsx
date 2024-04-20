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
import { useState } from "react";

interface Props {
  onGenreSelection: (genre: Genre) => void;
}

function GenreList({ onGenreSelection }: Props) {
  const { data, error, isLoading } = useGenres();
  const [highlightedGenre, setHighlitghted] = useState<Genre | null>(null); // should I receive the current selected genre from the app component?

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
              <Button
                fontWeight={
                  highlightedGenre?.id === genre.id ? "bold" : "normal"
                }
                variant="link"
                onClick={() => {
                  setHighlitghted(genre);
                  onGenreSelection(genre);
                }}
              >
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

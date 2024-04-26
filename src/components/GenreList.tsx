import {
  HStack,
  List,
  ListItem,
  SkeletonText,
  Text,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { useState } from "react";

interface Props {
  onGenreSelection: (genre: Genre) => void;
}

function GenreList({ onGenreSelection }: Props) {
  const { data, error, isLoading } = useGenres();
  const [highlightedGenre, setHighlitghted] = useState<Genre | null>(null); // should I receive the current selected genre from the app component?

  if (isLoading) return <Spinner />;
  return (
    <>
      {error && <Text>{error}</Text>}

      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={3}>
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={10}
                src={genre.image_background}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign="left"
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

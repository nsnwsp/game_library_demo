import {
  HStack,
  List,
  ListItem,
  SkeletonText,
  Text,
  Image,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

function GenreList() {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading && (
        <ul>
          <li>
            <SkeletonText />
          </li>
          <li>
            <SkeletonText />
          </li>
          <li>
            <SkeletonText />
          </li>
          <li>
            <SkeletonText />
          </li>
          <li>
            <SkeletonText />
          </li>
        </ul>
      )}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={3}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={10}
                src={genre.image_background}
              ></Image>
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;

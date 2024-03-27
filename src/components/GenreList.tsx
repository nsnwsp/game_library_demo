import { SkeletonText, Text } from "@chakra-ui/react";
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
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GenreList;

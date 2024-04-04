import useData from "./useData";
import { Genre } from "./useGenres";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: string;
}

export interface Platform {
  id: number;
  slug: string;
}
function useGames(selectedGenre: Genre | null) {
  return useData<Game>("/games", { params: { genre: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
}

export default useGames;

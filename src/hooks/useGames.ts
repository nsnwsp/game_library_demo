import useData from "./useData";

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
function useGames() {
  return useData<Game>("/games");
}

export default useGames;

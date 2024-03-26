import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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

interface FetchGameResponse {
  count: number;
  results: Game[];
}

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(Boolean);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
}

export default useGames;

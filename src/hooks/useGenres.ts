import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

function useGenres() {
  return useData<Genre>("/genres");
}

// alternativamente, con arrow function:
// const useGenres = () => useData<Genre>("/genres");

export default useGenres;

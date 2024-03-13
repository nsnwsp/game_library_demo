import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "124d2bbf19734cb3b43f031fb5e0e3b5",
  },
});

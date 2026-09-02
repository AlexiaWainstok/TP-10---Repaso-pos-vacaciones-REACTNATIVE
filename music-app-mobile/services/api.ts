import axios from "axios";

const API_URL = "https://itunes.apple.com/search";

export const searchMusic = async (search: string) => {
  const response = await axios.get(API_URL, {
    params: {
      term: search,
      entity: "song",
      limit: 30,
    },
  });

  return response.data.results;
};
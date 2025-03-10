import axios from "axios";
import { ImageItem } from "../components/ImageCard/ImageCard";

const keyUnsplash = "O-LOnRWHqyvxv1velTIsZ80G62iIX12mrAE3fPe_Osw";

export const fetchArticles = async (
  query: string,
  page: number
): Promise<ImageItem[]> => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${keyUnsplash}`
  );
  console.log(response.data);
  return response.data.results;
};

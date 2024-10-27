import axios from "axios";
import { ApiResponse } from "./components/App/App.types";

export const fetchPicture = async (
  page: number,
  query: string
): Promise<ApiResponse> => {
  const { data } = await axios.get<ApiResponse>(
    `https://api.unsplash.com/search/photos?client_id=e0v6IZkEQ3woH7MCLwAwneAwPX47vCLCwy_Ib4xSlBc&query=${query}&page=${page}&per_page=12`
  );
  return data;
};

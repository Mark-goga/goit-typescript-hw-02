import axios from "axios";
import { imageTypes } from "./types";
axios.defaults.baseURL = 'https://api.unsplash.com';

interface data {
  results: imageTypes[];
  total: number;
  total_pages: number;
}
export async function fetchImage(topic: string , currentPage: number): Promise<data> {
  return axios.get('/search/photos', {
    params: {
      query: topic,
      page: currentPage,
      per_page: 15,
      client_id: '4lPpgfIwquxrwW2Y4Z9g-Sf3OghRnBXDmckE5MFn8Ww'
    }
  }).then(response => {
      return response.data;
    })
}
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54259802-cdd8f9ab8b839644c91fdf63a';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: PER_PAGE,
    },
  });

  return response.data;
}
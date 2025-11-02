import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '53020788-f0e72ace7309c782074e3a3d3';
const PER_PAGE = 15;
export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: PER_PAGE,
  };
  const { data } = await axios.get(BASE_URL, { params });
  return data;
}
export { PER_PAGE };

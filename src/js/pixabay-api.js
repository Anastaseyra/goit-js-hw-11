import axios from 'axios';

const API_KEY = '47683797-671cdc264b1a4ae65b7ce6d71';
const URL = 'https://pixabay.com/api/';

export function searchImage(search) {
  return axios
    .get(URL, {
      params: {
        key: API_KEY,
        q: search,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetch:', error);
      throw error;
    });
}
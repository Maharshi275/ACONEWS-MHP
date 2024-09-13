import axios from 'axios';

const API_KEY = '33ca7f771bf0f20e6b178a2e557a7d78'; 
const BASE_URL = 'https://gnews.io/api/v4';

export const fetchNews = async (keyword = '', page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        q: keyword || 'latest',
        token: API_KEY,
        lang: 'en',
        page,
        max: 10, // Articles per page
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching news');
  }
};

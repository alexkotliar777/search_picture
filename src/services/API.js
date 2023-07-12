import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = async (query, page) => {
  const params = new URLSearchParams({
    q: query,
    key: '37532093-f42db054d67de29d8b9453f79',
    per_page: 12,
    page,
    orientation: 'horizontal',
    image_type: 'photo',
  });
  const response = await axios.get(`/?${params}`);
  const data = response.data;
  console.log(data);
  return data;
};
// fetchImages("cat",1)

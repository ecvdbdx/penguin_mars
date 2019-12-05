import axios from 'axios';
import secret from './secret.js';

const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';

const fetchRoverPhotos = (roverName, params) => {
  return axios.get(`${url}${roverName}/photos`, { params });
};

const fetchAllRoverPhotos = params => {
  params = {
    ...params,
    api_key: secret.apiKey
  };

  Promise.all([
    fetchRoverPhotos('curiosity', params),
    fetchRoverPhotos('spirit', params),
    fetchRoverPhotos('opportunity', params)
  ]).then(responses => {
    responses.forEach(response => {
      console.log(response.data);
    });
  });
};

export { fetchRoverPhotos, fetchAllRoverPhotos };

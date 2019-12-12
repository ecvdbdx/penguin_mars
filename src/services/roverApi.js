import axios from 'axios';
import secret from '../secret.js';

const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';

const fetchRoverPhotos = (roverName, date) => {
  const params = {
    api_key: secret.apiKey,
    earth_date: date
  };
  return axios.get(`${url}${roverName}/photos`, { params });
};

const fetchAllRoverPhotos = () => {
  return new Promise((resolve, reject) => {
    return Promise.all([
      fetchRoverPhotos('curiosity', '2019-7-13'),
      fetchRoverPhotos('curiosity', '2018-3-14'),
      fetchRoverPhotos('spirit', '2007-7-13'),
      fetchRoverPhotos('spirit', '2005-7-13'),
      fetchRoverPhotos('spirit', '2009-7-13'),
      fetchRoverPhotos('opportunity', '2004-7-13'),
      fetchRoverPhotos('opportunity', '2014-7-13'),
      fetchRoverPhotos('opportunity', '2015-6-30')
    ])
      .then(responses => {
        const photos = responses.map(response => response.data.photos).flat();
        // 1. Retirer les doublons
        // 2. Mélanger le tableau
        resolve(photos);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default fetchAllRoverPhotos;

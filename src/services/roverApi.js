import axios from 'axios';
import secret from '../secret.js';
import shuffleArray from './../helpers/functions/shuffleArray';

const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';

const fetchRoverPhotos = (roverName, date) => {
  const params = {
    api_key: secret.apiKey,
    earth_date: date
  };
  return axios.get(`${url}${roverName}/photos`, { params });
};

const removeDuplicates = photos => {
  return photos.filter((photo, index) => {
    if (index === 0) return true;
    const camera = photo.camera.full_name;
    const rover = photo.rover.name;
    const previousCamera = photos[index - 1].camera.full_name;
    const previousRover = photos[index - 1].rover.name;
    if (camera !== previousCamera || rover !== previousRover) return true;
    return false;
  });
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
        let photos = responses.map(response => response.data.photos).flat();
        photos = shuffleArray(removeDuplicates(photos));
        resolve(photos);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default fetchAllRoverPhotos;

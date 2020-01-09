import React from 'react';
import fetchAllRoverPhotos from './services/roverApi.js';
import CardList from './components/CardList';
import Filter from './components/Filter';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      photos: [],
      rovers: [],
      cameras: []
    };
  }

  componentDidMount() {
    fetchAllRoverPhotos({ earth_date: '2019-7-13' })
      .then(photos => {
        this.setState({ photos });
        this.getRoverFilter(photos);
        this.getCameraFilter(photos);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getRoverFilter(photos) {
    const rovers = photos.reduce((acc, photo) => {
      const obj = {
        id: photo.rover.id,
        name: photo.rover.name
      };

      if (!acc.length) {
        acc.push(obj);
      } else {
        const isIn = acc.some(rover => rover.id === photo.rover.id);
        if (isIn) {
          return acc;
        } else {
          acc.push(obj);
        }
      }
      return acc;
    }, []);
    this.setState({ rovers });
  }

  getCameraFilter(photos) {
    const cameras = photos.reduce((acc, photo) => {
      const obj = {
        id: photo.camera.id,
        fullName: `${photo.camera.full_name} (${photo.rover.name})`
      };

      if (!acc.length) {
        acc.push(obj);
      } else {
        const isIn = acc.some(camera => camera.id === photo.camera.id);
        if (isIn) {
          return acc;
        } else {
          acc.push(obj);
        }
      }
      return acc;
    }, []);
    this.setState({ cameras });
  }

  renderFilter() {
    return (
      <div className="filter-container">
        <Filter rovers={this.state.rovers} cameras={this.state.cameras} />
      </div>
    );
  }

  renderGallery() {
    return (
      <div className="gallery">
        <CardList photos={this.state.photos} />
      </div>
    );
  }

  render() {
    const filter = this.renderFilter();
    const content = this.renderGallery();

    return (
      <>
        {filter}
        {content}
      </>
    );
  };
};

export default App;

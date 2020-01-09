import React from 'react';
import fetchAllRoverPhotos from './services/roverApi.js';
import CardList from './components/CardList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    fetchAllRoverPhotos({ earth_date: '2019-7-13' })
      .then(photos => {
        this.setState({ photos });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderGallery() {
    return <CardList photos={this.state.photos} />;
  }

  render() {
    const content = this.renderGallery();
    return <div className="gallery">{content}</div>;
  }
}

export default App;

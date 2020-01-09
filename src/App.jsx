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
      .then(photos => this.setState({ photos }))
      .catch(error => {
        console.log(error);
      });
  }

  renderFilter() {
    return (
      <div className="filter-container">
        <Filter rovers={this.state.rovers} cameras={this.state.cameras}/>
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

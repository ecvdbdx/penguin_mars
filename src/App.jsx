import React from 'react';
import { fetchAllRoverPhotos } from './api.js';
import CardList from './components/CardList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    fetchAllRoverPhotos({ earth_date: '2019-7-12' })
      .then(responses => {
        const photos = responses
          .map(response => response.data)
          .reduce((acc, item) => {
            acc = [...acc, ...item.photos];
            return acc;
          }, []);

        this.setState({ photos });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderGallery() {
    return (
      <CardList photos={this.state.photos} />
    );
  }

  render() {
    const content = this.renderGallery();

    return (
      <div>
        <header>
          <h1>Mars App</h1>
        </header>
        {content}
      </div>
    );
  };
};

export default App;

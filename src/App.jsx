import React from 'react';
import { fetchRoverPhotos, fetchAllRoverPhotos } from './api.js';
import './App.css';

function App() {
  fetchAllRoverPhotos({ earth_date: '2019-7-12' });
  return (
    <div>
      <header>
        <h1>Mars App</h1>
      </header>
    </div>
  );
}

export default App;

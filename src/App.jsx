import React from 'react';
import { fetchRoverPhotos, fetchAllRoverPhotos } from './api.js';
import Card from './components/Card';
import './App.css';

function App() {
  fetchAllRoverPhotos({ earth_date: '2019-7-12' });
  return (
    <div>x
      <header>
        <h1>Mars App</h1>
      </header>
    </div>
  );
}

export default App;

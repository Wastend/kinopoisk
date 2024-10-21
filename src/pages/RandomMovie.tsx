import React, { useState } from 'react';
import axios from 'axios';
import { Movie } from '../services/movie';

const API_URL = 'https://api.kinopoisk.dev/v1.4/movie/random';

function RandomMovie() {
  const [movie, setMovie] = useState<Movie | null>(null);

  const fetchRandomMovie = async () => {
    const response = await axios.get(API_URL, {
      params: {
        token: process.env.REACT_APP_KINOPOISK_TOKEN,
      },
    });
    setMovie(response.data);    
  };
  

  return (
    <div>
      <h1>Random Movie</h1>
      <button onClick={fetchRandomMovie}>Get Random Movie</button>
      {movie && (
        <div>
          <h2>{movie.name}</h2>
          <p>{movie.description}</p>
        </div>
      )}
    </div>
  );
}

export default RandomMovie;

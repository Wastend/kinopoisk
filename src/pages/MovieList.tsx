import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'https://api.kinopoisk.dev/v1.4/movie/search';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (searchQuery) {
      fetchMovies();
    }
  }, [page, searchQuery]);

  useEffect(() => {
    document.title = 'Kinopoisk';
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(API_URL, {
        params: {
          query: searchQuery,
          page,
          limit: 10,
        },
        headers: {
          'X-API-KEY': process.env.REACT_APP_KINOPOISK_TOKEN, // Токен API из .env
        },
      });
      setMovies(response.data.docs);
    } catch (err) {
      setError('Error fetching data. Please try again.');
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setPage(1);  // Сброс страницы при новом запросе
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={handleSearch} 
        placeholder="Search for a movie..." 
      />
      
      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}
      
      <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <h2>{movie.name || movie.alternativeName}</h2>
            </Link>
            <p>{movie.year}</p>
          </div>
        ))}
      </div>
      
      <div>
        <button disabled={page === 1} onClick={() => handlePageChange(page - 1)}>Previous</button>
        <button onClick={() => handlePageChange(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default MovieList;

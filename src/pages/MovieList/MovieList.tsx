import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Magnifier from '../../components/svg/Magnifier';
import './MovieList.css'

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
  }, [page]);

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
          limit: 12,
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

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <main>
      <div className="container">
        <div className="movie-list-block">
          <h1>Search Movies</h1>
          <div className="search-block">
            <input
              type="text"
              value={searchQuery}
              className="movie-list-search"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a movie..."
            />
            <button onClick={() => {
              setPage(1);
              fetchMovies()
            }}>
              <Magnifier />
            </button>
          </div>

          {loading ? <p>Loading...</p> : null}
          {error ? <p>{error}</p> : null}

          <ul className='movies_list'>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <div className="movie-top">
                    <img src={movie.poster.url} alt="poster" />
                    <h2>{movie.name || movie.alternativeName}</h2>
                  </div>
                  <div className="movie-bottom">
                    <ul className="movie-genres">
                      {movie.genres.map(el =>
                        <li key={el.name}>
                          {el.name}
                        </li>
                      )}

                    </ul>
                    <p className='movie-year'><strong>Год Производства:</strong> {movie.year}</p>
                  </div>

                </Link>

              </li>
            ))}
          </ul>

          <div className="controls_tab">
            <button disabled={page === 1} onClick={() => handlePageChange(page - 1)}>Previous</button>
            <button onClick={() => handlePageChange(page + 1)}>Next</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MovieList;

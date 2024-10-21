import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './pages/MovieList/MovieList.tsx';
import MovieDetail from './pages/MovieDetail/MovieDetail.tsx';
import RandomMovie from './pages/RandomMovie/RandomMovie.tsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/random" element={<RandomMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

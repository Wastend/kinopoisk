import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './pages/MovieList.tsx';
import MovieDetail from './pages/MovieDetail.tsx';
import RandomMovie from './pages/RandomMovie.tsx';
import './App.css';

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

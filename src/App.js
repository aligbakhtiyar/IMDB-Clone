import './App.css';
// import { useEffect, useState } from 'react';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/Header/Header';
import Home from './pages/Home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movie';



function App() {
  return (
    <div className="App">
     <Router>
      <Header />
        <Routes> 
           <Route index element={<Home />}></Route>
           <Route path="movie/:id" element={<Movie />}></Route>
           <Route path="movies/:type" element={<MovieList />}></Route>
           <Route path="/*" element={<Home />}></Route>
        </Routes>
    </Router> 
    </div> 
  );
}

export default App;

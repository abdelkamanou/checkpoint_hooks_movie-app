import React,{useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "./Components/MovieList";
import {tabldata} from "./tabldata"
import {SerachTitle,SearchRate} from "./Components/Filter"
import Addmovie from "./Components/Addmovie"
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Open from "./Components/Open"


function App() {

  const [moviesList, setMoviesList] = useState(tabldata);
  const addMovie = (i) => {
    setMoviesList([...moviesList, i]);
  };


  const [searchrate, setSearchRate] = useState(0);
  const filtredmoviesrate = (movie)=> setSearchRate(movie);

  const [serachTitle, setSearchTitle] = useState("");
  const filtredmovies =(movie)=> setSearchTitle(movie)


  return (
    <BrowserRouter>
    <Switch>
    <Route
          path="/:Titl"
          exact
          render={() => (
          <Open movies={moviesList}/>
          )}
        />
    <div className="App">

       <SearchRate Rate={searchrate} setRate={setSearchRate} filtredmoviesrate={filtredmoviesrate} />
      <SerachTitle filtredmovies ={filtredmovies} />
      <div>
         <Addmovie addMovie={addMovie} /></div>
      <MovieList movies = {moviesList} serachTitle ={serachTitle} srate={searchrate} />

    </div>
    </Switch>
    </BrowserRouter>
  );
};

export default App;

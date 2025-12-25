import React, { useState } from "react";
import Movie from "../Movie";
import MovieForm from "./MovieForm";
import EditMovieForm from "./EditMovieForm";

const movies1 = [
  {
    title: "Captain America - The First Avenger",
    hall: 2,
    price: 350,
    poster: "https://m.media-amazon.com/images/I/51Xp+8qDCbL._AC_UF350,350_QL50_.jpg"
  },
  {
    title: "The Papillon",
    hall: 1,
    price: 300,
    poster: "https://m.media-amazon.com/images/M/MV5BMjIxMTMyOTE2NF5BMl5BanBnXkFtZTgwMDYyNzY1NTM@._V1_.jpg"
  },
  {
    title: "The Lost City of Z",
    hall: 5,
    price: 350,
    poster: "https://m.media-amazon.com/images/M/MV5BZmU2ODIyMWItMjU3Zi00ZmVhLWIyNDAtMWE5OWU2ZDExMGFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    title: "Klaus",
    hall: 3,
    poster: "https://m.media-amazon.com/images/I/7128yjOjl9L.jpg"
  },
  {
    title: "Bullet Train",
    poster: "https://m.media-amazon.com/images/I/71INz6LX8aL._AC_UF894,1000_QL80_.jpg"
  }
];


function Movies() {
  const date = new Date().toLocaleDateString();
  const [movies, setMovies] = useState(movies1);
  const [editingMovie, setEditingMovie] = useState(null);

  const handleInput = (movieTitle, input) => {
    alert(`Dodelili ste "${input}" za film "${movieTitle}"`);
  };

  const addNewMovie = (data) => {
    const newMovie = {
      title: data.name,
      hall: data.hall,
      price: data.ticketPrice,
      poster: data.poster
    };
  setMovies(prev => [...prev, newMovie]);
  };

  const editMovie = (updatedMovie) => {
    setMovies(prev => prev.map(m => m ===editingMovie ? updatedMovie : m));
    setEditingMovie(null);
  }

  return (
    <>
      <p><strong>Repertoar za danas: {date}</strong></p>


      {editingMovie && (
      <EditMovieForm
        movie={editingMovie}
        onEditMovie={editMovie}
      />
)}

      {movies.map((movie, index) => (
        <Movie 
          key={index}
          title={movie.title} 
          hall={movie.hall} 
          price={movie.price}
          poster={movie.poster}
          onClick={handleInput}
          onEdit={() => setEditingMovie(movie)}         
        />       
      ))}
      <MovieForm onAddMovie={addNewMovie} />
    </>
  );

}

export default Movies;


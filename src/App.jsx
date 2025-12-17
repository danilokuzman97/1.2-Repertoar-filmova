import React from "react";
import Movie from "./Movie";

const movies = [
    {title: "Captain America - The First Avenger", hall: 2, price: 350},
    {title: "The Papillon", hall: 1, price: 300},
    {title: "The Lost City of Z", hall: 5, price: 350}
  ];

function App() {
  const date = new Date().toLocaleDateString();
  return (
    <>
      <p><strong>Repertoar za danas: {date}</strong></p>

      {movies.map((movie, index) => (
          <Movie 
            key={index}
            title={movie.title} 
            hall={movie.hall} 
            price={movie.price}
            image="https://pngimg.com/uploads/clapperboard/clapperboard_PNG16.png"
          />
        ))}
    </>
  );

}
export default App;
import React from "react";
import "./Movie.css";


const Movie = (props) => {
  return(
    <div className="container">
      <div className="image">
        <img className="movie-image" src={props.image} alt={props.title} />
      </div>
      <div className="details">
        <span>{props.title}, </span>
        <span>Sala: {props.hall}, </span>
        <span>Cena: {props.price} din</span>
      </div>
    </div>
  );
};
export default Movie;
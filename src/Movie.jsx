import React from "react";
import "./Movie.css";


const Movie = (props) => {
  return(
    <div className="container">
     <div className="wrapper">
      <div className="image">
        <img className="movie-image" src={props.poster} alt={props.title} />
      </div>

      <div className="buttons">
        <button onClick={() => props.onClick(props.title, "Like")}>Like</button>
        <button onClick={() => props.onClick(props.title, "Dislike")}>Dislike</button>
      </div>
     </div>

      <div className="details">
        <span>
          {props.title}
          {props.hall ? `, Sala: ${props.hall}` : " Film nije na repertoaru."} 
        </span>
        <span>Cena: {props.price || 300} din</span>
      </div>
    </div>
  );
};
export default Movie;
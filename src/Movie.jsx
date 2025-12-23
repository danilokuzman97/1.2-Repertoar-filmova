import React, { useState } from "react";
import "./Movie.css";


const Movie = (props) => {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const onLike = async () => {
    setLikes(prev => prev +1);
  };

  const onDislike = async () => {
    setDislikes(prev => prev +1);
  };

  return(
    <div className="container">
     <div className="wrapper">
      <div className="image">
        <img className="movie-image" src={props.poster} alt={props.title} />
      </div>

      <div className="buttons">
        <button onClick={onLike}>Like</button>
        <button onClick={onDislike}>Dislike</button>
        <p>Likes: {likes}</p>
        <p>Dislikes: {dislikes}</p>
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
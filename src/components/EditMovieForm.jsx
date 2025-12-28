import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../Movie.css";


const EditMovieForm = ({onEditMovie, movie, onCancel}) => {

  const {register,handleSubmit,formState: {errors}, reset, setValue} = useForm();

  useEffect(() => {
    if (movie) {
      setValue("name", movie.name || movie.title);
      setValue("hall", movie.hall);
      setValue("ticketPrice", movie.price);
      setValue("poster", movie.poster);
    }
  }, [movie, setValue]);

  const onFormSubmit = (data) => {
    onEditMovie({
      ...movie,
      title: data.name,
      hall: data.hall,
      price: data.ticketPrice,
      poster: data.poster
    });
    reset();
  }
  if (!movie) return null;

  return(

    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <label>Movie name:</label>
        <input {... register("name", {required: "Name is required"})}
          placeholder="Movie name" />
        { errors.name && <span>{ errors.name.message}</span>}
      </div>

      <div>
        <label>Hall: </label>
        <input type="number" {...register("hall",
            {required: "Hall is required",
             valueAsNumber: true,
             min: {
              value: 1,
              message: "Hall mujst be between 1 and 12"
             },
             max: {
              value: 12,
              message: "Hall mujst be between 1 and 12"
             }
            }
  )} />
        { errors.hall && <span>{ errors.hall.message}</span>}
      </div>

      <div>
        <label>Ticket price</label>
        <input type="number"
          {...register("ticketPrice", {
            required: "Ticket price is required",
            valueAsNumber: true,
            min:{
              value: 1,
              message: "Price must be positive number"
            }

          })}
          />
        { errors.ticketPrice && <span>{ errors.ticketPrice.message}</span>}

      </div>

      <div>
        <label>Poster URL</label>
        <input
          {...register("poster")}
          placeholder="Url" />
      </div>

      <div className="form-buttons">
        <button type="submit">Edit movie</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>

    </form>
  )
}

export default EditMovieForm;
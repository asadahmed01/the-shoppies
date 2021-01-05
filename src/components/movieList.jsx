import React from "react";

const MovieList = ({ movies, onNominate }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li className="my-2" key={movie.id}>
          {movie.title} ({movie.year}){" "}
          <input
            type="button"
            value="Nominate"
            onClick={() => onNominate(movie.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

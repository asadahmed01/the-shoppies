import React from "react";

const MovieList = ({ movies, onNominate, status }) => {
  let index;
  return (
    <ul className="bg-white mt-4 list-group">
      {movies.map((movie) => (
        <li className="p-3 list-group-item border-0" key={movie.id}>
          {movie.title} ({movie.year}){" "}
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => onNominate(movie.id)}
            disabled={status === movie.id}
          >
            Nominate
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

import React from "react";

const MovieList = ({ movies, onNominate, status }) => {
  return (
    <ul className="bg-white mt-4 list-group">
      {movies.map((movie) => (
        <li className="p-3 list-group-item border-0" key={movie.imdbID}>
          {movie.Title} ({movie.Year}){" "}
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => onNominate(movie.imdbID)}
            disabled={status === movie.imdbID}
          >
            Nominate
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

import React from "react";

const MovieList = ({ movies, onNominate, status }) => {
  return (
    <div>
      <ul className="bg-white mt-4 list-group row text-left">
        {movies.map((movie) => (
          <li className="p-3 list-group-item border-0 col-8" key={movie.imdbID}>
            {movie.Title} ({movie.Year}){" "}
            <div className="col-4 text-right">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => onNominate(movie.imdbID)}
                disabled={status === movie.imdbID}
              >
                Nominate
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

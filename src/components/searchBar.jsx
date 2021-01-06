import React, { Component } from "react";
import { toast } from "react-toastify";
import { getAll } from "./data";
import MovieList from "./movieList";
import Nominated from "./nominated";

class SearchBar extends Component {
  state = {
    movies: [],
    search: [],
    nominated: [],
    value: "",
    isButtonDisabled: -1,
  };

  componentDidMount() {
    const items = getAll();
    this.setState({ movies: items });
  }
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ value });
    const movies = [...this.state.movies];
    const item = movies.filter((m) => {
      return m.title.toLowerCase().startsWith(value.toLowerCase());
    });
    this.setState({ search: item });
  };

  handleNominate = (id) => {
    const { search, nominated } = this.state;
    this.setState({ isButtonDisabled: id });
    const movies = [...search];
    const nominatedMovies = movies.filter((m) => m.id === id);
    this.setState({
      nominated: [...nominated, ...nominatedMovies],
    });

    if (nominated.length === 4) {
      toast.success("You have nominated 5 movies.", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 1500,
      });
      return;
    }
  };

  handleRemove = (id) => {
    const { nominated } = this.state;
    const filtered = [...nominated];
    const removed = filtered.filter((movie) => movie.id !== id);
    this.setState({ nominated: removed });
    console.log(nominated);
  };

  render() {
    return (
      <div className="container mt-5 bg-light p-5 flex">
        <input
          value={this.state.value}
          type="text"
          placeholder="Search movie to nominate..."
          className="form-control"
          onChange={this.handleChange}
        />
        <div className="row">
          <div className="col-6">
            <h3>
              {this.state.search.length > 0 &&
                `Results for "${this.state.value}"`}
            </h3>
            <MovieList
              movies={this.state.search}
              onNominate={this.handleNominate}
              status={this.state.isButtonDisabled}
            />
          </div>

          <div className="col-6">
            <Nominated
              list={this.state.nominated}
              onRemove={this.handleRemove}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;

import React, { Component } from "react";
import { getAll } from "./data";
import MovieList from "./movieList";
import Nominated from "./nominated";

class SearchBar extends Component {
  state = {
    movies: [],
    search: [],
    nominated: [],
    value: "",
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
    console.log(id);
    const movies = [...this.state.search];
    const nominated = movies.filter((m) => m.id === id);
    this.setState({ nominated: [...this.state.nominated, ...nominated] });
    console.log(nominated);
  };
  render() {
    return (
      <div className="container mt-5 bg-light p-5">
        <input
          value={this.state.value}
          type="text"
          placeholder="Search movie to nominate..."
          className="form-control"
          onChange={this.handleChange}
        />

        <MovieList
          movies={this.state.search}
          onNominate={this.handleNominate}
        />
        <div>
          <Nominated list={this.state.nominated} />
        </div>
      </div>
    );
  }
}

export default SearchBar;

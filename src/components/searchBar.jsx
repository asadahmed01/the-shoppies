import React, { Component } from "react";
import { getAll } from "./data";

class SearchBar extends Component {
  state = {
    movies: [],
    search: [],
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
    console.log(this.state.search);
  };
  render() {
    return (
      <div className="container mt-5">
        <input
          value={this.state.value}
          type="text"
          placeholder="Search movie to nominate..."
          className="form-control"
          onChange={this.handleChange}
        />

        <ul>
          {this.state.search.map((m) => (
            <h1>{m.title}</h1>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchBar;

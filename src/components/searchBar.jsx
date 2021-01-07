import axios from "axios";
import React, { Component } from "react";
import testUtils from "react-dom/test-utils";
import { toast } from "react-toastify";
import MovieList from "./movieList";
import Nominated from "./nominated";

const apiEndpoint = `http://www.omdbapi.com/?apikey=c2e53c15&t=Game of Thrones`;
class SearchBar extends Component {
  state = {
    movies: [],
    search: [],
    nominated: [],
    value: "",
    isButtonDisabled: -1,
  };

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("nominated") || "[]");

    this.setState({ nominated: data });
  }

  handleChange = async (event) => {
    const { movies } = this.state;
    const value = event.target.value;
    this.setState({ value });
    /////
    const api = process.env.REACT_APP_MOVIES_API_KEY;

    axios
      .get(`https://www.omdbapi.com/?apikey=${api}&s=${value}`)
      .then((res) => res.data)
      .then((res) => {
        if (!res.Search) {
          return;
        }
        this.setState({ movies: [...this.state.movies, res.Search] }); //movies: res.Search
        const moviesList = res.Search;
        const item = moviesList.filter((m) => {
          return m.Title.toLowerCase().includes(value.toLowerCase());
        });
        this.setState({ search: item });
      });
  };

  handleNominate = (id) => {
    const { search, nominated } = this.state;
    this.setState({ isButtonDisabled: id });
    const movies = [...search];
    const nominatedMovies = movies.filter((m) => m.imdbID === id);

    this.setState({ nominated: [...this.state.nominated, ...nominatedMovies] });
    console.log(this.state.nominated);
    //persist it to the local storage
    localStorage.setItem("nominated", JSON.stringify(nominated));
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
    const removed = filtered.filter((movie) => movie.imdbID !== id);
    this.setState({ nominated: removed });
    //remove from the localstorage
    const items = JSON.parse(localStorage.getItem("nominated"));
    const filterStorage = items.filter((item) => item.imdbID !== id);
    //put back to the storage
    toast.error("Move deleted from the list", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
    });
    localStorage.setItem("nominated", JSON.stringify(filterStorage));
  };

  render() {
    //console.log(this.state.nominated);
    return (
      <div className="container mt-5 bg-light p-5 flex">
        <input
          value={this.state.value}
          type="text"
          placeholder="Search movie to nominate..."
          className="form-control"
          onChange={this.handleChange}
        />
        <div className="row texti-left">
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

          <div className="col-6 text-left">
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

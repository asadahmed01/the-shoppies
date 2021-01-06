import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";
import { getAll } from "./data";
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
    const items = getAll();
    //this.setState({ movies: items });
  }

  handleChange = async (event) => {
    const { movies } = this.state;
    const value = event.target.value;
    this.setState({ value });
    /////
    const api = process.env.REACT_APP_MOVIES_API_KEY;

    // try {
    //   const { data } = await axios.get(
    //     `http://www.omdbapi.com/?apikey=${api}&s=${value}`
    //   );
    //   this.setState({ movies: data.Search });
    //   console.log(movies);
    // } catch (error) {
    //   console.error(error);
    // }

    axios
      .get(`http://www.omdbapi.com/?apikey=${api}&s=${value}`)
      .then((res) => res.data)
      .then((res) => {
        if (!res.Search) {
          return;
        }
        this.setState({ movies: res.Search });
        const moviesList = res.Search;
        const item = moviesList.filter((m) => {
          return m.Title.toLowerCase().includes(value.toLowerCase());
        });
        this.setState({ search: item });
      });
    console.log(movies);
  };

  handleNominate = (id) => {
    const { search, nominated } = this.state;
    this.setState({ isButtonDisabled: id });
    const movies = [...search];
    const nominatedMovies = movies.filter((m) => m.imdbID === id);
    this.setState({
      nominated: [...nominated, ...nominatedMovies],
    });
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

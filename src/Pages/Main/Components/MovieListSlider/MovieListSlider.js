import React, { Component } from "react";
import MoviePosters from "../MoviePosters/MoviePosters";
import "./MovieListSlider.scss";

export default class MovieListSlider extends Component {
  render() {
    return (
      <div className="MovieListSlider">
        <div className="movieTitle">
          <p className="movieTitleText">왓챠 영화 순위</p>
        </div>
        <MoviePosters />
      </div>
    );
  }
}

import React, { Component } from "react";
import MoviePosters from "../MoviePosters/MoviePosters";
import "./MovieListSlider.scss";

export default class MovieListSlider extends Component {
  render() {
    const {
      films,
      filmsLength,
      movieTitle,
      slidesUnit,
      removeYearNation,
      removeRankBadge,
    } = this.props;
    return (
      <div className="MovieListSlider">
        <div className="movieTitle">
          <p className="movieTitleText">{movieTitle}</p>
        </div>
        <MoviePosters
          films={films}
          filmsLength={filmsLength}
          slidesUnit={slidesUnit}
          removeYearNation={removeYearNation}
          removeRankBadge={removeRankBadge}
        />
      </div>
    );
  }
}

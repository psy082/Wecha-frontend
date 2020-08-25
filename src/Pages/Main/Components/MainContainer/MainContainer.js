import React, { Component } from "react";
import MovieListSlider from "../MovieListSlider/MovieListSlider";
import "./MainContainer.scss";

export default class MainContainer extends Component {
  render() {
    return (
      <section className="MainContainer">
        <MovieListSlider />
      </section>
    );
  }
}

import React, { Component } from "react";
import MoviePosterItem from "../MoviePosterItem/MoviePosterItem";
import "./MoviePosters.scss";

export default class MoviePosters extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/MainPageMockData/MainpageMockData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  };
  render() {
    return (
      <div className="MoviePosters">
        <ul className="moviePoster">
          {this.state.data.map(
            ({
              id,
              korean_title,
              poster_url,
              year,
              country,
              avg_score,
              service_provider,
            }) => {
              return (
                <MoviePosterItem
                  key={id}
                  korean_title={korean_title}
                  poster_url={poster_url}
                  year={year}
                  country={country[0]}
                  avg_score={avg_score}
                  service_provider={service_provider}
                />
              );
            }
          )}
        </ul>
      </div>
    );
  }
}

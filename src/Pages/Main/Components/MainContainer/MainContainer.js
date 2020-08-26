import React, { Component } from "react";
import MovieListSlider from "../MovieListSlider/MovieListSlider";
import CollectionSlider from "../Collection/CollectionSlider/CollectionSlider";
import "./MainContainer.scss";

export default class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      watcha: [],
      netflix: [],
      person: [],
      country: [],
      genre: [],
      watchaLength: [],
      netflixLength: [],
      personLength: [],
      countryLength: [],
      genreLength: [],
      collections: [],
      collectionsLength: [],
      movieTitle: [
        "왓챠 영화 순위",
        "넷플릭스 영화 순위",
        "인물",
        "국가",
        "장르",
        "임의의 유저 컬렉션",
      ],
      slidesUnit: [5, 6],
      removeYearNation: "removeYearNation",
      removeRankBadge: "removeRankBadge",
    };
  }
  componentDidMount = () => {
    fetch(
      "http://localhost:3000/data/MainPageMockData/MainpageMockDataRanking.json"
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          watcha: res.films,
          watchaLength: res.films.length,
        });
      });

    fetch(
      "http://localhost:3000/data/MainPageMockData/MainpageMockDataRanking.json"
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          netflix: res.films,
          netflixLength: res.films.length,
        });
      });

    fetch(
      "http://localhost:3000/data/MainPageMockData/MainpageMockDataReco.json"
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          person: res.films,
          personLength: res.films.length,
          personTitle: res.person,
        });
      });

    fetch(
      "http://localhost:3000/data/MainPageMockData/MainpageMockDataReco.json"
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          genre: res.films,
          genreLength: res.films.length,
          genreTitle: res.genre,
        });
      });

    fetch(
      "http://localhost:3000/data/MainPageMockData/MainpageMockDataReco.json"
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          country: res.films,
          countryLength: res.films.length,
          countryTitle: res.country,
        });
      });

    fetch(
      "http://localhost:3000/data/MainPageMockData/MainPageCollections.json"
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          collections: res.collections,
          collectionsLength: res.collections.length,
        });
      });
  };

  render() {
    const {
      watcha,
      netflix,
      person,
      country,
      genre,
      collections,
      collectionsLength,
      watchaLength,
      netflixLength,
      personLength,
      countryLength,
      genreLength,
      movieTitle,
      slidesUnit,
      removeYearNation,
      removeRankBadge,
    } = this.state;
    return (
      <section className="MainContainer">
        <MovieListSlider
          films={watcha}
          filmsLength={watchaLength}
          movieTitle={movieTitle[0]}
          slidesUnit={slidesUnit[0]}
        />
        <MovieListSlider
          films={netflix}
          filmsLength={netflixLength}
          movieTitle={movieTitle[1]}
          slidesUnit={slidesUnit[0]}
        />
        <MovieListSlider
          films={person}
          filmsLength={personLength}
          movieTitle={movieTitle[2]}
          slidesUnit={slidesUnit[1]}
          removeYearNation={removeYearNation}
          removeRankBadge={removeRankBadge}
        />
        <MovieListSlider
          films={country}
          filmsLength={countryLength}
          movieTitle={movieTitle[3]}
          slidesUnit={slidesUnit[1]}
          removeYearNation={removeYearNation}
          removeRankBadge={removeRankBadge}
        />
        <MovieListSlider
          films={genre}
          filmsLength={genreLength}
          movieTitle={this.state.genreTitle}
          slidesUnit={slidesUnit[1]}
          removeYearNation={removeYearNation}
          removeRankBadge={removeRankBadge}
        />

        <CollectionSlider
          collections={collections}
          collectionsLength={collectionsLength}
          slidesUnit={slidesUnit[0]}
        />
      </section>
    );
  }
}

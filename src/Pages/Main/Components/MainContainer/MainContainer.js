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
      filmsLength: [],
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
    };
  }
  componentDidMount = () => {
    fetch("http://10.58.5.76:8000/film/ranking?sp=watcha")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          watcha: res.films,
          filmsLength: res.films.length,
        });
      });

    fetch("http://10.58.5.76:8000/film/ranking?sp=netflix")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          netflix: res.films,
        });
      });

    fetch("http://10.58.5.76:8000/film/recommendation?way=person")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          person: res.films,
        });
      });

    fetch("http://10.58.5.76:8000/film/recommendation?way=genre")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          genre: res.films,
        });
      });

    fetch("http://10.58.5.76:8000/film/recommendation?way=country")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          country: res.films,
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
      filmsLength,
      movieTitle,
      slidesUnit,
      removeYearNation,
    } = this.state;
    console.log(collections);
    return (
      <section className="MainContainer">
        <MovieListSlider
          films={watcha}
          filmsLength={filmsLength}
          movieTitle={movieTitle[0]}
          slidesUnit={slidesUnit[0]}
        />
        <MovieListSlider
          films={netflix}
          filmsLength={filmsLength}
          movieTitle={movieTitle[1]}
          slidesUnit={slidesUnit[0]}
        />
        <MovieListSlider
          films={person}
          filmsLength={filmsLength}
          movieTitle={movieTitle[2]}
          slidesUnit={slidesUnit[1]}
          removeYearNation={removeYearNation}
        />
        <MovieListSlider
          films={country}
          filmsLength={filmsLength}
          movieTitle={movieTitle[3]}
          slidesUnit={slidesUnit[1]}
          removeYearNation={removeYearNation}
        />
        <MovieListSlider
          films={genre}
          filmsLength={filmsLength}
          movieTitle={movieTitle[4]}
          slidesUnit={slidesUnit[1]}
          removeYearNation={removeYearNation}
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

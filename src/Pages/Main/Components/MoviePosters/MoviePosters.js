import React, { Component } from "react";
import MoviePosterItem from "../MoviePosterItem/MoviePosterItem";
import Slider from "react-slick";
import SliderBtn from "../SliderBtn/SliderBtn";
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
    const settings = {
      dots: false,
      infinite: false,
      prevArrow: <SliderBtn to="prevArrow" />,
      nextArrow: <SliderBtn to="nextArrow" />,
      speed: 800,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
    };

    return (
      <div className="MoviePosters">
        <ul className="moviePoster">
          <Slider {...settings}>
            {this.state.data.map((el) => {
              return (
                <MoviePosterItem
                  key={el.id}
                  korean_title={el.korean_title}
                  poster_url={el.poster_url}
                  year={el.year}
                  country={el.country[0]}
                  avg_score={el.avg_score}
                  service_provider={el.service_provider}
                />
              );
            })}
          </Slider>
        </ul>
      </div>
    );
  }
}

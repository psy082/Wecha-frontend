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
      slidesUnit: 5,
      currIndex: 0,
      endIndex: 0,
    };
  }

  makeEndIndex = () => {
    let endIndex = parseInt(this.state.dataLength / this.state.slidesUnit);
    if (this.state.dataLength % this.state.slidesUnit === 0) endIndex--;
    this.setState({ endIndex });
  };

  goToPrev = () => {
    this.setState({ currIndex: this.state.currIndex - 1 });
  };

  goToNext = () => {
    this.setState({ currIndex: this.state.currIndex + 1 });
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/data/MainPageMockData/MainpageMockData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            data: res.data,
            dataLength: res.data.length,
          },
          this.makeEndIndex
        );
      });
  };

  render() {
    const settings = {
      dots: false,
      infinite: false,
      prevArrow: (
        <SliderBtn
          type="prevArrow"
          move={this.goToPrev}
          state={this.state.currIndex === 0}
        />
      ),
      nextArrow: (
        <SliderBtn
          type="nextArrow"
          move={this.goToNext}
          state={this.state.currIndex === this.state.endIndex}
        />
      ),
      speed: 700,
      slidesToShow: this.state.slidesUnit,
      slidesToScroll: this.state.slidesUnit,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    };

    return (
      <div className="MoviePosters">
        <ul className="moviePoster">
          <Slider {...settings}>
            {this.state.data.map((el, idx) => {
              return (
                <MoviePosterItem
                  key={el.id}
                  rank_num={idx + 1}
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

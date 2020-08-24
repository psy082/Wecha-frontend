import React, { Component } from "react";
import MoviePosterItem from "../MoviePosterItem/MoviePosterItem";
import Slider from "react-slick";
import SliderBtn from "../SliderBtn/SliderBtn";
import "./MoviePosters.scss";

export default class MoviePosters extends Component {
  constructor() {
    super();
    this.state = {
      currIndex: 0,
    };
  }

  goToPrev = () => {
    this.setState({ currIndex: this.state.currIndex - 1 });
  };

  goToNext = () => {
    this.setState({ currIndex: this.state.currIndex + 1 });
  };

  render() {
    let endIndex = parseInt(this.props.filmsLength / this.props.slidesUnit);
    if (this.props.filmsLength % this.props.slidesUnit === 0) endIndex--;

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
          state={this.state.currIndex === endIndex}
        />
      ),
      speed: 800,
      slidesToShow: this.props.slidesUnit,
      slidesToScroll: this.props.slidesUnit,
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
            {this.props.films.map((el, idx) => {
              return (
                <MoviePosterItem
                  key={el.id}
                  rank_num={idx + 1}
                  title={el.title}
                  poster_url={el.poster_url}
                  year={el.year}
                  countries={el.countries[0]}
                  avg_rating={el.avg_rating}
                  service_providers={el.service_providers}
                  removeYearNation={this.props.removeYearNation}
                />
              );
            })}
          </Slider>
        </ul>
      </div>
    );
  }
}

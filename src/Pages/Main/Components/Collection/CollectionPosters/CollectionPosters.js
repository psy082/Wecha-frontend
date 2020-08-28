import React, { Component } from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import Slider from "react-slick";
import SliderBtn from "../../SliderBtn/SliderBtn";
import "./CollectionPosters.scss";

export default class CollectionPosters extends Component {
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

  calcEndIdx = () => {
    let endIndex = parseInt(
      this.props.collectionsLength / this.props.slidesUnit
    );
    if (this.props.collectionsLength % this.props.slidesUnit === 0) endIndex--;

    return endIndex;
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
          state={this.state.currIndex === this.calcEndIdx()}
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
      <div className="CollectionPosters">
        <ul className="collectionPoster">
          <Slider {...settings}>
            {this.props.collections.map((el) => {
              return (
                <CollectionItem
                  key={el.id}
                  collection_id={el.id}
                  name={el.name}
                  poster_urls={el.poster_urls}
                />
              );
            })}
          </Slider>
        </ul>
      </div>
    );
  }
}

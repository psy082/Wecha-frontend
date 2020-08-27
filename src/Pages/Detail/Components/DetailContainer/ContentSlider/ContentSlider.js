import React, { Component } from "react";
import Slider from "react-slick";
import SliderButton from "./SliderButton/SliderButton";
import "./ContentSlider.scss";

export default class ContentSlider extends Component {
  constructor(props) {
    super(props);
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
    const {
      numberOfItems,
      slidesRow,
      slidesColumn,
      slidesToShow,
      children,
    } = this.props;

    let endIndex = parseInt(numberOfItems / (slidesRow * slidesToShow));
    if (numberOfItems % (slidesRow * slidesToShow) === 0) endIndex--;

    const settings = {
      dots: false,
      infinite: false,
      prevArrow: (
        <SliderButton
          type="prevArrow"
          move={this.goToPrev}
          state={this.state.currIndex === 0}
        />
      ),
      nextArrow: (
        <SliderButton
          type="nextArrow"
          move={this.goToNext}
          state={this.state.currIndex === endIndex}
        />
      ),
      speed: 800,
      rows: slidesRow,
      slidesPerRow: slidesColumn,
      slidesToShow: slidesToShow,
      slidesToScroll: slidesToShow,
      initialSlide: 0,
    };

    return (
      <div className="ContentSlider">
        <Slider {...settings}>{children}</Slider>
      </div>
    );
  }
}

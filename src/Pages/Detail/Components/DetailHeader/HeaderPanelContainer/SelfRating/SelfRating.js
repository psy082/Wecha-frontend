import React, { Component } from "react";
import "./SelfRating.scss";

const titleByRating = {
  0.0: "평가하기",
  0.5: "최악이에요",
  1.0: "싫어요",
  1.5: "재미없어요",
  2.0: "별로에요",
  2.5: "부족해요",
  3.0: "보통이에요",
  3.5: "볼만해요",
  4.0: "재미있어요",
  4.5: "훌륭해요!",
  5.0: "최고에요!",
};

class SelfRating extends Component {
  constructor(props) {
    super(props);
    this.state = { widthByRating: `${props.rating * 20}%` };
  }

  initWidth = () => {
    this.setState({ widthByRating: `${this.props.rating * 20}%` });
  };

  traceMouse = (() => {
    let wait = false;
    return ({ nativeEvent }, index) => {
      if (!wait) {
        if (nativeEvent.offsetX > 20)
          this.setState({ widthByRating: `${index * 20}%` });
        else this.setState({ widthByRating: `${(index - 0.5) * 20}%` });
        wait = true;
        setTimeout(() => {
          wait = false;
        }, 100);
      }
    };
  })();

  giveRating = ({ nativeEvent }, index) => {
    let rating = nativeEvent.offsetX > 20 ? index : index - 0.5;
    if (this.props.rating === rating) this.props.changeRating(0);
    else this.props.changeRating(rating);
  };

  render() {
    return (
      <div className="SelfRating">
        <div className="titleByRating">
          {titleByRating[Number(this.props.rating)]}
        </div>
        <div className="starContainer" onMouseLeave={this.initWidth}>
          <div className="unratedStars">
            {Array(5)
              .fill()
              .map((_, index) => (
                <span
                  key={`unratedStar${index}`}
                  className="startImage"
                  onMouseMove={(e) => this.traceMouse(e, index + 1)}
                  onClick={(e) => this.giveRating(e, index + 1)}
                ></span>
              ))}
          </div>
          <div
            className="ratedStars"
            style={{ width: `${this.state.widthByRating}` }}
          >
            {Array(5)
              .fill()
              .map((_, index) => (
                <span
                  key={`ratedStar${index}`}
                  className="startImage"
                  onMouseMove={(e) => this.traceMouse(e, index + 1)}
                  onClick={(e) => this.giveRating(e, index + 1)}
                ></span>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SelfRating;

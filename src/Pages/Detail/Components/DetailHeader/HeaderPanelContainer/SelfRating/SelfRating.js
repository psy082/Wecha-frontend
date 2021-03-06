import React, { Component } from "react";
import "./SelfRating.scss";

class SelfRating extends Component {
  constructor(props) {
    super(props);
    this.state = { widthByRating: props.rating ? `${props.rating * 20}%` : 0 };
  }

  initWidth = () => {
    this.setState({
      widthByRating: this.props.rating ? `${this.props.rating * 20}%` : 0,
    });
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
    if (Number(this.props.rating) === rating) this.props.changeRating(0);
    else this.props.changeRating(rating);
  };

  render() {
    const { rating, openRejectModal } = this.props;
    return (
      <div className="SelfRating">
        <div className="titleByRating">{titleByRating[Number(rating)]}</div>
        <div className="starContainer" onMouseLeave={this.initWidth}>
          {[StarImg.UNRATED, StarImg.RATED].map(stars => 
            <div key={`${stars}`} className={`${stars}`} 
              style={ stars === StarImg.RATED 
                ? { width: `${this.state.widthByRating}` }
                : {}}
            >
              {Array(5)
                .fill()
                .map((_, index) => (
                  <span
                    key={`${stars}${index}`}
                    className="startImage"
                    onMouseMove={(e) => this.traceMouse(e, index + 1)}
                    onClick={(e) => {
                      if (localStorage.getItem("access_token"))
                        this.giveRating(e, index + 1);
                      else {
                        this.initWidth();
                        openRejectModal("rating");
                      }
                    }}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const StarImg = Object.freeze({
  UNRATED: 'unratedStars',
  RATED: 'ratedStars'
})

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

export default SelfRating;

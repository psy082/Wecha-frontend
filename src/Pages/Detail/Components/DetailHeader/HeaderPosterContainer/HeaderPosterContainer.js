import React, { Component } from "react";
import "./HeaderPosterContainer.scss";

class HeaderPosterContainer extends Component {
  state = {
    colors: [0, 0, 0],
  };

  render() {
    const {
      colors: [r, g, b],
    } = this.state;
    let { background, poster } = this.props;
    background = background ? background : "/images/empty_movie.svg";
    poster = poster ? poster : "/images/empty_movie.svg";
    return (
      <div className="HeaderPosterContainer">
        <div className="blurPosterContainer">
          <div
            className="leftBackground"
            style={{
              background: `rgb(${r}, ${g}, ${b})`,
            }}
          ></div>
          <div
            className="blurPoster"
            style={{
              backgroundImage: `url(${background}) no-repeat center`,
              backgroundSize: "cover",
            }}
          >
            <div
              className="leftGradient"
              style={{
                backgroundImage: `linear-gradient(-90deg, rgba(${r}, ${g}, ${b}, 0) 0%, rgb(${r}, ${g}, ${b}) 100%)`,
              }}
            ></div>
            <div
              className="rightGradient"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(${r}, ${g}, ${b}, 0) 0%, rgb(${r}, ${g}, ${b}) 100%)`,
              }}
            ></div>
          </div>
          <div
            className="rightBackground"
            style={{
              background: `rgb(${r}, ${g}, ${b})`,
            }}
          ></div>
          <div className="dimmedLayer"></div>
        </div>
        <div className="infoPosterContainer">
          <div className="posterWrapper">
            <div className="poster">
              <img alt="poster" src={poster} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderPosterContainer;

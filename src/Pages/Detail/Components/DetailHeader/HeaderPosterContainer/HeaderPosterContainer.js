import React, { Component } from "react";
import "./HeaderPosterContainer.scss";
const Vibrant = require("node-vibrant");

class HeaderPosterContainer extends Component {
  state = {
    colors: [0, 0, 0],
  };

  async componentDidMount() {
    const colors = await this.extractGradientColors(
      "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_720,q_80,w_1280/v1463383773/mxn657-1422.jpg"
    );
    this.setState({ colors });
  }

  extractGradientColors = async (src) => {
    const { LightMuted } = await Vibrant.from(src).getPalette();
    return LightMuted._rgb;
  };

  render() {
    const { colors } = this.state;
    return (
      <div className="HeaderPosterContainer">
        <div className="blurPosterContainer">
          <div
            className="leftBackground"
            style={{
              background: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`,
            }}
          ></div>
          <div
            className="blurPoster"
            style={{
              background: `url(https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_720,q_80,w_1280/v1463383773/mxn657-1422.jpg) no-repeat center`,
              backgroundSize: "cover",
            }}
          >
            <div
              className="leftGradient"
              style={{
                backgroundImage: `linear-gradient(-90deg, rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0) 0%, rgb(${colors[0]}, ${colors[1]}, ${colors[2]}) 100%)`,
              }}
            ></div>
            <div
              className="rightGradient"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0) 0%, rgb(${colors[0]}, ${colors[1]}, ${colors[2]}) 100%)`,
              }}
            ></div>
          </div>
          <div
            className="rightBackground"
            style={{
              background: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`,
            }}
          ></div>
          <div className="dimmedLayer"></div>
        </div>
        <div className="infoPosterContainer">
          <div className="posterWrapper">
            <div className="poster">
              <img
                alt="poster"
                src="https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1540367646/qesatzihqna0pi7e3vov.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderPosterContainer;

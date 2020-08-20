import React, { Component } from "react";
import "./HeaderPosterContainer";

class HeaderPosterContainer extends Component {
  render() {
    return (
      <div className="HeaderPosterContainer">
        <div className="blurPosterContainer">
          <div className="leftBackground"></div>
          <div
            style={{
              background: `url("https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_720,q_80,w_1280/v1463383773/mxn657-1422.jpg) no-repeat center")`,
            }}
            className="blurPoster"
          >
            <div className="leftGradient"></div>
            <div className="rightGradient"></div>
          </div>
          <div className="rightBackground"></div>
          <div className="dimmedLayer"></div>
        </div>
        <div className="posterContainer">
          <div className="posterWrapper lazyLoadingImg">
            <img
              alt="poster"
              src="https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1540367646/qesatzihqna0pi7e3vov.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderPosterContainer;

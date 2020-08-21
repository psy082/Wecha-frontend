import React, { Component } from "react";
import "./HeaderPanelContainer";

class HeaderPanelContainer extends Component {
  render() {
    return (
      <div className="HeaderPanelContainer responsiveBlock">
        <div className="headerPanel">
          <div className="title"></div>
          <div className="detail"></div>
          <div className="contentRating"></div>
          <div className="buttonBlock"></div>
          <div className="selfRating"></div>
        </div>
      </div>
    );
  }
}

export default HeaderPanelContainer;

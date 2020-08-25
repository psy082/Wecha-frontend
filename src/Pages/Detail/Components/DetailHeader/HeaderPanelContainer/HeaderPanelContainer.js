import React, { Component } from "react";
import ArrowDownButton from "./ArrowDownButton/ArrowDownButton";
import SelfRating from "./SelfRating/SelfRating";
import "./HeaderPanelContainer.scss";

class HeaderPanelContainer extends Component {
  render() {
    const { rating, changeRating } = this.props;
    return (
      <div className="HeaderPanelContainer">
        <div className="headerPanelWrapper">
          <div className="headerPanel">
            <div className="title">흐르는 강물처럼</div>
            <div className="detail">1992 ・ 드라마 ・ 미국</div>
            <div className="contentRating">평균 ★3.9</div>
            <div className="buttonBlockContainer">
              <div className="buttonBlockWrapper">
                <button className="actionButton">
                  <div className="buttonInner">
                    <span className="plusButton"></span>
                    <div className="buttonText">보고싶어요</div>
                  </div>
                </button>
                <button className="openButton">
                  <ArrowDownButton />
                </button>
              </div>
            </div>
            <SelfRating rating={rating} changeRating={changeRating} />
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderPanelContainer;

import React, { Component } from "react";
import HeaderPosterContainer from "./HeaderPosterContainer/HeaderPosterContainer";
import HeaderPanelContainer from "./HeaderPanelContainer/HeaderPanelContainer";
import "./DetailHeader.scss";

class DetailHeader extends Component {
  render() {
    const { rating, changeRating } = this.props;
    return (
      <header className="DetailHeader">
        <HeaderPosterContainer />
        <HeaderPanelContainer rating={rating} changeRating={changeRating} />
      </header>
    );
  }
}

export default DetailHeader;

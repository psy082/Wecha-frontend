import React, { Component } from "react";
import HeaderPosterContainer from "./HeaderPosterContainer/HeaderPosterContainer";
import HeaderPanelContainer from "./HeaderPanelContainer/HeaderPanelContainer";

class DetailHeader extends Component {
  render() {
    return (
      <header className="DetailHeader">
        <HeaderPosterContainer />
        <HeaderPanelContainer />
      </header>
    );
  }
}

export default DetailHeader;

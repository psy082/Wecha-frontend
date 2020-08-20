import React, { Component } from "react";
import "./ContentsContainer.scss";

class ContentsContainer extends Component {
  render() {
    return (
      <section className="ContentsContainer">
        <header className="contentsHeader"></header>
        <div className="contents"></div>
      </section>
    );
  }
}

export default ContentsContainer;

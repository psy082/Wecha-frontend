import React, { Component } from "react";
import TopRightButton from "./TopRightButton";
import TopRightRatingStat from "./TopRightRatingStat";
import "./ContentsContainer.scss";

class ContentsContainer extends Component {
  render() {
    const { title, button, rating, children } = this.props;
    return (
      <section className="ContentsContainer">
        <header className="contentsHeader">
          <h2 className="title">{title}</h2>
          {button && <TopRightButton />}
          {rating && <TopRightRatingStat scores={rating} />}
        </header>
        <div className="contents">
          {children}
          <hr className="divider" />
        </div>
      </section>
    );
  }
}

export default ContentsContainer;

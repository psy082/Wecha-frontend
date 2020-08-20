import React, { Component } from "react";
import TopRightButton from "./TopRightButton";
import TopRightRatingStat from "./TopRightRatingStat";
import "./ContentsContainer.scss";

class ContentsContainer extends Component {
  render() {
    return (
      <section className="ContentsContainer">
        <header className="contentsHeader">
          <h2 className="title">{this.props.title}</h2>
          {this.props.button ? (
            <TopRightButton />
          ) : this.props.rating ? (
            <TopRightRatingStat rating={this.props.rating} />
          ) : (
            <></>
          )}
        </header>
        <div className="contents">
          {this.props.children}
          <hr className="divider" />
        </div>
      </section>
    );
  }
}

export default ContentsContainer;

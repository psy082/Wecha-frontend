import React, { Component } from "react";
import "./ContentsContainer.scss";

class ContentsContainer extends Component {
  render() {
    const { title, button, rating } = this.props;
    console.log(title, button, rating);
    return (
      <section className="ContentsContainer">
        <header className="contentsHeader">
          <h2 className="title">{title}</h2>
          {button && <span>button</span>}
          {rating && <span>button</span>}
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

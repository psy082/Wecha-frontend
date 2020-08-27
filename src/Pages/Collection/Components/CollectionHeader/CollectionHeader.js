import React, { Component } from "react";
import "./CollectionHeader.scss";

export default class CollectionHeader extends Component {
  constructor() {
    super();
    this.state = {
      scrollData: 0,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const scrollNow = window.scrollY;
      this.setState({
        scrollData: scrollNow,
      });
    });
  }

  classSelect = (title, removeAndShowTitle) => {
    const { scrollData } = this.state;
    let classSelect = title;

    if (scrollData > 318) {
      classSelect += ` ${removeAndShowTitle}`;
    }
    return classSelect;
  };

  render() {
    const { CollectionTitle } = this.props;
    console.log(this.state);
    return (
      <header className="CollectionHeader">
        <div className="backBotton">
          <div className="topLeftBotton">
            <button className="legtBotton"></button>
          </div>
        </div>
        <div className={this.classSelect("largeTitle", "removeTitle")}>
          <div className="titleText">{CollectionTitle.name}</div>
        </div>
        <div className={this.classSelect("smallTitle", "showTitle")}>
          {CollectionTitle.name}
        </div>
      </header>
    );
  }
}

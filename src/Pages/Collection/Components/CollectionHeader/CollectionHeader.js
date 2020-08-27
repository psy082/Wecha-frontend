import React, { Component } from "react";

export default class CollectionHeader extends Component {
  render() {
    return (
      <header className="CollectionHeader">
        <div className="backBotton">
          <div className="topLeftBotton">
            <button className="legtBotton"></button>
          </div>
        </div>
        <div className="largeTitle">
          <div className="titleText">왓챠 최고 인기작</div>
        </div>
        <div className="smallTitle">왓챠 최고 인기작</div>
      </header>
    );
  }
}

import React, { Component } from "react";
import CollectionPosters from "../CollectionPosters/CollectionPosters";
import "./CollectionSlider.scss";

export default class CollectionSlider extends Component {
  render() {
    console.log(this.props.collections);
    return (
      <div className="CollectionSlider">
        <div className="CollectionTitle">
          <p className="CollectionTitleText">유저 컬렉션</p>
        </div>
        <CollectionPosters
          collections={this.props.collections}
          filmsLength={this.props.filmsLength}
          slidesUnit={this.props.slidesUnit}
        />
      </div>
    );
  }
}

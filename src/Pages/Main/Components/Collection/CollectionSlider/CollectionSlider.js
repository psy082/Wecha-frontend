import React, { Component } from "react";
import CollectionPosters from "../CollectionPosters/CollectionPosters";
import "./CollectionSlider.scss";

export default class CollectionSlider extends Component {
  render() {
    const { collections, collectionsLength, slidesUnit } = this.props;
    return (
      <div className="CollectionSlider">
        <div className="collectionTitle">
          <p className="collectionTitleText">랜덤 유저 컬렉션</p>
        </div>
        <CollectionPosters
          collections={collections}
          collectionsLength={collectionsLength}
          slidesUnit={slidesUnit}
        />
      </div>
    );
  }
}

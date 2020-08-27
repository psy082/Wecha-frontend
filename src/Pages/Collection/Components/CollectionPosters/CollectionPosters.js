import React, { Component } from "react";
import CollectionPosterItem from "../CollectionPosterItem/CollectionPosterItem";
import "./CollectionPosters.scss";

export default class CollectionPosters extends Component {
  render() {
    return (
      <div className="CollectionPosters">
        <div className="postersContainer">
          <ul className="postersList">
            {this.props.CollectionData.map((el) => {
              return <CollectionPosterItem key={el.id} Films={el} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

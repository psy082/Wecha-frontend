import React, { Component } from "react";
import CollectionHeader from "../CollectionHeader/CollectionHeader";
import CollectionPosters from "../CollectionPosters/CollectionPosters";
import "./CollectionPage.scss";

export default class CollectionPage extends Component {
  render() {
    return (
      <div className="CollectionPage">
        <div className="CollectionPagePadding">
          <CollectionHeader />
          <CollectionPosters />
        </div>
      </div>
    );
  }
}

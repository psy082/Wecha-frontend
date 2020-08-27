import React, { Component } from "react";
import CollectionHeader from "../CollectionHeader/CollectionHeader";
import CollectionPosters from "../CollectionPosters/CollectionPosters";
import "./CollectionPage.scss";

export default class CollectionPage extends Component {
  constructor() {
    super();
    this.state = {
      CollectionData: [],
      CollectionTitle: [],
    };
  }

  componentDidMount() {
    fetch(
      "http://localhost:3000/data/MainPageMockData/CollectionPageMoctData.json"
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          CollectionData: res.films,
          CollectionTitle: res.collection,
        });
      });
  }

  render() {
    return (
      <div className="CollectionPage">
        <div className="CollectionPagePadding">
          <CollectionHeader CollectionTitle={this.state.CollectionTitle} />
          <CollectionPosters CollectionData={this.state.CollectionData} />
        </div>
      </div>
    );
  }
}

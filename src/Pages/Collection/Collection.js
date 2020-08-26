import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import CollectionPage from "./Components/CollectionPage/CollectionPage";
import Footer from "../../Components/Footer/Footer";
import "./Collection.scss";

export default class Collection extends Component {
  render() {
    return (
      <div className="Collection">
        <Nav />
        <CollectionPage />
        <Footer />
      </div>
    );
  }
}

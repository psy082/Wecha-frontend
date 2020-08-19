import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import MainContainer from "./Components/MainContainer/MainContainer";
import Footer from "../../Components/Footer/Footer";
import "./Main.scss";

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <MainContainer />
        <Footer />
      </div>
    );
  }
}

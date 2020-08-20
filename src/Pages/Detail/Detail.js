import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import HeaderPosterContainer from "./Components/HeaderPosterContainer/HeaderPosterContainer";
import HeaderPanelContainer from "./Components/HeaderPanelContainer/HeaderPanelContainer";
import ContentsContainer from "./Components/ContentsContainer/ContentsContainer";

import "./Detail.scss";

export default class Detail extends Component {
  render() {
    return (
      <div className="Detail">
        <Nav />
        <section className="DetailContainer">
          <header className="DetailHeader">
            <HeaderPosterContainer />
            <HeaderPanelContainer />
          </header>
          <div className="DetailWrapper">
            <div className="DetailItem">
              <ContentsContainer></ContentsContainer>
              <ContentsContainer></ContentsContainer>
            </div>
            <div className="DetailItem">
              <div className="ContentsMedia">
                <div className="MediaItem"></div>
                <div className="MediaItem"></div>
                <div className="MediaItem"></div>
              </div>
            </div>
            <div className="DetailItem">
              <div className="Recommendation">
                <div className="collection">
                  <ContentsContainer></ContentsContainer>
                </div>
                <div className="recommendedMovies">
                  <ContentsContainer></ContentsContainer>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

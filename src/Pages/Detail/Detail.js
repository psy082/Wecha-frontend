import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import HeaderPosterContainer from "./Components/HeaderPosterContainer/HeaderPosterContainer";
import HeaderPanelContainer from "./Components/HeaderPanelContainer/HeaderPanelContainer";
import ContentsContainer from "./Components/ContentsContainer/ContentsContainer";
import Collection from "./Components/Collection/Collection";
import Poster from "./Components/Poster/Poster";

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
              <div className="selfCommentBlock">
                <section className="leaveCommentBlock">
                  <h3 className="title">대단한 작품이군요!</h3>
                  <div className="buttonBlock">
                    <button>코멘트 남기기</button>
                  </div>
                </section>
              </div>
              <div className="contentsBlock">
                <div className="contentsMain">
                  <ContentsContainer></ContentsContainer>
                  <ContentsContainer></ContentsContainer>
                  <ContentsContainer></ContentsContainer>
                  <ContentsContainer></ContentsContainer>
                  <ContentsContainer></ContentsContainer>
                </div>
                <div className="contentsAside">
                  <div className="contentsMedia">
                    <div className="MediaItem"></div>
                    <div className="MediaItem"></div>
                    <div className="MediaItem"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="DetailItem">
              <div className="Recommendation">
                <div className="collectionContainer">
                  <ContentsContainer>
                    <Collection />
                  </ContentsContainer>
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

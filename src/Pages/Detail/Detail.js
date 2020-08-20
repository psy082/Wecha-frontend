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
            <main className="DetailMain">
              <ContentsContainer></ContentsContainer>
              <ContentsContainer></ContentsContainer>
            </main>
            <aside className="DetailAside"></aside>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

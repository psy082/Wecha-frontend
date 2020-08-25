import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import DetailHeader from "./Components/DetailHeader/DetailHeader";
import ContentsContainer from "./Components/ContentsContainer/ContentsContainer";
import Collection from "./Components/Collection/Collection";
import ReviewModal from "./Components/Modals/ReviewModal/ReviewModal";

import "./Detail.scss";

export default class Detail extends Component {
  state = {
    background:
      "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1540367646/qesatzihqna0pi7e3vov.jpg",
    title: "흐르는 강물처럼",
    year: 1992,
    rating: 2.5,
    reviewStatus: "none",
    modal: "none",
  };

  changeRating = (rating) => {
    this.setState({ rating });
  };

  changeReviewStatus = (reviewStatus) => {
    this.setState({ reviewStatus });
  };

  openModal = (modal) => {
    this.setState({ modal });
  };

  render() {
    const {
      changeRating,
      changeReviewStatus,
      openModal,
      state: { background, title, year, rating, reviewStatus, modal },
    } = this;
    return (
      <div className="Detail">
        <Nav />
        <DetailHeader
          rating={rating}
          changeRating={changeRating}
          status={reviewStatus}
          changeStatus={changeReviewStatus}
          openModal={openModal}
        />
        <section className="DetailContainer">
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
        <div
          className="backScreen"
          style={{ display: modal === "none" ? "none" : "block" }}
          onClick={() => {
            this.setState({ modal: "none" });
          }}
        >
          <div className="modalContainer">
            {modal === "review" && (
              <ReviewModal
                background={background}
                title={title}
                year={year}
                status={reviewStatus}
                changeStatus={changeReviewStatus}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

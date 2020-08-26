import React, { Component } from "react";
import SelfCommentBlock from "./SelfCommentBlock/SelfCommentBlock";
import ShowCommentBlock from "./ShowCommentBlock/ShowCommentBlock";
import ContentsContainer from "../ContentsContainer/ContentsContainer";
import "./DetailContainer.scss";

class DetailContainer extends Component {
  render() {
    const { reviewStatus, rating, comment, username, openModal } = this.props;
    console.log(comment);
    return (
      <section className="DetailContainer">
        <div className="detailWrapper">
          <div className="detailItem">
            <div className="contentsBlock">
              {(reviewStatus !== "none" || rating) && !comment && (
                <SelfCommentBlock
                  rating={rating}
                  username={username}
                  openModal={openModal}
                />
              )}
              {comment && (
                <ShowCommentBlock comment={comment} openModal={openModal} />
              )}
              <div className="contentsMain">
                <ContentsContainer button={true}></ContentsContainer>
                <ContentsContainer></ContentsContainer>
                <ContentsContainer rating={rating}></ContentsContainer>
                <ContentsContainer button={true}></ContentsContainer>
                <ContentsContainer></ContentsContainer>
              </div>
              <div className="contentsAside">
                <div className="contentsMedia">
                  <div className="mediaItem"></div>
                  <div className="mediaItem"></div>
                  <div className="mediaItem"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="detailItem">
            <div className="recommendation">
              <div className="collectionContainer">
                <ContentsContainer></ContentsContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DetailContainer;

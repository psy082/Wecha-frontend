import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import DetailHeader from "./Components/DetailHeader/DetailHeader";
import DetailContainer from "./Components/DetailContainer/DetailContainer";
import CommentModal from "./Components/Modals/CommentModal/CommentModal";
import AlertModal from "./Components/Modals/AlertModal/AlertModal";
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
    comment: "",
    username: "김동호",
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

  closeModel = (e) => {
    if (e.target.className !== "modalContainer") return;
    this.setState({ modal: "none" });
  };

  createComment = (comment) => {
    if (!comment) return;
    this.setState({ comment: comment.trim() });
  };

  removeComment = () => {
    this.setState({ comment: "" });
  };

  render() {
    const {
      changeRating,
      changeReviewStatus,
      openModal,
      createComment,
      removeComment,
      state: {
        background,
        title,
        year,
        rating,
        reviewStatus,
        modal,
        comment,
        username,
      },
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
        <DetailContainer
          reviewStatus={reviewStatus}
          rating={rating}
          comment={comment}
          username={username}
          openModal={openModal}
        />
        <Footer />
        <div
          className="backScreen"
          style={{
            display: modal === "none" ? "none" : "block",
          }}
          onClick={this.closeModel}
        >
          <div className="modalContainer">
            {modal === "review" && (
              <ReviewModal
                background={background}
                title={title}
                year={year}
                status={reviewStatus}
                comment={comment}
                changeStatus={changeReviewStatus}
                openModal={openModal}
              />
            )}
            {modal === "comment" && (
              <CommentModal
                comment={comment}
                title={title}
                createComment={createComment}
                openModal={openModal}
              />
            )}
            {modal === "alert" && (
              <AlertModal openModal={openModal} removeComment={removeComment} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

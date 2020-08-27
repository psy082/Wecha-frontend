import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import DetailHeader from "./Components/DetailHeader/DetailHeader";
import DetailContainer from "./Components/DetailContainer/DetailContainer";
import CommentModal from "./Components/Modals/CommentModal/CommentModal";
import AlertModal from "./Components/Modals/AlertModal/AlertModal";
import ReviewModal from "./Components/Modals/ReviewModal/ReviewModal";

import "./Detail.scss";

const BASE_URL = "http://10.58.3.213:8000";

const convertReviewType = (type) => {
  switch (type) {
    case "W":
      return "wished";
    case "M":
      return "watching";
    default:
      return "none";
  }
};

const classifyImages = (images, poster) => {
  const classified = {
    gallary: [],
    videos: [],
  };
  classified.poster = poster;
  for (const image of images) {
    if (image.film_url_type === "B") classified.background = image.film_url;
    if (image.film_url_type === "G") classified.gallary.push(image.film_url);
    if (image.film_url_type === "T") classified.videos.push(image.film_url);
  }

  return classified;
};

export default class Detail extends Component {
  state = {
    modal: "none",
    selfReview: {},
    urls: {},
    images: {},
    casts: {},
    scores: {},
    reviews: {},
  };

  componentDidMount() {
    this.getMockData();
  }

  updateData = (id) => {
    fetch(`${BASE_URL}/film/${id}`)
      .then((res) => res.json())
      .then(
        ({
          film,
          urls,
          casts,
          reviews,
          score_counts,
          authenticated_user_review,
        }) =>
          this.setState(
            {
              movie: film,
              urls,
              casts,
              reviews,
              scores: score_counts,
              selfReview: authenticated_user_review,
            },
            () => {
              this.convertReviewValue();
              this.arrangeImages();
            }
          )
      );
  };

  getMockData = () => {
    fetch("http://localhost:3000/data/DetailPageMockData/mockDetail.json")
      .then((res) => res.json())
      .then(
        ({
          film,
          urls,
          casts,
          reviews,
          score_counts,
          authenticated_user_review,
        }) =>
          this.setState(
            {
              movie: film,
              urls,
              casts,
              reviews,
              scores: score_counts,
              selfReview: authenticated_user_review,
            },
            () => {
              this.convertReviewValue();
              this.arrangeImages();
            }
          )
      );
  };

  arrangeImages = () => {
    const images = classifyImages(this.state.urls, this.state.movie.poster_url);
    this.setState({ images });
  };

  convertReviewValue = () => {
    const selfReview = { ...this.state.selfReview };
    selfReview.review_type = convertReviewType(selfReview.review_type);
    this.setState({ selfReview });
  };

  changeRating = (rating) => {
    const selfReview = { ...this.state.selfReview };
    selfReview.score = rating;
    this.setState({ selfReview });
  };

  changeReviewStatus = (reviewStatus) => {
    const selfReview = { ...this.state.selfReview };
    selfReview.review_type = reviewStatus;
    this.setState({ selfReview });
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
    const selfReview = { ...this.state.selfReview };
    selfReview.comment = comment.trim();
    this.setState({ selfReview });
  };

  removeComment = () => {
    const selfReview = { ...this.state.selfReview };
    selfReview.comment = "";
    this.setState({ selfReview });
  };

  render() {
    const {
      changeRating,
      changeReviewStatus,
      openModal,
      createComment,
      removeComment,
      state: {
        movie,
        images,
        casts,
        scores,
        reviews,
        selfReview: { score, review_type, comment, user },
        modal,
      },
    } = this;

    return (
      <div className="Detail">
        <Nav />
        <DetailHeader
          movie={movie}
          images={images}
          rating={score}
          changeRating={changeRating}
          status={review_type}
          changeStatus={changeReviewStatus}
          openModal={openModal}
        />
        <DetailContainer
          movie={movie}
          images={images}
          casts={casts}
          scores={scores}
          reviews={reviews}
          reviewStatus={review_type}
          rating={score}
          comment={comment}
          user={user}
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
                background={movie.poster_url}
                title={movie.korean_title}
                year={movie.year}
                status={review_type}
                comment={comment}
                changeStatus={changeReviewStatus}
                openModal={openModal}
              />
            )}
            {modal === "comment" && (
              <CommentModal
                comment={comment}
                title={movie.korean_title}
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

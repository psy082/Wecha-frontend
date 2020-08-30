import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import DetailHeader from "./Components/DetailHeader/DetailHeader";
import DetailContainer from "./Components/DetailContainer/DetailContainer";
import CommentModal from "./Components/Modals/CommentModal/CommentModal";
import AlertModal from "./Components/Modals/AlertModal/AlertModal";
import ReviewModal from "./Components/Modals/ReviewModal/ReviewModal";
import RejectModal from "./Components/Modals/RejectModal/RejectModal";
import { movieApi, reviewApi } from "./api";
import "./Detail.scss";

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
    rejectType: "rating",
  };

  componentDidMount() {
    this.updateData(this.props.match.params.id);
  }

  updateData = (id) => {
    movieApi
      .showDetail(id)
      .then(
        ({
          data: {
            film,
            urls,
            casts,
            reviews,
            score_counts,
            authenticated_user_review,
          },
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

  checkAuth = () => {
    if (localStorage.getItem("access_token")) return true;
    return false;
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

  makeReviewFormat = () => {
    const basic = {
      film_id: `${this.props.match.params.id}`,
      review_text: "",
      review_rating: 0,
      review_type: "N",
    };
    let selfReview = this.state.selfReview;
    if (selfReview.comment) {
      basic.review_text = selfReview.comment;
    }
    if (selfReview.score && !Number(selfReview.score)) {
      basic.review_rating = Number(selfReview.score);
    }
    if (selfReview.review_type !== "none") {
      if (selfReview.review_type === "wished") {
        basic.review_type = "W";
      } else {
        basic.review_type = "M";
      }
    }
    return basic;
  };

  changeRating = async (rating) => {
    const selfReview = { ...this.state.selfReview };
    selfReview.score = rating;
    this.setState({ selfReview });
    const sendReview = this.makeReviewFormat();
    sendReview.review_rating = rating;
    await reviewApi.updateScore(sendReview);
    this.updateData(this.props.match.params.id);
  };

  convertSingleType = (reviewType) => {
    if (reviewType === "wished") return "W";
    if (reviewType === "watching") return "M";
    return "N";
  };

  changeReviewStatus = async (reviewStatus) => {
    const selfReview = { ...this.state.selfReview };
    selfReview.review_type = reviewStatus;
    this.setState({ selfReview });
    const sendReview = this.makeReviewFormat();
    sendReview.review_type = this.convertSingleType(reviewStatus);
    await reviewApi.updateScore(sendReview);
    this.updateData(this.props.match.params.id);
  };

  openModal = (modal) => {
    this.setState({ modal });
  };

  closeModel = (e) => {
    if (e.target.className !== "modalContainer") return;
    this.setState({ modal: "none" });
  };

  openRejectModal = (rejectType) => {
    if (!this.checkAuth()) {
      this.setState({ rejectType }, this.openModal("reject"));
    }
  };

  createComment = async (comment) => {
    if (!comment) return;
    const selfReview = { ...this.state.selfReview };
    selfReview.comment = comment.trim();
    this.setState({ selfReview });
    const sendReview = this.makeReviewFormat();
    sendReview.review_text = comment;
    await reviewApi.updateScore(sendReview);
    this.updateData(this.props.match.params.id);
  };

  removeComment = async () => {
    const selfReview = { ...this.state.selfReview };
    selfReview.comment = "";
    this.setState({ selfReview });
    const sendReview = this.makeReviewFormat();
    sendReview.review_text = "";
    await reviewApi.updateScore(sendReview);
    this.updateData(this.props.match.params.id);
  };

  changeRejectType = (rejectType) => {
    this.setState({ rejectType });
  };

  render() {
    const {
      changeRating,
      changeReviewStatus,
      openModal,
      openRejectModal,
      createComment,
      removeComment,
      state: {
        movie,
        images,
        casts,
        scores,
        reviews,
        selfReview,
        modal,
        rejectType,
      },
    } = this;
    return selfReview ? (
      <div className="Detail">
        <Nav />
        <DetailHeader
          movie={movie}
          images={images}
          rating={selfReview.score}
          changeRating={changeRating}
          status={selfReview.review_type}
          changeStatus={changeReviewStatus}
          openModal={openModal}
          openRejectModal={openRejectModal}
        />
        <DetailContainer
          movie={movie}
          images={images}
          casts={casts}
          scores={scores}
          reviews={reviews}
          reviewStatus={selfReview.review_type}
          rating={selfReview.score}
          comment={selfReview.comment}
          user={selfReview.user}
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
                status={selfReview.review_type}
                comment={selfReview.comment}
                changeStatus={changeReviewStatus}
                openModal={openModal}
              />
            )}
            {modal === "comment" && (
              <CommentModal
                comment={selfReview.comment}
                title={movie.korean_title}
                createComment={createComment}
                openModal={openModal}
              />
            )}
            {modal === "alert" && (
              <AlertModal openModal={openModal} removeComment={removeComment} />
            )}
            {modal === "reject" && (
              <RejectModal type={rejectType} openModal={openModal} />
            )}
          </div>
        </div>
      </div>
    ) : (
      <></>
    );
  }
}

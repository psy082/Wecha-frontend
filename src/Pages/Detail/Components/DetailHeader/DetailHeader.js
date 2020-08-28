import React, { Component } from "react";
import HeaderPosterContainer from "./HeaderPosterContainer/HeaderPosterContainer";
import HeaderPanelContainer from "./HeaderPanelContainer/HeaderPanelContainer";
import "./DetailHeader.scss";

class DetailHeader extends Component {
  render() {
    const {
      movie,
      images,
      rating,
      changeRating,
      status,
      changeStatus,
      openModal,
      openRejectModal,
    } = this.props;
    return (
      <header className="DetailHeader">
        <HeaderPosterContainer
          background={images.background}
          poster={images.poster}
        />
        <HeaderPanelContainer
          movie={movie}
          rating={rating}
          changeRating={changeRating}
          status={status}
          changeStatus={changeStatus}
          openModal={openModal}
          openRejectModal={openRejectModal}
        />
      </header>
    );
  }
}

export default DetailHeader;

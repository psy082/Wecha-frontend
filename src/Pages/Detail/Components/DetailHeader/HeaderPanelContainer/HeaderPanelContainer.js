import React, { Component } from "react";
import NomalButtonBlock from "./ButtonBlocks/NomalButtonBlock/NomalButtonBlock";
import StatusButtonBlock from "./ButtonBlocks/StatusButtonBlock/StatusButtonBlock";
import SelfRating from "./SelfRating/SelfRating";
import "./HeaderPanelContainer.scss";

class HeaderPanelContainer extends Component {
  render() {
    const {
      movie,
      rating,
      changeRating,
      status,
      changeStatus,
      openModal,
    } = this.props;

    return movie ? (
      <div className="HeaderPanelContainer">
        <div className="headerPanelWrapper">
          <div className="headerPanel">
            <div className="title">{movie.korean_title}</div>
            <div className="detail">
              {movie.year} ・ {movie.genres[0].name} ・{" "}
              {movie.countries[0].name}
            </div>
            <div className="contentRating">평균 ★{movie.avg_rating}</div>
            {status === "none" ? (
              <NomalButtonBlock
                changeStatus={changeStatus}
                openModal={openModal}
              />
            ) : (
              <StatusButtonBlock status={status} openModal={openModal} />
            )}
            <SelfRating rating={rating} changeRating={changeRating} />
          </div>
        </div>
      </div>
    ) : (
      <div></div>
    );
  }
}

export default HeaderPanelContainer;

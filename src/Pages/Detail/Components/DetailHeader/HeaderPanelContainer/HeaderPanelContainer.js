import React, { Component } from "react";
import NomalButtonBlock from "./ButtonBlocks/NomalButtonBlock/NomalButtonBlock";
import StatusButtonBlock from "./ButtonBlocks/StatusButtonBlock/StatusButtonBlock";
import SelfRating from "./SelfRating/SelfRating";
import "./HeaderPanelContainer.scss";

class HeaderPanelContainer extends Component {
  render() {
    const {
      rating,
      changeRating,
      status,
      changeStatus,
      openModal,
    } = this.props;
    return (
      <div className="HeaderPanelContainer">
        <div className="headerPanelWrapper">
          <div className="headerPanel">
            <div className="title">흐르는 강물처럼</div>
            <div className="detail">1992 ・ 드라마 ・ 미국</div>
            <div className="contentRating">평균 ★3.9</div>
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
    );
  }
}

export default HeaderPanelContainer;

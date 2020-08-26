import React, { Component } from "react";
import "./WishButton.scss";

class WishButton extends Component {
  render() {
    const { status, changeStatus, openModal, src } = this.props;
    return (
      <div
        className="WishButton"
        onClick={() => {
          changeStatus(status === "wished" ? "none" : "wished");
          openModal("none");
        }}
      >
        <img alt="wished" src={src} />
        <span>보고싶어요</span>
      </div>
    );
  }
}

export default WishButton;

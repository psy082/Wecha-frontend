import React, { Component } from "react";
import ArrowDownButton from "../../ArrowDownButton/ArrowDownButton";
import "./NomalButtonBlock.scss";

class NomalButtonBlock extends Component {
  render() {
    const { changeStatus, openModal } = this.props;
    return (
      <div className="NomalButtonBlock">
        <div className="buttonBlockWrapper" onClick={() => openModal("review")}>
          <button
            className="actionButton"
            onClick={() => {
              changeStatus("wished");
            }}
          >
            <div className="buttonInner">
              <span className="plusButton"></span>
              <div className="buttonText">보고싶어요</div>
            </div>
          </button>
          <button className="openButton">
            <ArrowDownButton />
          </button>
        </div>
      </div>
    );
  }
}

export default NomalButtonBlock;

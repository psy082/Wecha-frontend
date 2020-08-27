import React, { Component } from "react";
import "./AlertModal.scss";

class AlertModal extends Component {
  render() {
    const { openModal, removeComment } = this.props;
    return (
      <div className="AlertModal">
        <div className="alertWrapper">
          <div className="alertTitle">알림</div>
          <div className="alertMessage">코멘트를 삭제하시겠어요?</div>
          <div className="alertButtons" onClick={() => openModal("none")}>
            <button className="alertButton">취소</button>
            <button className="alertButton" onClick={removeComment}>
              확인
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AlertModal;

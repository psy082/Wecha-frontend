import React, { Component } from "react";
import "./AlertModal.scss";

class AlertModal extends Component {
  render() {
    const { openModal, removeComment } = this.props;
    return (
      <div class="AlertModal">
        <div className="alertWrapper">
          <div class="alertTitle">알림</div>
          <div class="alertMessage">코멘트를 삭제하시겠어요?</div>
          <div class="alertButtons" onClick={() => openModal("none")}>
            <button class="alertButton">취소</button>
            <button class="alertButton" onClick={removeComment}>
              확인
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AlertModal;

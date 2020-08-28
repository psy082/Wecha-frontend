import React, { Component } from "react";
import "./RejectModal.scss";

const body = {
  rating: {
    url:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzc4Nzg3OCIgZD0iTTEyIDE3LjQ0NGwtNi4wMzEgNC40MDJjLS41MS4zNzItMS4xOTgtLjEyOC0xLjAwMS0uNzI3bDIuMzIzLTcuMDk3TDEuMjQgOS42NDdjLS41MTEtLjM3LS4yNDgtMS4xNzkuMzgzLTEuMTc3bDcuNDY3LjAxNiAyLjI5Mi03LjEwNmMuMTkzLS42IDEuMDQzLS42IDEuMjM3IDBsMi4yOTIgNy4xMDYgNy40NjctLjAxNmMuNjMtLjAwMi44OTMuODA3LjM4MiAxLjE3N2wtNi4wNSA0LjM3NSAyLjMyMiA3LjA5N2MuMTk3LjYtLjQ5MSAxLjEtMS4wMDEuNzI3TDEyIDE3LjQ0NHoiLz4KICAgIDwvZz4KPC9zdmc+Cg==",
    desc:
      "평가하시려면 로그인이 필요해요. 회원가입 또는 로그인하고 별점을 기록해보세요.",
  },
  wished: {
    url:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzc4Nzg3OCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS4xOCA2LjczNUg0LjY4YS41LjUgMCAwIDAtLjUuNXYxMy41MTlhLjUuNSAwIDAgMCAuNzg4LjQwN2w2Ljk2MS00Ljk0IDYuOTYxIDQuOTRhLjUuNSAwIDAgMCAuNzktLjQwN1Y3LjIzNGEuNS41IDAgMCAwLS41LS41TTE4LjY4IDIuMjIxSDUuMThhMSAxIDAgMCAwLTEgMXYxLjVhLjUuNSAwIDAgMCAuNS41aDE0LjVhLjUuNSAwIDAgMCAuNS0uNXYtMS41YTEgMSAwIDAgMC0xLTEiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=",
    desc:
      "내 보관함에 작품을 담으려면 로그인이 필요해요. 회원가입 혹은 로그인해주세요.",
  },
  more: {
    url:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzc4Nzg3OCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwYzUuNTIxIDAgMTAtNC40OCAxMC0xMFMxNy41MjEgMiAxMiAybTAgMS41YzQuNjg3IDAgOC41IDMuODEzIDguNSA4LjUgMCA0LjY4Ny0zLjgxMyA4LjUtOC41IDguNS00LjY4NyAwLTguNS0zLjgxMy04LjUtOC41IDAtNC42ODcgMy44MTMtOC41IDguNS04LjUiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTEyLjE2MiAxNS4yMjZsMy45OTItNC41YS4yNS4yNSAwIDAgMC0uMTg2LS40MTdINy45ODJhLjI1LjI1IDAgMCAwLS4xODcuNDE4bDMuOTkzIDQuNWEuMjUuMjUgMCAwIDAgLjM3NCAwIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K",
    desc:
      "내 보관함에 작품을 담으려면 로그인이 필요해요. 회원가입 혹은 로그인해주세요.",
  },
};

class RejectModal extends Component {
  render() {
    const { type, openModal } = this.props;
    return (
      <div className="RejectModal">
        <header className="headerBarPrimitive">
          <div className="closeButtonBlock">
            <button
              className="closeButton"
              onClick={() => openModal("none")}
            ></button>
          </div>
        </header>
        <div className="rejectModalContainer">
          <div className="rejectModalWrapper">
            <div className="rejectModalBlock">
              <div className="iconBlock">
                <img alt="icon" className="iconImage" src={body[type].url} />
              </div>
              <div className="textBlock">{body[type].desc}</div>
            </div>
            <div className="bottomButtonWrapper">
              <div className="bottomButtonBlock">
                <button className="signupButton">회원가입</button>
                <button className="loginButton">로그인</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RejectModal;

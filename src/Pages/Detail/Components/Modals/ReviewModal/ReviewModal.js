import React, { Component } from "react";
import WishButton from "./statusButtons/WishButton/WishButton";
import WatchingButton from "./statusButtons/WatchingButton/WatchingButton";
import "./ReviewModal.scss";

const buttonImages = {
  wished:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgNDhoNDhWMEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3ODc4NzgiIGQ9Ik0zNy4yNSA0LjQ0aC0yNi41YTIgMiAwIDAgMC0yIDJ2MzIuODQ3YzAgMS4xODEuOTcgMi4wMDQgMi4wMDcgMi4wMDQuMzkgMCAuNzktLjExNyAxLjE1My0uMzc1TDI0IDMyLjMwN2wxMi4wOSA4LjYxYy4zNjIuMjU3Ljc2My4zNzQgMS4xNTMuMzc0IDEuMDM4IDAgMi4wMDctLjgyMyAyLjAwNy0yLjAwNFY2LjQ0YTIgMiAwIDAgMC0yLTJtMCAxLjVhLjUuNSAwIDAgMSAuNS41djMyLjg0N2MwIC4zNDctLjI5Ni41MDQtLjUwNy41MDRhLjQ3Ny40NzcgMCAwIDEtLjI4My0uMDk3bC0xMi4wOS04LjYwOGExLjQ5MSAxLjQ5MSAwIDAgMC0xLjc0IDBsLTEyLjA5IDguNjA4YS40NzcuNDc3IDAgMCAxLS4yODMuMDk3Yy0uMjEgMC0uNTA3LS4xNTctLjUwNy0uNTA0VjYuNDRjMC0uMjc1LjIyNS0uNS41LS41aDI2LjUiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNzg3ODc4IiBkPSJNOS41MjUgMTAuMzE5aDI4Ljk0OXYtMS41SDkuNTI1eiIvPgogICAgPC9nPgo8L3N2Zz4K",
  activeWished:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGMkY2RSIgZD0iTTM4Ljc1IDguODJIOS4yNWEuNS41IDAgMCAxLS41LS41VjYuNDRhMiAyIDAgMCAxIDItMmgyNi41YTIgMiAwIDAgMSAyIDJ2MS44OGEuNS41IDAgMCAxLS41LjV6bS0yOS41IDEuNWEuNS41IDAgMCAwLS41LjV2MjguNDY4YzAgMS4xOC45NjkgMi4wMDMgMi4wMDcgMi4wMDMuMzkgMCAuNzktLjExNyAxLjE1My0uMzc0TDI0IDMyLjMwN2wxMi4wOSA4LjYxYTEuOTggMS45OCAwIDAgMCAxLjE1My4zNzRjMS4wMzggMCAyLjAwNy0uODIzIDIuMDA3LTIuMDAzVjEwLjgyYS41LjUgMCAwIDAtLjUtLjVIOS4yNXoiLz4KICAgIDwvZz4KPC9zdmc+Cg==",
  watching:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzc4Nzg3OCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNCAxNC43NWMtNS4xMDEgMC05LjI1IDQuMTQ5LTkuMjUgOS4yNXM0LjE0OSA5LjI1IDkuMjUgOS4yNWM1LjEgMCA5LjI1LTQuMTQ5IDkuMjUtOS4yNVMyOS4xIDE0Ljc1IDI0IDE0Ljc1bTAgMjBjLTUuOTI4IDAtMTAuNzUtNC44MjItMTAuNzUtMTAuNzVTMTguMDcyIDEzLjI1IDI0IDEzLjI1IDM0Ljc1IDE4LjA3MiAzNC43NSAyNCAyOS45MjggMzQuNzUgMjQgMzQuNzUiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTE4IDI0Ljc1YS43NS43NSAwIDAgMS0uNzUtLjc1QTYuNzU4IDYuNzU4IDAgMCAxIDI0IDE3LjI1YS43NS43NSAwIDAgMSAwIDEuNUE1LjI1NiA1LjI1NiAwIDAgMCAxOC43NSAyNGEuNzUuNzUgMCAwIDEtLjc1Ljc1Ii8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNCA3LjVjLTkuOTEyIDAtMTguNDc1IDUuOTU0LTIyLjU2NCAxNC41OTNhNC40NiA0LjQ2IDAgMCAwIDAgMy44MTRDNS41MjUgMzQuNTQ2IDE0LjA4OCA0MC41IDI0IDQwLjVjOS45MTIgMCAxOC40NzUtNS45NTQgMjIuNTY0LTE0LjU5M2E0LjQ2NyA0LjQ2NyAwIDAgMCAwLTMuODE0QzQyLjQ3NSAxMy40NTQgMzMuOTEzIDcuNSAyNCA3LjVNMjQgOWM4LjkzOCAwIDE2Ljk1IDUuMTAzIDIxLjAyMyAxMy4zNTJhMy43MjYgMy43MjYgMCAwIDEgMCAzLjI5NUM0MC45NTMgMzMuODk3IDMyLjkzOSAzOSAyNCAzOWMtOC45NCAwLTE2Ljk1My01LjEwMy0yMS4wMjQtMTMuMzUyYTMuNzI4IDMuNzI4IDAgMCAxIDAtMy4yOTZDNy4wNDcgMTQuMTAzIDE1LjA2MiA5IDI0IDkiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=",
  activeWatching:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzAwQTBGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNCAxOC43NUE1LjI1NiA1LjI1NiAwIDAgMCAxOC43NSAyNGEuNzUuNzUgMCAwIDEtMS41IDBBNi43NTggNi43NTggMCAwIDEgMjQgMTcuMjVhLjc1Ljc1IDAgMCAxIDAgMS41bTAtNGMtNS4xMDEgMC05LjI1IDQuMTUtOS4yNSA5LjI1IDAgNS4xMDEgNC4xNDkgOS4yNSA5LjI1IDkuMjUgNS4xIDAgOS4yNS00LjE0OSA5LjI1LTkuMjUgMC01LjEtNC4xNS05LjI1LTkuMjUtOS4yNSIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMjQgMzQuNzVjLTUuOTI4IDAtMTAuNzUtNC44MjItMTAuNzUtMTAuNzVTMTguMDcyIDEzLjI1IDI0IDEzLjI1IDM0Ljc1IDE4LjA3MiAzNC43NSAyNCAyOS45MjggMzQuNzUgMjQgMzQuNzVtMjIuNTY1LTEyLjY1N0M0Mi40NzUgMTMuNDUzIDMzLjkxMyA3LjUgMjQgNy41Yy05LjkxMiAwLTE4LjQ3NSA1Ljk1My0yMi41NjQgMTQuNTkzYTQuNDYgNC40NiAwIDAgMCAwIDMuODE0QzUuNTI1IDM0LjU0NyAxNC4wODggNDAuNSAyNCA0MC41YzkuOTEzIDAgMTguNDc2LTUuOTU0IDIyLjU2NS0xNC41OTNhNC40NjcgNC40NjcgMCAwIDAgMC0zLjgxNCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==",
};

class ReviewModal extends Component {
  render() {
    const {
      changeStatus,
      background,
      title,
      year,
      status,
      comment,
      openModal,
    } = this.props;
    const { wished, activeWished, watching, activeWatching } = buttonImages;
    return (
      <div className="ReviewModal">
        <div className="reviewModalWrapper">
          <div className="contentInfo">
            <div className="contentImageWrapper">
              <span
                className="contentBackground"
                style={{
                  background: `url(${background})`,
                  backgroundSize: "cover",
                }}
              ></span>
            </div>
            <div className="contentTitleContainer">
              <div className="contentTitle">{title}</div>
              <div className="contentSubtitle">{`영화 ・ ${year}`}</div>
            </div>
          </div>
          <div className="actionButtonContainer">
            <WishButton
              style={{
                color:
                  status === "wished" ? "rgb(255, 47, 110)" : "rgb(0, 0, 0)",
              }}
              status={status}
              changeStatus={changeStatus}
              openModal={openModal}
              src={status === "wished" ? activeWished : wished}
            />
            <WatchingButton
              style={{
                color:
                  status === "watching" ? "rgb(0, 170, 230)" : "rgb(0, 0, 0)",
              }}
              status={status}
              changeStatus={changeStatus}
              openModal={openModal}
              src={status === "watching" ? activeWatching : watching}
            />
          </div>

          <div className="columnActionButton">
            <span className="actionText" onClick={() => openModal("comment")}>
              {comment ? "코멘트 수정하기" : "코멘트 작성하기"}
            </span>
            <img
              alt="create comment"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiM3ODc4NzgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuODU3IDE3Ljc4Nkw2IDIxdi00LjkxYy0xLjg0MS0xLjM3My0zLTMuMzY5LTMtNS41OUMzIDYuMzU4IDcuMDMgMyAxMiAzczkgMy4zNTggOSA3LjVjMCA0LjE0Mi00LjAzIDcuNS05IDcuNS0uNzM5IDAtMS40NTYtLjA3NC0yLjE0My0uMjE0eiIvPgo8L3N2Zz4K"
            />
          </div>
          <div className="cancelButton" onClick={() => openModal("none")}>
            취소
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewModal;

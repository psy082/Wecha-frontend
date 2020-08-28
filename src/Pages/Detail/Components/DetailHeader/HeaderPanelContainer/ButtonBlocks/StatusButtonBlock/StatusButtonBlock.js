import React, { Component } from "react";
import ArrowDownButton from "../../ArrowDownButton/ArrowDownButton";
import "./StatusButtonBlock.scss";

const getButtonComponent = (status) => {
  const _status = {
    wished: {
      url:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI0ZGMkY2RSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01LjgzNCAyNi4xOTFjMCAuNzg4LjY0NiAxLjMzNiAxLjMzOCAxLjMzNi4yNiAwIC41MjctLjA3OC43NjgtLjI1TDE2IDIxLjUzOGw4LjA2IDUuNzRjLjI0Mi4xNzEuNTA4LjI1Ljc2OS4yNS42OTIgMCAxLjMzOC0uNTQ5IDEuMzM4LTEuMzM3VjguNjNhLjUuNSAwIDAgMC0uNS0uNUg2LjMzNGEuNS41IDAgMCAwLS41LjV2MTcuNTYyek0yNi4xNjcgNC4yOTRjMC0uNzM2LS41OTctMS4zMzMtMS4zMzMtMS4zMzNINy4xNjdjLS43MzYgMC0xLjMzMy41OTYtMS4zMzMgMS4zMzNWNi4xM2EuNS41IDAgMCAwIC41LjVoMTkuMzMzYS41LjUgMCAwIDAgLjUtLjVWNC4yOTR6Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K",
      text: "보고싶어요",
    },
    watching: {
      url:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzAwQTBGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNiAxMi43NUEzLjI1NCAzLjI1NCAwIDAgMCAxMi43NSAxNmEuNzUuNzUgMCAwIDEtMS41IDBBNC43NTYgNC43NTYgMCAwIDEgMTYgMTEuMjVhLjc1Ljc1IDAgMCAxIDAgMS41bTAtMi42NjdBNS45MjQgNS45MjQgMCAwIDAgMTAuMDgzIDE2IDUuOTI0IDUuOTI0IDAgMCAwIDE2IDIxLjkxNyA1LjkyNCA1LjkyNCAwIDAgMCAyMS45MTYgMTYgNS45MjQgNS45MjQgMCAwIDAgMTYgMTAuMDgzIi8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNiAyMy40MTZjLTQuMDkgMC03LjQxNy0zLjMyNy03LjQxNy03LjQxNyAwLTQuMDg5IDMuMzI3LTcuNDE2IDcuNDE3LTcuNDE2UzIzLjQxNiAxMS45MSAyMy40MTYgMTZjMCA0LjA5LTMuMzI3IDcuNDE3LTcuNDE2IDcuNDE3bTE1LjA2LTguNjU0QzI4LjM0IDguOTg0IDIyLjYyMSA1IDE2IDUgOS4zNzggNSAzLjY2MSA4Ljk4NC45NCAxNC43NjJhMi45MzQgMi45MzQgMCAwIDAgMCAyLjQ3NUMzLjY2MSAyMy4wMTUgOS4zNzggMjcgMTYgMjdjNi42MjEgMCAxMi4zNC0zLjk4NCAxNS4wNi05Ljc2MmEyLjkzNCAyLjkzNCAwIDAgMCAwLTIuNDc1Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K",
      text: "보는중",
    },
  };

  return (
    _status[status] && (
      <div className="buttonInner">
        <span
          className="statusButton"
          style={{
            background: `url(${_status[status].url}) no-repeat center`,
          }}
        />
        <div className="buttonText">{_status[status].text}</div>
      </div>
    )
  );
};

class StatusButtonBlock extends Component {
  render() {
    const { status, openModal } = this.props;
    return (
      <div className="StatusButtonBlock">
        <div className="buttonBlockWrapper" onClick={() => openModal("review")}>
          <button className="actionButton">{getButtonComponent(status)}</button>
          <button className="openButton">
            <ArrowDownButton fill={true} />
          </button>
        </div>
      </div>
    );
  }
}

export default StatusButtonBlock;

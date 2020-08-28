import React, { Component } from "react";
import "./SliderButton.scss";

export default class SliderButton extends Component {
  selectClass = (type, state) => {
    let className = `${type} SliderButton`;
    if (state) className += " hide";
    return className;
  };

  render() {
    return (
      <button
        onClick={() => {
          this.props.onClick();
          this.props.move();
        }}
        className={this.selectClass(this.props.type, this.props.state)}
      >
        <img
          className="arrow"
          alt="arrow"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyOTJBMzIiIHN0cm9rZT0iIzI5MkEzMiIgc3Ryb2tlLXdpZHRoPSIuMzUiIGQ9Ik0zLjQyOSAxMy40MDlMNC4zNTQgMTQuMjU4IDEwLjY4IDguNDYgMTEuMTQzIDguMDM2IDQuMzU0IDEuODEzIDMuNDI5IDIuNjYyIDkuMjkxIDguMDM2eiIvPgogICAgPC9nPgo8L3N2Zz4K"
        />
      </button>
    );
  }
}

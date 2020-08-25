import React, { Component } from "react";
import "./ArrowDownButton.scss";

class ArrowDownButton extends Component {
  render() {
    return (
      <svg
        fill=""
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="ArrowDownButton"
      >
        <path
          fill={this.props.fill ? "#d9d9d9" : "#FFF"}
          fillRule="evenodd"
          d="M12 16l6-6H6z"
        ></path>
      </svg>
    );
  }
}

export default ArrowDownButton;

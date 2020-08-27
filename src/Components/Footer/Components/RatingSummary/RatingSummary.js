import React, { Component } from "react";
import "./RatingSummary.scss";

export default class RatingSummary extends Component {
  render() {
    return (
      <div className="RatingSummary">
        <span className="RatingSummaryText">
          지금까지 <em>★ 568,104,421 개의 평가가 </em> 쌓였어요.
        </span>
      </div>
    );
  }
}

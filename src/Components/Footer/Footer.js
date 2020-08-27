import React, { Component } from "react";
import RatingSummary from "./Components/RatingSummary/RatingSummary";
import InfoContainer from "./Components/InfoContainer/InfoContainer";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <RatingSummary />
        <InfoContainer />
      </div>
    );
  }
}

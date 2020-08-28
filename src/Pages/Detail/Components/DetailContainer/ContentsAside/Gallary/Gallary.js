import React, { Component } from "react";
import "./Gallary.scss";

class Gallary extends Component {
  render() {
    return (
      <div className="Gallary">
        <img alt="gallary" src={this.props.src} />
      </div>
    );
  }
}

export default Gallary;

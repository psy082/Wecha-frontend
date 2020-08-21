import React, { Component } from "react";
import "./Poster";

class Poster extends Component {
  render() {
    return (
      <div
        style={{ height: this.props.height, width: this.props.width }}
        className="Poster"
      >
        <img alt="poster" src={this.props.src} />
      </div>
    );
  }
}

export default Poster;

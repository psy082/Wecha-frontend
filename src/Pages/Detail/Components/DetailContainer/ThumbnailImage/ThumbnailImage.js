import React, { Component } from "react";
import "./ThumbnailImage.scss";

class ThumbnailImage extends Component {
  render() {
    const { src } = this.props;
    return (
      <div className="ThumbnailImage">
        <img
          alt="thumbnail"
          className="userImage"
          src={src ? src : "/images/empty_user.svg"}
        />
      </div>
    );
  }
}

export default ThumbnailImage;

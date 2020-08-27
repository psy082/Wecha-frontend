import React, { Component } from "react";
import "./ThumbnailImage.scss";

class ThumbnailImage extends Component {
  render() {
    const { src, size } = this.props;
    return (
      <div
        className="ThumbnailImage"
        style={{ width: size ? size : "56px", height: size ? size : "56px" }}
      >
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

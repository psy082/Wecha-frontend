import React, { Component } from "react";
import ThumbnailImage from "../ThumbnailImage/ThumbnailImage";
import "./CommentContainer.scss";

class CommentContainer extends Component {
  render() {
    return (
      <div className="CommentContainer">
        <header>
          <ThumbnailImage />
          <div className="nickname"></div>
          <div className="rating"></div>
        </header>
        <div className="comment"></div>
        <div className="reactions"></div>
        <div className="userAction"></div>
      </div>
    );
  }
}

export default CommentContainer;

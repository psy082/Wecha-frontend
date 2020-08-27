import React, { Component } from "react";
import "./MediaItems.scss";

class MediaItems extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className="MediaItems">
        <div className="mediaItemsHeaderBlock">
          <header className="mediaItemsHeader">
            <h2 className="mediaItemsTitle">{title}</h2>
          </header>
        </div>
        <div className="mediaItemsBlock">{children}</div>
        <div className="dividerBlock">
          <hr className="divider" />
        </div>
      </section>
    );
  }
}

export default MediaItems;

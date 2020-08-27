import React, { Component } from "react";
import "./ContentsContainer.scss";

const getTopRight = (type, rating) => {
  const topRight = {
    button: <div className="viewMore">더보기</div>,
    rating: <span className="ratingStatHeader">평균 ★{rating}</span>,
  };

  return topRight[type];
};

class ContentsContainer extends Component {
  render() {
    const { title, button, rating, stretch } = this.props;
    return (
      <section className="ContentsContainer">
        <header className="contentsHeader">
          <h2 className="contentstitle">{title}</h2>
          <div className="topRight">
            {button && getTopRight("button")}
            {rating && getTopRight("rating", rating)}
          </div>
        </header>
        <div
          className="contents"
          style={{ margin: stretch ? "0 10px" : "0 20px" }}
        >
          {this.props.children}
          <hr className="divider" />
        </div>
      </section>
    );
  }
}

export default ContentsContainer;

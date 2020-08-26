import React, { Component } from "react";

import "./SelfCommentBlock.scss";

const suggestionText = (rating, username) => {
  const preText = {
    normal: "이 작품에 대한 ",
    great: "좋은 평가네요. ",
    outstanding: "대단한 작품이군요! ",
  };
  const postText = `${username} 님의 감동을 글로 남겨보세요`;

  if (rating > 4) return preText.outstanding + postText;
  if (rating > 3) return preText.great + postText;
  return preText.normal + postText;
};

class SelfCommentBlock extends Component {
  render() {
    const { rating, username, openModal } = this.props;
    console.log(rating);
    return (
      <div className="SelfCommentBlock">
        <section className="leaveCommentBlock">
          <h3 className="commentText">{suggestionText(rating, username)}</h3>
          <div className="buttonBlock">
            <button onClick={() => openModal("comment")}>코멘트 남기기</button>
          </div>
        </section>
      </div>
    );
  }
}

export default SelfCommentBlock;

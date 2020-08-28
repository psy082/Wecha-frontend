import React, { Component } from "react";
import "./CommentModal.scss";

const commentButtons = (type, onClick) => {
  const buttons = {
    normal: (
      <button className="createComment" disabled>
        코멘트 작성
      </button>
    ),
    active: (
      <button className="createComment" onClick={onClick}>
        코멘트 작성
      </button>
    ),
    edit: (
      <button className="createComment" onClick={onClick}>
        코멘트 수정
      </button>
    ),
  };

  return buttons[type];
};

class commentModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: props.comment,
    };
  }

  updateInput = ({ target: { value } }) => {
    this.setState({ input: value });
  };

  createComment = () => {
    this.props.createComment(this.state.input);
    this.setState({ input: "" });
    this.props.openModal("none");
  };

  render() {
    const { comment, title, openModal } = this.props;
    console.log(this.state, comment);
    return (
      <div className="CommentModal">
        <header className="commentedMovie">
          <div className="headerButtons">
            <button
              className="escapeButton"
              onClick={() => openModal("none")}
            ></button>
          </div>
          <em className="movieTitle">{title}</em>
          <div className="headerButtons">
            {comment
              ? commentButtons("edit", this.createComment)
              : this.state.input
              ? commentButtons("active", this.createComment)
              : commentButtons("normal")}
          </div>
        </header>
        <div className="commentInputContainer">
          <div className="commentInputWrapper">
            <textarea
              value={this.state.input}
              placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
              onChange={this.updateInput}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default commentModal;

import React, { Component } from "react";
import ThumbnailImage from "../../../ThumbnailImage/ThumbnailImage";
import "./MediaButtons.scss";

const getMediaButton = (type) => {
  const media = {
    watcha: {
      imageUrl:
        "https://d3sz5r0rl9fxuc.cloudfront.net/images/notice_watcha.png?1594626993",
      name: "왓챠",
      desciption: "영화, TV 프로그램 무제한 감상",
    },
    tving: {
      imageUrl:
        "https://images.watcha.net/updatable_images/2645/original/ba8d8dfca1da8235632ddfb8540d00b25c896fdd.jpg",
      name: "TVING",
      desciption: "최고의 인생작을 티빙에서!",
    },
    netflix: {
      imageUrl:
        "https://images.watcha.net/updatable_images/2564/original/210df0dac6f232d57d5a3b70f10d12df0e1e8151.png",
      name: "넷플릭스",
    },
  };

  return (
    <>
      <ThumbnailImage src={media[type].imageUrl} />
      <div className="mediaInfo">
        <div className="mediaTitles">
          <div className="mediaTitle">{media[type].name}</div>
          <div className="mediaDescription">{media[type].desciption}</div>
        </div>
        <div>
          <button className="watchButton">감상하기</button>
        </div>
      </div>
    </>
  );
};

class MediaButtons extends Component {
  render() {
    return (
      <div className="MediaButtons">{getMediaButton(this.props.type)}</div>
    );
  }
}

export default MediaButtons;

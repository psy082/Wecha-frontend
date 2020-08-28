import React, { Component } from "react";
import MediaItems from "./MediaItems/MediaItems";
import MediaButtons from "./MediaItems/MediaButtons/MediaButtons";
import ContentSlider from "../ContentSlider/ContentSlider";
import Gallary from "./Gallary/Gallary";
import Videos from "./Videos/Videos";
import "./ContentsAside.scss";

class ContentsAside extends Component {
  render() {
    const {
      providers,
      images: { gallary, videos },
    } = this.props;
    return (
      <div className="ContentsAside">
        <div className="contentsAsideWrapper">
          <MediaItems title="감상하기">
            {Array.from(providers).map(({ name }) => (
              <MediaButtons key={name} type={name} />
            ))}
          </MediaItems>
          <MediaItems title="갤러리">
            {gallary && (
              <ContentSlider
                numberOfItems={gallary.length}
                slidesRow={1}
                slidesColumn={1}
                slidesToShow={2}
              >
                {gallary.map((url, index) => (
                  <Gallary key={`gallary${index}`} src={url} />
                ))}
              </ContentSlider>
            )}
          </MediaItems>
          <MediaItems title="동영상">
            {videos && (
              <ContentSlider
                numberOfItems={videos.length}
                slidesRow={1}
                slidesColumn={1}
                slidesToShow={2}
              >
                {videos.map((url, index) => (
                  <Videos key={`videos${index}`} src={url} />
                ))}
              </ContentSlider>
            )}
          </MediaItems>
        </div>
      </div>
    );
  }
}

export default ContentsAside;

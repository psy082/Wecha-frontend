import React, { Component } from "react";
import "./DescriptionContainer.scss";

class DescriptionContainer extends Component {
  render() {
    const { movie } = this.props;
    return movie ? (
      <div className="DescriptionContainer">
        <article className="descriptionOverview">
          <div className="descriptionSummary">
            {movie.original_title}
            <span className="descriptionOverviewMeta">
              {movie.year} · {movie.countries[0].name} · {movie.genres[0].name}
            </span>
            <span className="descriptionOverviewMeta">
              {movie.running_time_hour}시간 {movie.running_time_minute}분
            </span>
          </div>
          <div className="descriptionText">{movie.description}</div>
        </article>
      </div>
    ) : (
      <div></div>
    );
  }
}

export default DescriptionContainer;

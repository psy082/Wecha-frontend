import React, { Component } from "react";
import "./MoviePosterItem.scss";

export default class MoviePosterItem extends Component {
  render() {
    return (
      <li className="MoviePosterItem">
        <a title={this.props.korean_title} href="#">
          <div className="moviePosterImgContainer">
            <div className="posterImgItem">
              <img src={this.props.poster_url} />
              <div className="rankBadge">1</div>
              <div className="ottBadge">
                <img
                  src="https://images.watcha.net/updatable_images/2570/original/f72039e19e3d483c3c6d8178c526a1c979537975.png"
                  alt="왓챠!"
                />
              </div>
            </div>
          </div>
          <div className="moviePosterInfo">
            <div className="movieContentTitle">{this.props.korean_title}</div>
            <div className="contentYearAndNation">
              {this.props.year} ・ {this.props.country}
            </div>
            <div className="average">
              <span>평균</span>
              <span>★</span>
              <span>{this.props.avg_score}</span>
            </div>
          </div>
        </a>
      </li>
    );
  }
}

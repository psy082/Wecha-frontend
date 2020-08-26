import React, { Component } from "react";
import "./MoviePosterItem.scss";

export default class MoviePosterItem extends Component {
  selectClass = (ottName, onlyOttName) => {
    let className = "ottBadge";
    const { service_providers } = this.props;
    let sp_id = [];

    service_providers.forEach((sp) => {
      sp_id.push(sp.id);
    });

    if (sp_id.includes(48) && sp_id.includes(46)) {
      className += ` ${ottName}`;
    } else if (sp_id.includes(48) || sp_id.includes(46)) {
      className += ` ${onlyOttName}`;
    }
    return className;
  };

  render() {
    const {
      rank_num,
      title,
      poster_url,
      year,
      countries,
      avg_rating,
      removeYearNation,
      removeRankBadge,
    } = this.props;
    return (
      <li className="MoviePosterItem">
        <a title={title} href="#">
          <div className="moviePosterImgContainer">
            <div className="posterImgItem">
              <img src={poster_url} />
              <div className={`rankBadge ${removeRankBadge}`}>{rank_num}</div>
              <div className={this.selectClass("netflix", "netflix")}>
                <img
                  src="https://images.watcha.net/updatable_images/2571/original/42e70f1bc34d7af54478a311983ecf6d3601eefa.png"
                  alt="넷플릭스"
                />
              </div>
              <div className={this.selectClass("watcha", "onlyWatcha")}>
                <img
                  src="https://images.watcha.net/updatable_images/2570/original/f72039e19e3d483c3c6d8178c526a1c979537975.png"
                  alt="왓챠!"
                />
              </div>
            </div>
          </div>
          <div className="moviePosterInfo">
            <div className="movieContentTitle">{title}</div>
            <div className={`contentYearAndNation ${removeYearNation}`}>
              {year} ・ {countries}
            </div>
            <div className="average">
              <span>평균</span>
              <span>★</span>
              <span>{avg_rating}</span>
            </div>
          </div>
        </a>
      </li>
    );
  }
}

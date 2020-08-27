import React, { Component } from "react";
import "./CollectionPosterItem.scss";

export default class CollectionPosterItem extends Component {
  selectClass = (ottName, onlyOttName) => {
    let className = "ottBadge";
    const { service_providers } = this.props.Films;
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
    const { Films } = this.props;
    return (
      <li className="CollectionPosterItem">
        <a title={Films.title} href="#">
          <div className="posterImgContainer">
            <div className="posterImg">
              <img alt="poster Img" src={Films.poster_url} />
            </div>
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
          <div className="posterInfoContainer">
            <div className="posterInfoTitle">{Films.title}</div>
            <div className="posterInfoRating">평균 ★ {Films.avg_rating}</div>
          </div>
        </a>
      </li>
    );
  }
}

import React, { Component } from "react";
import "./CollectionItem.scss";

export default class CollectionItem extends Component {
  render() {
    const { name, poster_urls } = this.props;
    return (
      <li className="CollectionItem">
        <a title={name} href="#">
          <div className="collectionImgContainer">
            <div className="posterImgItem">
              {poster_urls.map((el, idx) => {
                return (
                  <div key={idx} className="posterImgBox">
                    <div className="posterImg">
                      <img alt="CollectionImage" src={el} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="collectionInfo">
            <p className="collectionInfoText">{name}</p>
          </div>
        </a>
      </li>
    );
  }
}

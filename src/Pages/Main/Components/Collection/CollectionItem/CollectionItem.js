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
              <div className="posterImgBox">
                <div className="posterImg">
                  <img alt="CollectionImage" src={poster_urls[0]} />
                </div>
              </div>
              <div className="posterImgBox">
                <div className="posterImg">
                  <img alt="CollectionImage" src={poster_urls[1]} />
                </div>
              </div>
              <div className="posterImgBox">
                <div className="posterImg">
                  <img alt="CollectionImage" src={poster_urls[2]} />
                </div>
              </div>
              <div className="posterImgBox">
                <div className="posterImg">
                  <img alt="CollectionImage" src={poster_urls[3]} />
                </div>
              </div>
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

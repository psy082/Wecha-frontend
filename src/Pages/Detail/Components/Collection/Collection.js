import React, { Component } from "react";
import { Link } from "react-router-dom";
import Poster from "../Poster/Poster";

class Collection extends Component {
  render() {
    return (
      <li className="Collection">
        <Link>
          <div className="posterBlock"></div>
          <div className="collectionInfo">
            <div className="collectionTitle"></div>
            <div className="collectionLike"></div>
          </div>
        </Link>
      </li>
    );
  }
}

export default Collection;

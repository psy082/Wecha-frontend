import React, { Component } from "react";
import ThumbnailImage from "../ThumbnailImage/ThumbnailImage";
import "./PersonInvolved.scss";

class PersonInvolved extends Component {
  render() {
    const { src, name, role } = this.props;
    return (
      <div className="PersonInvolved">
        <div className="personWrapper">
          <ThumbnailImage src={src} />
          <div className="personInfoBlock">
            <div className="personInfo">
              <div className="personName">{name}</div>
              <div className="personRole">{role}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonInvolved;

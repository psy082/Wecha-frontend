import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./CollectionHeader.scss";

class CollectionHeader extends Component {
  constructor() {
    super();
    this.state = {
      scrollData: 0,
      scrollable: 0,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const scrollNow = window.scrollY;
      let scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      this.setState({
        scrollData: scrollNow,
        scrollable: Math.ceil(scrollable),
      });
    });
  }

  classSelect = (title, removeAndShowTitle) => {
    const { scrollData } = this.state;
    let classSelect = title;

    if (scrollData > 318) {
      classSelect += ` ${removeAndShowTitle}`;
    }
    return classSelect;
  };

  goToMainPage = () => {
    this.props.history.push("/");
  };

  render() {
    const { CollectionTitle } = this.props;
    return (
      <header className="CollectionHeader">
        <div className="backBotton">
          <div className="topLeftBotton">
            <button onClick={this.goToMainPage} className="legtBotton"></button>
          </div>
        </div>
        <div className={this.classSelect("largeTitle", "removeTitle")}>
          <div className="titleText">{CollectionTitle.name}</div>
        </div>
        <div className={this.classSelect("smallTitle", "showTitle")}>
          {CollectionTitle.name}
        </div>
      </header>
    );
  }
}

export default withRouter(CollectionHeader);

import React, { Component } from "react";
import "./RatingGraph.scss";

class RatingGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: {},
      maxTotal: Math.max(...props.scores.map(({ total }) => total)),
    };
    for (let i = 1; i <= 10; i++) {
      this.state.scores[`${(i / 2).toFixed(1)}`] = 0;
    }

    for (let item of props.scores) {
      this.state.scores[item.score] = item.total;
    }
  }

  render() {
    const { scores, maxTotal } = this.state;
    delete scores["0.0"];
    return (
      <div className="RatingGraph">
        <div className="RatingGraphWrapper">
          <div className="barsContainer">
            {Object.entries(scores).map(
              ([score, total]) =>
                score && (
                  <div key={`bar${score}`} className="barArea">
                    <span
                      style={{
                        height:
                          total !== 0 ? `${88 * (total / maxTotal)}px` : "1px",
                      }}
                      className={setClassName(score, total, maxTotal)}
                    ></span>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    );
  }
}

const setClassName = (score, total, maxTotal) => {
  const nameTag = ["1.0", "2.0", "3.0", "4.0", "5.0"];
  let className = total === maxTotal ? "highestBar" : "normalBar";
  if (nameTag.includes(score)) className = className + " numberBar";
  return className;
};

export default RatingGraph;

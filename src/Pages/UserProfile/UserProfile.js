import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import API from "../../config";
import "./UserProfile.scss";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      profileImg: "",
      movies: [],
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${API}/user/info`, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (token) {
            this.setState({
              name: res.user_name,
              profileImg: res.user_profile,
              movies: res.user_review_films,
            });
          }
        });
    }
  }

  render() {
    return (
      <div className="UserProfile">
        <div className="myPageContainer">
          <div className="myPageBg">
            <div className="myPageBgShadow" />
          </div>
          <div className="sectionUser">
            <button className="profileBtn">
              <img alt="profile" src={this.state.profileImg} />
            </button>
            <ul>
              <li>
                <h1 className="name">{this.state.name}</h1>
              </li>
              <li>
                <div className="msg">프로필이 없습니다.</div>
              </li>
            </ul>
          </div>
          <div className="ratedMovie">
            <h2>
              <img alt="" src="/images/mypage/rate.svg"></img>평가한 영화
            </h2>
            <div className="movieList">
              {this.state.movies.map((el) => {
                return (
                  <ul className="movie">
                    <li>
                      <img className="poster" alt="movie" src={el.poster_url} />
                      <div className="title">{el.title}</div>
                      <div className="rating">★{el.rating}</div>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserProfile);

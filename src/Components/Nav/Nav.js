import React, { Component } from "react";
import SignUp from "../../Pages/Modal/SignUp";
import "./Nav.scss";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  showModal = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <>
        <nav className="Nav">
          <div className="navContainer">
            <ul className="navLeft">
              <li className="logo">
                <a href="/">
                  <img
                    className="logo"
                    alt="logo"
                    src="/images/nav/watcha_logo.png"
                  />
                </a>
              </li>
              <li className="movie">
                <button className="movieBtn" name="movieBtn">
                  영화
                </button>
              </li>
              <li className="tv">
                <button className="tvBtn">TV 프로그램</button>
              </li>
              <li className="book">
                <button className="bookBtn">책</button>
              </li>
            </ul>
            <ul className="navRight">
              <li className="search">
                <div className="searchContainer">
                  <div className="label">
                    <input
                      id="searchInput"
                      name="search"
                      type="search"
                      placeholder="작품 제목, 배우, 감독을 검색해보세요."
                      autoComplete="off"
                    ></input>
                  </div>
                </div>
              </li>
              <li className="login">
                <button className="loginBtn">로그인</button>
              </li>
              <li className="signUp">
                <button className="signUpBtn" onClick={this.showModal}>
                  회원가입
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="modal">
          <SignUp functionCallFromParent={this.showModal.bind(this)} switchModal={this.state.visible} />
        </div>
      </>
    );
  }
}

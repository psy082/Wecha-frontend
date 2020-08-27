import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Login from "../../Pages/Modal/Login";
import SignUp from "../../Pages/Modal/SignUp";
import FoolIcon from "../FoolIcon/FoolIcon";
import API from "../../config";
import "./Nav.scss";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      loginVisible: true,
      signUpVisible: true,
      isActive: false,
      name: "",
      email: "",
      password: "",
      profileImg: "",
      isLogin: false,
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  loginFetch = () => {
    fetch(`${API}/user/signin`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.access_token) {
          localStorage.setItem("token", res.access_token);
          alert("로그인 성공");
          this.props.history.push("/");
          this.setState({
            profileImg: res.profile_url,
            isLogin: true,
            email: this.state.email,
            password: this.state.password,
            loginVisible: !this.state.loginVisible,
          });
        } else {
          alert("로그인 실패");
        }
      });
  };

  loginValidate = (type) => {
    const validation = {
      email: this.state.email.includes("@"),
      password: this.state.password.length > 5,
    };
    return validation[type];
  };

  loginDecideState = (type, value) => {
    if (!value) return "label";
    return this.loginValidate(type) ? "label" : "labelWrong";
  };

  handleLoginEnter = (e) => {
    const loginValidate =
      this.state.email.includes("@") && this.state.password.length > 5;
    if (e.key === "Enter" && loginValidate === true) {
      this.loginFetch();
    }
  };

  logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  signUpFetch = () => {
    fetch("http://10.58.5.55:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SIGNUP_SUCCESS") {
          alert("회원가입 성공");
          this.props.history.push("/");
          window.location.reload();
        } else {
          alert("회원가입 실패");
        }
      });
  };

  signUpValidate = (type) => {
    const validation = {
      name: this.state.name.length > 1,
      email: this.state.email.includes("@"),
      password: this.state.password.length > 5,
    };
    return validation[type];
  };

  signUpDecideState = (type, value) => {
    if (!value) return "label";
    return this.signUpValidate(type) ? "label" : "labelWrong";
  };

  handleSignUpEnter = (e) => {
    const signUpValidate =
      this.state.name.length > 1 &&
      this.state.email.includes("@") &&
      this.state.password.length > 5;
    if (e.key === "Enter" && signUpValidate === true) {
      this.signUpFetch();
    }
  };

  goToUserProfile = () => {
    this.props.history.push("/users/1");
  };

  showLoginModal = () => {
    this.setState({ loginVisible: !this.state.loginVisible });
  };

  showSignUpModal = () => {
    this.setState({ signUpVisible: !this.state.signUpVisible });
  };

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
              isLogin: true,
              profileImg: res.user_profile,
            });
          }
        });
    }
  }

  render() {
    return (
      <>
        <nav className="Nav">
          <div className="navContainer">
            <ul className="navLeft">
              <li className="logo">
                <FoolIcon />
              </li>
              <li>
                <button className="btnActive">영화</button>
              </li>
              <li>
                <button className="btn">TV 프로그램</button>
              </li>
              <li>
                <button className="btn">책</button>
              </li>
            </ul>
            <ul className="navRight">
              <li className="search">
                <div className="searchContainer">
                  <div className="label">
                    <input
                      name="search"
                      type="search"
                      placeholder="작품 제목, 배우, 감독을 검색해보세요."
                      autoComplete="off"
                    />
                  </div>
                </div>
              </li>
              <li>
                {this.state.isLogin ? (
                  <button className="reviewBtn">평가하기</button>
                ) : (
                  <button className="loginBtn" onClick={this.showLoginModal}>
                    로그인
                  </button>
                )}
              </li>
              <li>
                {this.state.isLogin ? (
                  <button className="profileBtn">
                    <img
                      alt=""
                      src={this.state.profileImg}
                      onClick={this.goToUserProfile}
                    ></img>
                  </button>
                ) : (
                  <button className="signUpBtn" onClick={this.showSignUpModal}>
                    회원가입
                  </button>
                )}
              </li>
              <li>
                {this.state.isLogin && (
                  <button className="logoutBtn" onClick={this.logout}>
                    로그아웃
                  </button>
                )}
              </li>
            </ul>
          </div>
        </nav>
        <div className="modal">
          <Login
            loginFetch={this.loginFetch}
            handleInput={this.handleInput}
            handleLoginEnter={this.handleLoginEnter}
            loginValidate={this.loginValidate}
            loginDecideState={this.loginDecideState}
            name={this.state.name}
            email={this.state.email}
            password={this.state.password}
            showLoginModal={this.showLoginModal}
            switchModal={this.state.loginVisible}
          />
          <SignUp
            signUpFetch={this.signUpFetch}
            handleInput={this.handleInput}
            handleLoginEnter={this.handleLoginEnter}
            signUpValidate={this.signUpValidate}
            signUpDecideState={this.signUpDecideState}
            name={this.state.name}
            email={this.state.email}
            password={this.state.password}
            handleSignUpEnter={this.handleSignUpEnter}
            showSignUpModal={this.showSignUpModal}
            switchModal={this.state.signUpVisible}
          />
        </div>
      </>
    );
  }
}

export default withRouter(Nav);

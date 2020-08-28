import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./SignUp.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpVisible: this.props.signUpVisible,
    };
  }

  render() {
    const signUpValidate =
      this.props.name.length > 1 &&
      this.props.email.includes("@") &&
      this.props.password.length > 5;

    return (
      <div className={this.props.switchModal ? "hideSignUp" : "SignUp"}>
        <div className="signUpBg" onClick={this.props.showSignUpModal}></div>
        <div className="signUpContainer">
          <header className="logo"></header>
          <h2 className="title">회원가입</h2>
          <section className="signUpContents">
            <div className="form">
              <div
                className={this.props.signUpDecideState(
                  "name",
                  this.props.name
                )}
              >
                <input
                  className={this.props.name ? "inputChecked" : "none"}
                  type="text"
                  placeholder="이름"
                  name="name"
                  onChange={this.props.handleInput}
                  onKeyPress={this.props.handleSignUpEnter}
                />
                <div className="checkIcon"></div>
              </div>
              <div
                className={this.props.signUpDecideState(
                  "email",
                  this.props.email
                )}
              >
                <input
                  className={this.props.email ? "inputChecked" : "none"}
                  type="text"
                  placeholder="이메일"
                  name="email"
                  onChange={this.props.handleInput}
                  onKeyPress={this.props.handleSignUpEnter}
                />
                <div className="checkIcon"></div>
              </div>
              <div
                className={this.props.signUpDecideState(
                  "password",
                  this.props.password
                )}
              >
                <input
                  className={this.props.password ? "inputChecked" : "none"}
                  type="password"
                  placeholder="비밀번호"
                  name="password"
                  onChange={this.props.handleInput}
                  onKeyPress={this.props.handleSignUpEnter}
                />
                <div className="checkIcon"></div>
              </div>
              <button
                className="signUpBtn"
                onClick={this.props.signUpFetch}
                disabled={!signUpValidate}
              >
                회원가입
              </button>
            </div>
            <p className="createId">
              이미 가입하셨나요? <a href="/">로그인</a>
            </p>
            <p className="hrText">OR</p>
            <hr></hr>
            <button className="fbLoginBtn">Facebook 으로 로그인</button>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);

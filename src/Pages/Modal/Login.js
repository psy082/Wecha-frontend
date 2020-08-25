import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginVisible: this.props.loginVisible,
    };
  }

  showLoginModal = (e) => {
    // e.preventDefault();
    this.props.functionLoginModal();
  };

  render() {
    const btnValidation =
      this.props.email.includes("@") && this.props.password.length > 5;

    return (
      <div className={this.props.switchModal ? "hideLogin" : "Login"}>
        <div className="loginBg" onClick={this.showLoginModal.bind(this)}></div>
        <div className="loginContainer">
          <header className="logo"></header>
          <h2 className="title">로그인</h2>
          <section className="loginContents">
            <div className="form">
              <div
                className={this.props.decideState("email", this.props.email)}
              >
                <input
                  className={this.props.email ? "inputChecked" : "none"}
                  type="text"
                  placeholder="이메일"
                  name="email"
                  onChange={this.props.handleInput}
                ></input>
                <div className="checkIcon"></div>
              </div>
              <div
                className={this.props.decideState(
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
                ></input>
                <div className="checkIcon"></div>
              </div>
              <button
                className="loginBtn"
                onClick={this.props.loginFetch}
                // disabled={!btnValidation}
              >
                로그인
              </button>
            </div>
            <p className="forgetPw">비밀번호를 잊어버리셨나요?</p>
            <p className="createId">
              계정이 없으신가요? <a href="/">회원가입</a>
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

export default withRouter(Login);




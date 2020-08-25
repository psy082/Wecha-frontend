import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./SignUp.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      signUpVisible: this.props.signUpVisible,
    };
  }

  showSignUpModal = (e) => {
    e.preventDefault();
    this.props.functionSignUpModal();
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = (type) => {
    const validation = {
      name: this.state.name.length > 1,
      email: this.state.email.includes("@"),
      password: this.state.password.length > 5,
    };
    return validation[type];
  };

  decideState = (type, value) => {
    if (!value) return "label";
    return this.validate(type) ? "label" : "labelWrong";
  };

  handleFetch = () => {
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

  render() {
    const btnValidation =
      this.state.name.length > 1 &&
      this.state.email.includes("@") &&
      this.state.password.length > 5;

    return (
      <div className={this.props.switchModal ? "hideSignUp" : "SignUp"}>
        <div
          className="signUpBg"
          onClick={this.showSignUpModal.bind(this)}
        ></div>
        <div className="signUpContainer">
          <header className="logo"></header>
          <h2 className="title">회원가입</h2>
          <section className="signUpContents">
            <div className="form">
              <div className={this.decideState("name", this.state.name)}>
                <input
                  className={this.state.name ? "inputChecked" : "none"}
                  type="text"
                  placeholder="이름"
                  name="name"
                  onChange={this.handleInput}
                ></input>
                <div className="checkIcon"></div>
              </div>
              <div className={this.decideState("email", this.state.email)}>
                <input
                  className={this.state.email ? "inputChecked" : "none"}
                  type="text"
                  placeholder="이메일"
                  name="email"
                  onChange={this.handleInput}
                ></input>
                <div className="checkIcon"></div>
              </div>
              <div
                className={this.decideState("password", this.state.password)}
              >
                <input
                  className={this.state.password ? "inputChecked" : "none"}
                  type="password"
                  placeholder="비밀번호"
                  name="password"
                  onChange={this.handleInput}
                ></input>
                <div className="checkIcon"></div>
              </div>
              <button
                className="signUpBtn"
                onClick={this.handleFetch}
                disabled={!btnValidation}
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

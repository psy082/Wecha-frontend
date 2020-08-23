import React, { Component } from "react";
import "./SignUp.scss";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      visible: this.props.visible,
    };
  }

  showModal = (e) => {
    e.preventDefault();
    this.props.functionCallFromParent();
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

  handleSignUp = () => {
    fetch("http://10.58.5.55:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    }).then((res) => {
      console.log(res.message);
      res.json();
    });
  };

  render() {
    const btnValidation =
      this.state.name.length > 1 &&
      this.state.email.includes("@") &&
      this.state.password.length > 5;

    return (
      <div className={this.props.switchModal ? "hideSignUp" : "SignUp"}>
        <div className="signUpBg" onClick={this.showModal.bind(this)}></div>
        <div className="signUpContainer">
          <header className="logo"></header>
          <h2 className="title">회원가입</h2>
          <section className="signUpContents">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
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
                onClick={this.handleSignUp}
                disabled={!btnValidation}
              >
                회원가입
              </button>
            </form>
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

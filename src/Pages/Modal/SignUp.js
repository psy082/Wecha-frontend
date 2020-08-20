import React, { Component } from "react";
import "./SignUp.scss";

export default class SignUp extends Component {
  render() {
    return (
      <login className="SignUp">
        <div className="signUpContainer">
          <header className="logo"></header>
          <h2 className="title">회원가입</h2>
          <section className="signUpContents">
            <form>
              <div className="label">
                <input
                  className="inputName"
                  type="text"
                  placeholder="이름"
                ></input>
                <div className="checkIcon"></div>
              </div>
              <div className="label">
                <input
                  className="inputId"
                  type="text"
                  placeholder="이메일"
                ></input>
                <div className="checkIcon"></div>
              </div>
              <div className="label">
                <input
                  className="inputPw"
                  type="password"
                  placeholder="비밀번호"
                ></input>
                <div className="checkIcon"></div>
              </div>
              <button className="loginBtn">회원가입</button>
            </form>
            <p className="createId">
              이미 가입하셨나요? <a href="/">로그인</a>
            </p>
            <p className="hrText">OR</p>
            <hr></hr>
            <button className="fbLoginBtn">Facebook 으로 로그인</button>
          </section>
        </div>
      </login>
    );
  }
}

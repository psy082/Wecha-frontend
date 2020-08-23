import React, { Component } from "react";
import "./Login.scss";

export default class Login extends Component {
  render() {
    return (
      <login className="Login">
        <div className="loginContainer">
          <header className="logo"></header>
          <h2 className="title">로그인</h2>
          <section className="loginContents">
            <form>
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
              <button className="loginBtn">로그인</button>
            </form>
            <p className="forgetPw">비밀번호를 잊어버리셨나요?</p>
            <p className="createId">
              계정이 없으신가요? <a href="/">회원가입</a>
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

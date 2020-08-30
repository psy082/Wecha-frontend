import React, { Component } from "react";
import "./InfoContainerRight.scss";

export default class InfoContainerRight extends Component {
  render() {
    return (
      <div className="InfoContainerRight">
        <div className="languageContainer">
          <button className="languageButton">한국어</button>
        </div>
        <ul className="footerLink">
          <li className="footerLinkList">
            <a
              className="facebook"
              href="http://www.facebook.com/watchaKR/"
              target="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#848485"
                  fillRule="evenodd"
                  d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073"
                ></path>
              </svg>
            </a>
          </li>
          <li className="footerLinkList">
            <a
              className="twitter"
              href="https://twitter.com/watcha_kr"
              target="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="18"
                viewBox="0 0 22 18"
              >
                <path
                  fill="#73C8FA"
                  d="M19.751 4.484l.012.586c0 6.003-4.544 12.93-12.848 12.93-2.55 0-4.921-.753-6.915-2.05.347.046.708.069 1.074.069a9.029 9.029 0 0 0 5.606-1.95c-1.979-.034-3.635-1.352-4.216-3.154a4.531 4.531 0 0 0 2.037-.078 4.537 4.537 0 0 1-3.616-4.45V6.33a4.42 4.42 0 0 0 2.037.565A4.546 4.546 0 0 1 .92 3.12c0-.833.223-1.62.615-2.287a12.769 12.769 0 0 0 9.299 4.744 4.38 4.38 0 0 1-.112-1.038c0-2.5 2.014-4.539 4.509-4.539 1.298 0 2.472.554 3.3 1.43A9.058 9.058 0 0 0 21.396.337a4.517 4.517 0 0 1-1.991 2.512A9.043 9.043 0 0 0 22 2.129a9.326 9.326 0 0 1-2.249 2.355"
                ></path>
              </svg>
            </a>
          </li>
          <li className="footerLinkList">
            <a className="team" href="https://team.watcha.com/" target="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#848485"
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm2.341 10c0-.71-.52-1.333-1.352-1.333H10v2.666h2.988c.832 0 1.353-.588 1.353-1.333zm-1.248 3.333H10V16h3.093c.919 0 1.474-.501 1.474-1.333 0-.728-.522-1.334-1.474-1.334zM13.716 18H7.333V6.667h6.193c2.202 0 3.328 1.308 3.328 2.85 0 1.439-.901 2.379-1.993 2.604 1.247.192 2.218 1.344 2.218 2.783 0 1.751-1.144 3.096-3.363 3.096z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

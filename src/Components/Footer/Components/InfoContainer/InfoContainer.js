import React, { Component } from "react";
import InfoContainerRight from "../InfoContainerRight/InfoContainerRight";
import "./InfoContainer.scss";

export default class InfoContainer extends Component {
  render() {
    return (
      <div className="InfoContainer">
        <div className="infoContainerPadding">
          <div className="infoContainerLeft">
            <ul className="leftItemService">
              <li>서비스 이용약관</li>
              <li>개인정보 처리방침</li>
              <a href="http://team.watcha.com/">회사 안내</a>
            </ul>
            <ul className="leftItemCScenter">
              <li className="CScenter">고객센터</li>
              <li>
                <a href="mailto: wnduq8@gmail.com">cs@watchapedia.co.kr</a>
              </li>
            </ul>
            <ul className="leftItemWork">
              <li className="work">제휴 및 대외 협력</li>
              <li>
                <a href="mailto: wnduq8@gmail.com">
                  contact@watcha.com<span>, 070-7554-9696</span>
                </a>
              </li>
            </ul>
            <ul className="leftItemCompanyAdress">
              <li className="adress1">주식회사 왓챠</li>
              <li className="adress2">대표 박태훈</li>
              <li className="adress3">
                서울특별시 서초구 강남대로 343 신덕빌딩 3층
              </li>
            </ul>
            <ul className="leftItemCompanyNumber">
              <li>
                사업자 등록 번호<span> 211-88-66013</span>
              </li>
            </ul>
            <ul className="leftItemCompanyInfo">
              <svg fill="#848485" viewBox="0 0 83 20" className="SvgLogo">
                <g className="fillTarget" fill="#FF0558" fillRule="nonzero">
                  <path
                    d="M19.507 4.346l-2.26 13.64 3.585-.37.214-2.455 1.851-.156.234 2.358 3.196-.331-1.949-12.686h-4.871zm1.773 8.301l.468-5.222h.428l.488 5.125-1.384.097zM41.508 8.769L40.709 8.808 40.709 4.346 38.468 4.346 38.468 15.746 40.709 15.512 40.709 10.932 41.508 10.893 41.508 15.434 43.534 15.219 43.534 4.346 41.508 4.346zM14.167 0L13.251 13.173 13.037 13.193 11.108 4.346 8.048 4.346 6.626 13.622 6.314 13.622 4.93 4.346.039 4.346 2.982 19.487 8.477 18.903 9.568 10.348 9.88 10.348 11.342 18.61 15.843 18.143 18.844 0zM25.645 7.561L27.516 7.503 27.516 16.915 30.264 16.623 30.264 7.444 31.823 7.386 31.823 4.346 25.645 4.346zM35.506 14.401l-.76.058V6.606l.76-.02V8.73l2.28-.078V6.548c0-1.403-.936-2.378-2.67-2.378-1.832 0-2.904.975-2.904 2.475v7.503c0 1.559.877 2.3 2.865 2.085 1.793-.195 2.728-1.208 2.728-2.69v-2.435l-2.319.136v3.157h.02zM72.629 15.59L74.967 15.336 74.967 4.346 72.629 4.346zM69.355 4.346h-3.878V16.35l3.547-.37c2.163-.234 2.786-1.404 2.786-2.982V7.347c0-1.754-.487-3.001-2.455-3.001zm-.176 9.412l-.974.078V6.548l.994-.02v7.23h-.02zM79.566 14.85l2.046-.215L80.19 4.326h-3.313L75.63 15.258l2.24-.233.176-2.144 1.325-.117.195 2.085zm-1.383-3.762l.33-4.112h.254l.41 4.054-.994.058zM44.84 4.346l-.76 10.835 1.949-.195.058-2.202.702-.059.117 2.163 1.715-.175-.877-10.367H44.84zm1.286 6.664l.117-4.209h.195l.234 4.17-.546.04zM61.657 11.556L64.152 11.4 64.152 9.198 61.657 9.315 61.657 6.84 64.522 6.782 64.522 4.346 58.637 4.346 58.637 17.051 64.658 16.428 64.658 13.992 61.657 14.245zM55.09 4.346H50.2v13.602l3.45-.37v-5.009l1.578-.097c1.5-.098 2.63-1.17 2.63-2.709V7.561c0-1.578-.039-3.215-2.767-3.215zm-.175 6.002l-1.286.058V6.762l1.286-.02v3.606z"
                    transform="translate(.2)"
                  ></path>
                </g>
              </svg>
              <li className="CompanyInfoText">© 2011 Watcha. Inc</li>
            </ul>
          </div>
          <InfoContainerRight />
        </div>
      </div>
    );
  }
}

# 11기 1차 프로젝트: WatchaPedia 클론코딩(front-end)

## 프로젝트 소개 및 목적

- 소개: 영화, 드라마, 책 컨텐츠 평가 및 추천 사이트인 Watcha Pedia를 클론 코딩하는 프로젝트
- 목적
  1. github을 이용하여 프로젝트를 공동으로 관리해 본다.
  2. React를 사용하여 데이터 통신, 컴포넌트 분리 및 관리, 컴포넌트 간 데이터 바인딩을 적용해 본다.
  3. Sass를 사용하여 컴포넌트 단위로 스타일을 적용하고 관리해본다.

## 개발 기간

- 2020년 8월 18일 ~ 2020년 8월 28일(10일)

## 팀원

- 김동호
- 류상욱
- 박주엽

## 구현 페이지 및 기능

- 메인 페이지

- 상세 페이지

- 로그인 및 회원가입 페이지

- 검색 페이지

- 사용자 프로필 페이지

## 기술 스택

- HTML, CSS, JS(es6+)
- React, SASS

## Process For Co-Work

1. 초기 세팅된 git repository clone하기

`git clone https://github.com/wecode-bootcamp-korea/11-WeCha-frontend.git`

2. master branch에서 feature 브랜치 만들고 checkout하기

`git branch feature/페이지 or 기능`

`git checkout feature/페이지 or 기능`

3. <i><b>자기 브랜치에서만 작업하기(Master는 신성불가침의 영역이라고 합니다 하하)</b></i>

4. 작업 완료 후에 바로 add commit push를 하는 게 아니라 github을 확인한 후 master 브랜치가 update되었는지 확인하기(update가 되었다면 5번부터 읽기, 안되었다면 8번부터 읽기)

5. 만약 master 브랜치가 update되었다면(혹시나 혹시나 common.scss가 update되었다면?!) master 브랜치로 checkout하기

`git checkout master`

6. update된 코드 다운로드 받기

`git pull origin master`

7. feature 브랜치로 다시 이동해서 master branch merge하기

`git checkout feature/페이지 or 기능`

`git merge master`

8. 자기 코드에 이상이 없는지 확인 후에 add, commit, push 하기

`git add .`

`git commit -m "ADD : 적용된 내용"`

`git push origin feature/페이지 or 기능`

9. github에서 PR(Pull Request) 보내기

10. 다시 3번부터 무한 반복...

## 작업 시 주의 사항

1. <i><b>자기 브랜치에서만 작업하기</b></i>

2. <i><b>add 전에 master 브랜치 업데이트 여부 확인</b></i>

3. <i><b>커밋 메세지 가이드라인 지키기</b></i>

`git commit -m "ADD : 적용된 내용"`

[참고) Commit Message Guidelines](https://www.notion.so/Commit-Message-Guidelines-8ca8fac8178943e78ddcfb48f47ba973)

4. <i><b>push 할 때 feature 브랜치에서 push하는 건지 확인하기</b></i>

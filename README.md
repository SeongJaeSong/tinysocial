# Tiny Social

http://www.tinysocial.us

2019년 12월부터 2020년 2월까지 부트캠프 프로그램을 통해 실리콘 밸리에서 구글 현직자등 여러 리드분들과 함께 진행한 프로젝트이다.

프로젝트의 주제는 각종 이벤트 개최 및 참여 플랫폼이다. 미국에 거주중인 한인들의 네트워킹을 위한 목적으로 개발되었고 MVP에서는 Book Club 이벤트를 목표로 잡고 개발을 진행하였다.

DB는 MariaDB, ORM으로 Sequelize를 사용하였으며 언어와 프레임워크는 Node.js, Express.js를 사용하였고 GraphQL, Apollo-Sever를 이용하여 API를 개발하였다. 또, Jest를 이용하여 구현한 API에 대한 유닛 테스트 코드를 작성하였다.

내가 담당한 API는 Review(User Page), Google OAuth를 이용한 Sign Up, Create Event 피쳐이다.


# 설치 및 실행
- dotenv 파일이 필요합니다.(참고: https://github.com/motdotla/dotenv)
```
git clone https://github.com/SeongJaeSong/tinysocial.git
cd tinysocial/server
npm install
npm start
cd ../web
npm install
npm start
```

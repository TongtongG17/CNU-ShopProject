# 충남대학교 네트워크 프로그래밍 기말작품 - Woon`s Market (2024 Remake)
![image](https://github.com/TongtongG17/FFXIV-ItemSerch/assets/145681939/7a745f29-9f54-4421-ab0a-f02158836e67)
## 제작 기간: 14일 (2024.01.01 ~ 2024.01.14) (기존 사이트 제작기간: 2021.05.17 ~ 2021.06.17)
## 호스팅
- client: [네트리파이](https://cnu-shopproject.netlify.app)
- server: express로 제작한 코드이기에 클라우드타입에 배포하고 있습니다.
## ⭐️ 프로젝트 설명
충남대학교 네트워크 프로그래밍 기말작품인 Woon`s Market입니다. 기말작품 주제는 데이터베이스를 연동한 홈페이지 제작이였으며, 수업의 주된 내용이 node.js였기에 React를 독학하여 만든 사이트입니다. 기존에 제작한 사이트는 21년도에 만들었으며, React와 nodejs의 버전이 낮아 24년도에 버전업과 함께 리메이크하여 제작하였습니다.
## 💻 개발 환경
+ 개발 환경 : <img src="https://img.shields.io/badge/windows10-0078D6?style=flat-square&logo=windows10&logoColor=white"/>
+ 사용 프로그램 : <img src="https://img.shields.io/badge/Vs code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"/>
+ 사용된 기술 :
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/ReduxToolkit-764ABC?style=flat-square&logo=redux&logoColor=white"/> <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/> <img src="https://img.shields.io/badge/node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white"/>

## 🛠️ 주요 기능
1. Redux 와 reduxjs/toolkit

-기존코드: redux를 사용하여 상태 관리를 구현했습니다. 리듀서 및 액션을 각각 파일에 분리를 하여 관리를 하였습니다. 로컬 스토리지에 데이터를 저장할려면 직접 구현을 해야하는 불편함이 있었습니다. 

-현재코드: reduxjs/toolkit을 활용하여 코드관리를 편하게 구성하였으며, createAsyncThunk를 사용하여 비동기 작업을 처리했습니다. Redux Persist를 사용하여 로컬 스토리지에 저장하도록 하였습니다. 미들웨어를 사용하여 특정 액션들을 제어하였습니다.

   2. mongoDB

NoSQL 데이터베이스 시스템인 몽고디비를 사용하여 데이터를 관리 했습니다. 기존에 사용했던 몽고디비 클러스터는 기간이 만료되어 새로운 key로 교체하였습니다.

   3. expressJS

-기존코드: body-parser를 사용하여 POST 요청의 body를 파싱하였습니다. mongoDB 와 같은 key값을 외부 설정 파일에서 설정하였습니다.

-현재코드: express js 버전이 업그레이드 되면서 Express 내장의 express.json() 메서드를 사용하여 JSON 파싱을 처리하였습니다. env 파일을 사용하여 mongodb 와 같은 key값을 관리 하였습니다.  dotenv를 사용하여 환경 변수를 로드하는 방식으로 의존성을 업데이트 하였으며 보안성을 높였습니다. express js버전이 기존 14.16.0였다가 4.18.2으로 업그레이도 되어 여러 코드들이 변경되었습니다.

   4. tailwindcss

기존코드는 style과 css를 사용하여 디자인을 하였습니다. 현재 코드는 빠른 마감을 위해 더욱 쉽고 빠르게 스타일링 하기 위해 tailwindcss를 사용하여 디자인하였습니다.
## 2024-01-23 express 및 react 버전 업그레이드

기존에 쓰였던 express와 react의 버전이 낮아서 업그레이드를 하고 사이트를 리뉴얼 하였습니다.

변경점
1. 만료된 몽고디비 클러스터를 다시 갱신하였습니다.
3. create-react-app이 아닌 vite로 react를 생성하여 기존보다 빠른 개발을 하게 되었습니다.
4. tailswind css를 사용하여 쉽고 빠르게 스타일링을 하였습니다.
5. store 폴더를 만들어 redux toolkit을 이용한 상태 관리 파일을 만들었습니다. 기존의 코드는 두개의 폴더로 나뉘어서 관리 하였었습니다.
6. redux toolkit을 사용하여 유지보수하기 편하고 코드 가독성을 향상시켰습니다. 또한 비동기 처리를createAsyncThunk 와 같은 기능을 이용하여 처리하였습니다.
7. 미들웨어를 추가하여 특정 액션들을 제어 하였습니다
8. url key값의 보안성을 위해 .env 파일을 만들고 dotenv로 의존성 업데이트를 하였습니다.
9. express js의 버전이 업그레이드 되어 express.json() 메서드를 사용하여 JSON 파싱을 처리하였습니다.
10. client 폴더 구성의 변화가 있습니다.
11. 홈페이지내에 이미지 파일을 제거할시, 백엔드 폴더에 사라지지 않았던 버그를 고쳤습니다. 이제 이미지를 제거하면 백엔드 폴더안에 있는 이미지도 제거가 됩니다.

# 호스팅
- client: [네트리파이](https://cnu-shopproject.netlify.app)
- server: express로 제작한 코드이기에 클라우드타입에 배포하고 있습니다.

## 2024-01-23 express 및 react 버전 업그레이드

기존에 쓰였던 express와 react의 버전이 낮아서 업그레이드를 하고 사이트를 리뉴얼 하였습니다.

변경점
1. 만료된 몽고디비 클러스터를 다시 갱신하였습니다.
2. create-react-app이 아닌 vite로 react를 생성하여 기존보다 빠른 개발을 하게 되었습니다.
3. tailswind css를 사용하여 쉽고 빠르게 스타일링을 하였습니다.
4. store 폴더를 만들어 redux toolkit을 이용한 상태 관리 파일을 만들었습니다. 기존의 코드는 두개의 폴더로 나뉘어서 관리 하였었습니다.
5. redux toolkit을 사용하여 유지보수하기 편하고 코드 가독성을 향상시켰습니다. 또한 비동기 처리를createAsyncThunk 와 같은 기능을 이용하여 처리하였습니다.
6. 미들웨어를 추가하여 특정 액션들을 제어 하였습니다
7. url key값의 보안성을 위해 .env 파일을 만들고 dotenv로 의존성 업데이트를 하였습니다.
8. express js의 버전이 업그레이드 되어 express.json() 메서드를 사용하여 JSON 파싱을 처리하였습니다.
9. client 폴더 구성의 변화가 있습니다.

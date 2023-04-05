# Next.js 란?

- react에 없는 SSR, SSG, ISR 과 같은 기능들을 제공하는 react를 위한 오픈소스 자바스크립트 웹 프레임워크
- react는 사용자의 웹 브라우저에서만 실행되기 때문에 SEO(search engine optimization)의 효과를 거의 볼 수 없고, 첫 화면에 웹 애플리케이션을 제대로 표시하기 위해 실행 초기에 성능 부담이 생긴다.
- 위와 같은 특징들로 인해 만들어진 Server Side Rendering Framwork 이다.
- React + Express.js + React-Router-Dom + SSR 을 영리하게 합쳐놓은 기술 스택
  - 위의 기능들을 그대로 가져와 쓴다는 게 아니라 저런 느낌의 라이브러리를 구현해 놓았다는 것이다.

### | 제공하는 기능

- 정적 사이트 생성
- 증분 정적 콘텐츠 생성
- typeScript 를 기본적으로 지원
- auto polyfill 적용
- 이미지 최적화
- 성능 분석
- web app 의 국제화 지원

### | 특징

- SSR, SSG 모두 Node.js 에서 실행되기 때문에 fetch, window, document 와 같은 web browser 전역 객체나 canvas 같은 HTML 요서는 접근할 수 없다. 따라서 next에서 따로 다루는 방법을 제공한다.
- CSR 을 만들때에도 create-react-app 대신 Next.js 를 사용할 수 있다.

## 🔵 SSR vs CSR

- browser lendering : 브라우저가 서버로부터 요청해 받은 내용을 브라우저 화면에 표시해주는 작업
- SSR : Server Side Rendering

  - client (browser) 가 서버에 매번 데이터를 요청하여 서버에서 처리하느 방식.
  - 요청이 들어올 때 마다 매번 서버에서 새로운 view를 만들어 제공하는 것.

- CSR : Client Side Rendering
  - client 가 rendering을 처리하는 방식.
  - 서버에서 받은 데이터를 통해 client가 view를 그린다.

| 구분   | SSR                          | CSR                                    |
| ------ | ---------------------------- | -------------------------------------- |
| 장점   | 첫 페이지 로딩 속도가 빠르다 | 서버 traffic 감소, 빠른 속도           |
| 단점   | 초기 로딩 이후 속도가 느림   | SEO에 대한 추가 작업 필요              |
| 큰차이 | 검색엔진최적화(SEO가능)      | 새로고침이 없기에 native-app 과 비슷함 |

## 🟣 SSG vs ISR

- 웹 사이트 생성하는 기법
- SSG : Static Site Generation (정적 페이지 생성)

  - 데이터와 템플릿 세트를 바탕으로 완전히 정적인 HTML 웹 사이트를 생성하는 방법.
  - 모든 페이지를 미리 렌더링하고 client 요청에 따라 페이지를 제공하는 방식.

- ISR : Incremental Static Regeneration (점진적 정적 재생성)
  - 페이지별로 정적 생성을 사용하는 방식.
  - 정적 사이트의 이점을 유지하면서 수많은 페이지로 확장 가능.
  - SSG와 SSR의 장점이 합쳐진 방식

| 구분   | SSG                         | ISR                              |
| ------ | --------------------------- | -------------------------------- |
| 장점   | 미리 만들어져있어 가장 빠름 | 빠르고, 다시 배포할 필요가 없음. |
|        | 안전하고 SEO 에 유리        | 안전하고 SEO 에 유리             |
| 단점   | 업데이트시 rebuild·redeploy | SEO에 대한 추가 작업 필요        |
| 주쓰임 | 제품 쇼케이스(내용변화x)    | 개인 블로그                      |

## 🟢 사전 준비

- Nodejs, npm

🟡 bash 명령어

```bash
//개발환경실행
npm run dev

//배포 파일 생성
npm run build

//서비스 시작
npm run start
```

🔴

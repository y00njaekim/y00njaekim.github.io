var store = [{
        "title": "블로그 계획",
        "excerpt":"GitHub Pages의 github.io 블로그 시작하기로 하였다. 블로그 계획을 한번 세워보았다. h2 태그로 제목을 쓰면 TOC 테이블로 오른쪽 사이드바에 보여줄 수 있다. 1. 최신 기술 공부하기 최신 기술에 대해 공부하고 블로그 글로 게시하자. 2. 최신 뉴스 게시하기 관심있는 뉴스가 나오면 사람들과 공유하고 의견을 나눠보자. 3. 토이 프로젝트 소개하기 개인적으로 진행하는 토이...","categories": ["Blog"],
        "tags": ["Blog"],
        "url": "/blog/blog-plan/",
        "teaser": "/assets/images/default.jpeg"
      },{
        "title": "[React] 리액트 입문",
        "excerpt":"리액트에 입문하다  ","categories": ["react"],
        "tags": ["코딩애플_리액트","react"],
        "url": "/react/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%9E%85%EB%AC%B8/",
        "teaser": "/assets/images/react.png"
      },{
        "title": "[Flutter] dart 문법 정리",
        "excerpt":"최근 처음으로 해커톤에 참가하였다. 오아시스 해커톤이라고, 2021.08.09 ~ 2021.08.20 동안 열리는 호남지역 해커톤이다! 나는 팀원들과 상의하여 flutter 를 이용한 택시 매칭 앱을 만들기로 하였고, 지금 flutter 의 사용 언어인 dart 를 훑어보고 있다. dart 문법 class class constructor 에 관하여. 일반적인 class constructor 사용 class Person { int age; String...","categories": ["flutter"],
        "tags": ["flutter","dart"],
        "url": "/flutter/dart-%EB%AC%B8%EB%B2%95/",
        "teaser": "/assets/images/default.jpeg"
      },{
        "title": "[Flutter] future, async, await 개념 정리",
        "excerpt":"Future future 의 값으로 세가지의 상태가 가능하다. Uncompleted Completed, data return Completed, error return 처음 Future 를 사용해서 data 를 만들면 Uncompleted future 가 들어간다. 이후 Future 가 작업을 끝내면 Completed future 가 들어간다. async, await await 는 async 함수 내에서만 사용 가능하다. async 함수 내에서 await 가 붙은 작업은...","categories": ["flutter"],
        "tags": ["flutter","dart"],
        "url": "/flutter/future-async-await/",
        "teaser": "/assets/images/default.jpeg"
      },{
        "title": "[Flutter] stateful 위젯이란?",
        "excerpt":"stateful 위젯      사용자와 상호작용 존재   재렌더링 가능, 동적 화면 구현   LifeCycle 이 길고 build가 1회 이상 발생   stateless 위젯      사용자와 상호작용 없음   재렌더링 없음, 정적 화면 구현   LifeCycle이 짧고 build가 1회만 발생. 성능이 좋음      React 의 state 를 생각하면 될 듯!   ","categories": ["flutter"],
        "tags": ["flutter","dart"],
        "url": "/flutter/stateful-stateless/",
        "teaser": "/assets/images/default.jpeg"
      },{
        "title": "[Jekyll] jekyll 코드 폰트 바꾸는 법",
        "excerpt":"아니, ‘Jekyll 기반의 블로그 글씨체 바꾸는 법’ 에 관한 가이드 글은 너무나 많은데, 왜 코드 글씨체 바꾸는 법은 아무도 안알려줄까..!! 본문 글씨체는 내가 바라는 대로 정갈하게 맞추어 놓았지만 코드 글씨체가 너무 귀여워서 안어울린다.. 그래서 이번에는 코드 글씨체를 바꾸는 방법을 알아보고 적용해 보려한다. @font-face 와 font-family ms word 혹은 ms ppt...","categories": ["Jekyll"],
        "tags": ["Jekyll"],
        "url": "/jekyll/jekyll-code-font/",
        "teaser": "/assets/images/default.jpeg"
      },{
        "title": "[React] 리액트 state 사용법",
        "excerpt":"What is ‘state’ state 는 변수 대신 사용하는 데이터 저장공간이다. 문자, 숫자, array, object 모두 저장 가능하다. Why to use ‘state’ react 를 웹앱처럼 동작하게 하는 데 핵심적인 역할을 한다. state 로 만들어진 데이터가 바뀌면 새로고침 없이도 데이터를 담고 있는 html 이 자동 재렌더링 된다. How to use ‘state’ 1...","categories": ["react"],
        "tags": ["코딩애플_리액트","react"],
        "url": "/react/state/",
        "teaser": "/assets/images/react.png"
      },{
        "title": "[Http] 생활코딩 HTTP-2: 소개",
        "excerpt":"웹 브라우저, 웹 서버 식당에 가면 직원과 손님이 있다. 손님은 직원에게 음식을 요청 하고 직원은 손님에게 음식을 제공 한다. 웹브라우저와 웹서버도 이와 같은 관계이다. 웹브라우저는 웹서버에게 특정 컨텐츠를 요청하고 웹서버는 웹브라우저에게 해당 컨텐츠를 제공, 응답한다. 어떤 컨텐츠들이 요청, 응답에서 오가는 지를 보려면 특정 웹페이지에 접속한 후 [개발자도구-네트워크] 를 열어보면 된다....","categories": ["cs"],
        "tags": ["생활코딩","cs","http"],
        "url": "/cs/http-2/",
        "teaser": ""
      },{
        "title": "[Http] 생활코딩 HTTP-3,4: request/response message",
        "excerpt":"Request Message [개발자도구-네트워크] 를 열어 아무 컨텐츠나 클릭해보자. 그러면 다음과 같이 request header 를 볼 수 있다. 이 Request Header 는 다음과 같이 Request Message Header Request Line Request Header Request Message Body 로 나누어진다. 이 때 Request Line 이 의미하는 바는, 웹브라우저와 웹서버가 Get Method 방식을 통해 통신한며, 웹브라우저가...","categories": ["cs"],
        "tags": ["생활코딩","cs","http"],
        "url": "/cs/http-3/",
        "teaser": ""
      },{
        "title": "[Github] 나에게 부족한 Git/ Github 지식",
        "excerpt":"Git Flow란? Git Flow 란 어떤 기능이 아니라 Vincent Drissen이 시작한 Git 사용 방법론이다! Git Flow 는 총 5가지의 브랜치를 사용해서 Git 을 사용 하는 운영 방법이다. master: 기준이 되는 브랜치로 제품을 배포하는 브랜치이다. develop : 개발 브랜치로 개발자들이 이 브랜치를 기준으로 각자 작업한 기능들을 병합(merge)한다. feature : 단위 기능을...","categories": ["git"],
        "tags": ["github","git"],
        "url": "/git/git%EC%82%AC%EC%9A%A9%EB%B2%95/",
        "teaser": ""
      }]

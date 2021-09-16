var store = [{
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
        "teaser": "/assets/images/default.jpeg"
      },{
        "title": "[Http] 생활코딩 HTTP-3,4: request/response message",
        "excerpt":"Request Message [개발자도구-네트워크] 를 열어 아무 컨텐츠나 클릭해보자. 그러면 다음과 같이 request header 를 볼 수 있다. 이 Request Header 는 다음과 같이 Request Message Header Request Line Request Header Request Message Body 로 나누어진다. 이 때 Request Line 이 의미하는 바는, 웹브라우저와 웹서버가 Get Method 방식을 통해 통신한며, 웹브라우저가...","categories": ["cs"],
        "tags": ["생활코딩","cs","http"],
        "url": "/cs/http-3/",
        "teaser": "/assets/images/default.jpeg"
      },{
        "title": "[Github] 나에게 부족한 Git/ Github 지식",
        "excerpt":"Git Flow란? Git Flow 란 어떤 기능이 아니라 Vincent Drissen이 시작한 Git 사용 방법론이다! Git Flow 는 총 5가지의 브랜치를 사용해서 Git 을 사용 하는 운영 방법이다. master: 기준이 되는 브랜치로 제품을 배포하는 브랜치이다. develop : 개발 브랜치로 개발자들이 이 브랜치를 기준으로 각자 작업한 기능들을 병합(merge)한다. feature : 단위 기능을...","categories": ["git"],
        "tags": ["github","git"],
        "url": "/git/git%EC%82%AC%EC%9A%A9%EB%B2%95/",
        "teaser": "/assets/images/default.jpeg"
      },{
        "title": "[Algorithm] 다익스트라 알고리즘",
        "excerpt":"다익스트라 알고리즘이란 다익스트라 알고리즘은 그리디 알고리즘의 한 유형으로서, 특정한 노드에서 출발하여 다른 노드로 가는 각각의 최단 경로를 구하는 알고리즘이다. 음의 값을 가지는 간선이 없을 때만 적용 가능하다. 다익스트라 알고리즘을 이해하기 위해서 먼저 힙 자료구조에 대해 알고있어야 한다. 힙 자료구조란 힙 자료구조는 완전 이진 트리의 일종으로 우선순위 큐를 위하여 만들어진 자료구조이다....","categories": ["algorithm"],
        "tags": ["algorithm","ps"],
        "url": "/algorithm/%EB%8B%A4%EC%9D%B5%EC%8A%A4%ED%8A%B8%EB%9D%BC/",
        "teaser": "/assets/images/default.jpeg"
      },{
        "title": "[Algorithm] 플로이드 워셜 알고리즘",
        "excerpt":"플로이드 워셜 알고리즘이란 플로이드 워셜 알고리즘이란 최단 경로를 구하는 알고리즘으로 다이나믹 프로그래밍의 일종이다. 다익스트라 알고리즘과는 다르게 모든 지점에서 다른 모든 지점까지 이동하는 데 필요한 최단 경로를 구한다. 플로이드 워셜 알고리즘은 모든 노드를 각각 한번씩 주인공으로 삼는다. 이 말은 그 노드를 기준으로 특정 판단을 수행한다는 것이다. 이를테면, K 번째 노드를 주인공으로...","categories": ["algorithm"],
        "tags": ["algorithm","ps"],
        "url": "/algorithm/%ED%94%8C%EB%A1%9C%EC%9D%B4%EB%93%9C%EC%9B%8C%EC%85%9C/",
        "teaser": "/assets/images/default.jpeg"
      },{
        "title": "[JavaScript] java script 입문 문법",
        "excerpt":"javascript 의 기본적인 문법을 배워보려 한다. codecademy 의 튜토리얼을 따라해보며 알아두어면 좋을 것들을 간단하게 적어본다. ☝🏻 Variables js 에서 변수를 선언하는 방법은 총 세가지가 있다. var let const 세 방법의 핵심적인 차이는 undefined 형태로 선언할 수 있는지, 변수 값 재할당이 가능한지 이다. 코드를 보며 살펴보자. var var myName = 'Arya';...","categories": ["js"],
        "tags": ["js","java script","react"],
        "url": "/js/js-%EC%9E%85%EB%AC%B8-%EB%AC%B8%EB%B2%95/",
        "teaser": "/assets/images/default.jpeg"
      },{
        "title": "[React] 리액트 Component 사용법",
        "excerpt":"What is ‘React Component’ html(jsx)를 반환하는 함수로서 html(jsx) 태그와 같이 사용할 수 있다. Why to use ‘React Component’ 많은 html(jsx) 태그들을 한 단어로 줄이고 싶을 때 사용한다. 특정 구조가 반복해서 사용되는 경우, 그 구조를 Component 로 만들면 관리하기 용이하다. 또한 자주 변경되는 HTML UI 를 Component 로 만들면 재렌더링 측면에서...","categories": ["react"],
        "tags": ["코딩애플_리액트","react"],
        "url": "/react/Component/",
        "teaser": "/assets/images/react.png"
      },{
        "title": "[React] 리액트 jsx 안에서 if/else 사용하기",
        "excerpt":"삼항연산자 Ternary Operator if/else 구문으로 표현 가능한 문법들을 Ternary Operator 를 이용해서도 표현할 수 있다. 아래 두 코드는 같은 기능을 수행한다. let isNightTime = true; if (isNightTime) { console.log('Turn on the lights!'); } else { console.log('Turn off the lights!'); } 이를 Ternary Oerator 를 이용해서 표현하면 다음과 같다. isNightTime ?...","categories": ["react"],
        "tags": ["코딩애플_리액트","react"],
        "url": "/react/jsx-%EC%95%88%EC%97%90%EC%84%9C-js/",
        "teaser": "/assets/images/react.png"
      }]

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
      },{
        "title": "[React] 리액트 props 사용법",
        "excerpt":"🔥 컴포넌트에 대해 기초적인 지식이 없다면 해당 포스팅을 참고하자. 🔥 Why to use ‘props’ 컴포넌트는 결국 함수로서 컴포넌트 바디 scope 를 벗어나는 변수나 state 를 사용하지 못한다. 부모 컴포넌트에서 정의한 state 를 자식 컴포넌트에서 사용하기 위해서는 props 문법을 이용해야 한다. What is ‘props’ 부모 컴포넌트에서 자식 컴포넌트로 전달하는 변수 혹은...","categories": ["react"],
        "tags": ["코딩애플_리액트","react"],
        "url": "/react/props/",
        "teaser": "/assets/images/react.png"
      },{
        "title": "[React] 반복문을 이용한 UI 생성",
        "excerpt":"같은 구조를 가진 UI 를 만들려 할 때 두가지 방법을 사용할 수 있다. for 을 이용한 반복문 .map() 을 이용한 반복문 두 방법의 공통점은 결국 return 값이 Array 라는 것이다. 위 사항을 유념하고 다음 내용을 살펴보자. for 을 이용한 반복문 for 을 이용한 반복문은 다음과 같은 특징을 갖고 있다. ​...","categories": ["react"],
        "tags": ["코딩애플_리액트","react"],
        "url": "/react/%EB%B0%98%EB%B3%B5%EB%AC%B8/",
        "teaser": "/assets/images/react.png"
      },{
        "title": "[React] 사용자 입력을 통한 새로운 글 포스팅",
        "excerpt":"이번 포스팅에서는 사용자의 입력을 받아 새로운 글을 업로드 하는 과정을 살펴보겠다. input 태그 코드를 먼저 살펴보자. function App() { let [inVal, setInVal] = useState(''); return ( &lt;div&gt; &lt;input onChange={ (e) =&gt; { setInVal(e.target.value); }} /&gt; &lt;/div&gt; ) } 하나하나 살펴보면 다음과 같은 정보들을 얻을 수 있다. 🎯 e.target 은 input...","categories": ["react"],
        "tags": ["코딩애플_리액트","react"],
        "url": "/react/input/",
        "teaser": "/assets/images/react.png"
      },{
        "title": "[CSS] CSS 선택자 종류",
        "excerpt":"이 글은 생활코딩 CSS 수업을 정리하는 목적으로 작성하였다. 강의와 더불어 참고하길 바란다. 선택자 (selector) css 파일을 열어보면 다음과 같은 문법을 볼 수 있었을 거다. 이 때 이 안의 다음과 같은 명칭의 표현들이 존재함을 알아야 한다. 🎯 selector: style sheet 을 적용시킬 대상을 지칭한다. 🎯 property: style sheet 을 작성할 때...","categories": ["css"],
        "tags": ["css","react"],
        "url": "/css/css-%EC%84%A0%ED%83%9D%EC%9E%90/",
        "teaser": "/assets/images/default.jpeg"
      },{
        "title": "[Algorithm] 무지의 먹방 라이브 - 그리디 알고리즘",
        "excerpt":"이 문제의 제목은 무지의 먹방 라이브이다. 상당히 인상깊은 내용이 많아 이렇게 따로 기록하려 한다. 우선 내가 처음에 작성한 코드의 구조를 살펴보자 ⬇️ 🖥️ My Code ⬇️ #include &lt;string&gt; #include &lt;vector&gt; #include &lt;queue&gt; using namespace std; int getZeroCount(vector&lt;int&gt; v) { int res = 0; int vSize = v.size(); for(int i=0; i&lt;vSize;...","categories": ["algorithm"],
        "tags": ["algorithm","ps"],
        "url": "/algorithm/%EB%AC%B4%EC%A7%80%EC%9D%98%EB%A8%B9%EB%B0%A9%EB%9D%BC%EC%9D%B4%EB%B8%8C/",
        "teaser": "/assets/images/default.jpeg"
      },{
        "title": "[Algorithm] 문자열 압축 - 구현",
        "excerpt":"이번 포스팅에서는 문자열 압축 이라는 문제를 다룬다. 문제는 프로그래머스를 통해 풀고 오길 바란다. . 나동빈님의 코드를 짧게 분석해보며 문제에서 얻을 수 있는 포인트들을 챙겨보자. 코드는 다음과 같다. #include &lt;bits/stdc++.h&gt; using namespace std; int solution(string s) { int answer = s.size(); // 1개 단위(step)부터 압축 단위를 늘려가며 확인 for (int step...","categories": ["algorithm"],
        "tags": ["algorithm","ps","cpp"],
        "url": "/algorithm/%EB%AC%B8%EC%9E%90%EC%97%B4-%EC%95%95%EC%B6%95/",
        "teaser": ""
      },{
        "title": "[React] 리액트 promise 란?",
        "excerpt":"아직 완성되지 않은 포스팅이라 후에 작성할 때 기준 삼을 간단한 구조를 미리 첨부한다. Promise What? 오브젝트. 오브젝트 안에 오브젝트를 포함하는 형태 Promise[프로미스]는 자바스크립트에서 비동기 처리에 사용되는 객체라고 한다. 비동기 처리는 코드 실행 후 결과를 받는것을 기다리지 않고 다음 코드를 계속 진행하는 처리 방식을 말한다. (동기 처리는 반대로 앞선 코드를 수행하고...","categories": ["react"],
        "tags": ["react"],
        "url": "/react/promise/",
        "teaser": "/assets/images/react.png"
      },{
        "title": "[CSS] SCSS 개념 및 사용법",
        "excerpt":"이번 포스팅에서는 SASS 에 대해 알아보겠다. What? SASS 는 전처리기(Preprocessor)이다. 근데 이제 CSS 로 컴파일 해주는 기능을 곁들인.. Why? CSS 는 사용하기에 다소 불편한 감이 있다. 프로그래밍을 배우는 입장에서 굳이 CSS 를 그렇게 하나하나 다 입력하고 있어야 하나 라는 생각이 든다. 하지만 SCSS 는 프로그래밍 언어처럼 기능한다. 변수를 사용할 수...","categories": ["css"],
        "tags": ["css","scss","react","코딩애플"],
        "url": "/css/scss/",
        "teaser": "/assets/images/default.jpeg"
      },{
        "title": "[React] 리액트 useEffect 개념 및 사용 방법",
        "excerpt":"해당 포스팅은 컴포넌트에 대한 사전 이해가 필요하다. 컴포넌트에 관련한 내용은 다음 링크 에서 살펴보자 🎯 Component Life Cycle 모든 컴포넌트는 생명주기가 있다. 생명 주기가 있다는 의미는 모든 컴포넌트가 ✔️ 등장 ✔️ 업데이트(재렌더링) ✔️ 퇴장 을 거치며 자기 역할을 수행한다는 것이다. 다음 코드를 살펴보자. import React, {useState} from 'react'; import './App.css';...","categories": ["react"],
        "tags": ["코딩애플_리액트","react"],
        "url": "/react/useEffect/",
        "teaser": "/assets/images/react.png"
      },{
        "title": "[Algorithm] 다이나믹 프로그래밍",
        "excerpt":"내가 생각하는 다이나믹 프로그래밍 문제 풀이 과정은 다음과 같다. 한 단계 한 단계 살펴보며 디테일한 사항들을 확인하자. 1) DP 문제임을 인지한다 우선 첫 번째로 내가 풀려하는 문제가 DP 문제임을 인지해야 한다. DP 문제를 풀 때 다음과 같은 생각이 들면 DP 문제임을 의심하자. 🙇🏻‍♂️ 음, 이 문제를 어떻게 풀까? 완전 탐색...","categories": ["algorithm"],
        "tags": ["algorithm","ps"],
        "url": "/algorithm/%EB%8B%A4%EC%9D%B4%EB%82%98%EB%AF%B9%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/",
        "teaser": "/assets/images/default.jpeg"
      },{
        "title": "[React] 리액트 redux 사용 이유",
        "excerpt":"Why props 를 사용하지 않고 모든 컴포넌트에서 state 를 가져다 쓸 수 있다 state 관리가 용이하다 컴포넌트가 100개 정도 있는 대규모 사이트를 생각해보자. redux 를 이용하지 않고 props 만 이용하여 컴포넌트 100 곳에서 장바구니 state를 수정하는 코드를 짰을 때, 중간에 state 하나에 이상한 값이 들어와서 버그가 생긴다면 어떡해야 하나. 버그...","categories": ["react"],
        "tags": ["코딩애플_리액트","react"],
        "url": "/react/redux/",
        "teaser": "/assets/images/react.png"
      },{
        "title": "[Algorithm] 코딩테스트 치트시트",
        "excerpt":"문자열 자르기 #include &lt;iostream&gt; #include &lt;string&gt; #include &lt;vector&gt; #include &lt;sstream&gt; string str = \"java c c++ python\"; istringstream istrstream(str); string strBuffer; vector&lt;string&gt; res; res.clear(); while(getline(istrstream, strBuffer, ' ')) { res.push_back(strBuffer); cout &lt;&lt; strBuffer &lt;&lt; \" \"; } for(int i=0; i&lt;res.size(); i++){ cout &lt;&lt; res[i] &lt;&lt; '\\n'; } [출처] 조합 class...","categories": ["algorithm"],
        "tags": ["algorithm","ps"],
        "url": "/algorithm/%EC%B9%98%ED%8A%B8%EC%8B%9C%ED%8A%B8/",
        "teaser": "/assets/images/default.jpeg"
      },{
        "title": "[Algorithm] c++ 문자열 split",
        "excerpt":"C++ 로 코딩테스트를 준비하다보면 문자열을 쪼개야 하는 상황이 발생한다. 이 때 문자열을 단 하나의 문자로 쪼개는 경우가 있고 때로는 문자열을 기준으로 쪼개는 경우가 있다. 이 포스팅을 통해 그 일련의 과정을 찬찬히 살펴보자. 문자열을 쪼갤 때면 파이썬으로 갈아탈까 하는 생각이 들곤 한다.. 잘 알아두자.. Example 이 포스팅에서 최종적으로 해결하고자 하는 문제는...","categories": ["algorithm"],
        "tags": ["algorithm","ps","cpp"],
        "url": "/algorithm/cpp-%EB%AC%B8%EC%9E%90%EC%97%B4-%EC%AA%BC%EA%B0%9C%EA%B8%B0/",
        "teaser": "/assets/images/default.jpeg"
      }]

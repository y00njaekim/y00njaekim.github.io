---
title: "[Chrome] 개발자 도구 팁 모음"
excerpt: "개발자 도구 유용한 것 같은데 정확히 어떻게 사용하는 걸까"
toc: true
toc_sticky: true
# header:
#   teaser: ""

categories:
  - chrome
tags:
  - chrome
  - web
  - js
  - html
  - css
last_modified_at: 2021-12-27T08:06:00-05:00
---

## 코딩애플 - 남들 모르는크롬 개발자도구 소소한 기능 8개

[[링크]](https://www.youtube.com/watch?v=toXJLUa7i0Y)

`cmd + shift + p` : 검색

### screenshot

> 검색키워드 screenshot

### coverage

> 검색키워드 coverage

해당 페이지에서 렌더링 되는 `css ` 파일 `js` 파일 모두 표시해 주고 현재 페이지에 필요없는 코드를 % 로 알려줌

메인페이지 로딩 시간 줄일 때유용할 듯

### sensor

> 검색키워드 sensor

### sources > Filesystm

여기서 바로바로 `css` 수정할 수 있음. 코드 에디터로 기능.

### console

`js` 실행 가능

긴 코드는 `snippets` 검색 해서 `new snippet` 하면 됨

### ads

> 검색키워드 sensor

`Block ads on this site` 선택하여 적용

<br>

## 초보자도 따라할 수 있는 크롬창에서 코딩하기

[[링크]](https://www.youtube.com/watch?v=ZC6D2iGd69Q)

### Tip

console 창 설정 클릭하여 `preserve log` 하면 페이지가 바뀌어도 log 는 유지

### Why?

여러 이유가 있지만 **웹사이트 제어** or **화면 상의 정보 취득**

### How?

ex 1. 네이버 검생 창에 '코딩' 이라고 입력하기

```js
document.querySelector("input[id=query]").value = "코딩";
```

ex 2. 네이버 검색 창 클릭하기

```js
document.querySelector("button[id=search_btn]").click();
```

ex 3. 코로나 확진자 수 html 로부터 정보 취득

```js
document.querySelectorAll("p[class=info_num]")[2].textContent;
```

<br/>

## 생활코딩- 크롬 개발자 도구

### 1. 개요

#### Tip

1. 👍 개발자 도구 창 undock 해서 쓸 수 있음

> 동영상의 크롬이 최신의 크롬이 아니지만, 거의 개념은 유사합니다.
>
> 동영상의 Resources 탭 -> Application 탭
>
> 동영상의 Timeline 탭 -> Performance 탭
>
> 동영상의 Profiles 탭 -> Memory 탭 (CPU 기능 X)
>
> 동영상의 Audits 탭 -> Lighthouse 탭

### 2. elements

#### What?

엘리먼트 들을 보여주는 탭

`html` 코드 그대로를 보여주는 것이 아니라 웹페이지에서 렌더링 된 **결과적인** html 이 보이는 것

#### Why?

엘리먼트(태그) 들을 분석하고 실시간으로 수정할 수 있는 기능성을 제공

#### computed

선택한 엘리먼트가 **최종적**으로 어떤 `css` 효과를 가지고 있는지 표시

#### styles

현재 선택한 엘리먼트가 어떤 `css` 의 적용을 받았고, 어떠한 **부모-자식 (상속) 관계**를 통해서 최종적으로 어떤 css 를 채택하였는지 표시.

#### properties

선택한 엘리먼트가 DOM(Document Object Model) 에 대한 어떤 속성을 가지고 있는지 표시.

`js` 영역에서 개발할 때 유용한 정보로 사용할 수 있음 [[What is DOM ?]](http://www.tcpschool.com/javascript/js_dom_concept)

#### DOM breakpoints

특정 element 에 breakpoints 를 걸면, 해당 point 가 실행되기 직전에 js 코드 실행이 정지된다.

#### Event Listeners

특정 element 에 어떠한 event 가 걸려있는지 볼 수 있음

<br/>

### 3. Application (구 Resources)

#### What?

현재 열어놓은 웹 페이지가 어떤 리소스들로 구성되어 있는지 표시.

리소스는 html script 파일(in **Frames**), 이미지(in **Frames**), 클라이언트에 저장되는 데이터(**Strogae, Cache, Background Services**) 등을 의미.

<br/>

### 4. Network

#### What?

네트워크 모니터링 탭. 웹 브라우져와 서버 간 통신을 모니터링하는 탭.

<br/>

### 5. Sources

#### What?

js 디버깅을 도와주는 탭.

#### How?

다음과 같은 기능들이 있음

1. watch expressions
   1. 내가 지켜보고 싶은 변수들을 추가하여 관찰할 수 있음
2. scope variables
3. breakpoints
4. DOM breakpoints
   1. Break on subtree modifications
   2. Break on attributes modifications
   3. Break on node removal
5. XHR breakpoints
   1. ajax 통신 등의 로직을 디버깅 할 때 사용
6. Event Listener breakpoints
   1. js 이벤트에 breakpoints 설정

<br/>

### 6. Memory

#### What?

프로그램의 성능을 측정하여 더 좋은 성능의 프로그램을 만드는 데 도움을 주는 탭

각각의 로직들이 실행되는데 걸리는 **시간** / **메모리**를 측정

<br/>

### 7. Lighthouse

#### What?

웹페이지에서 성능을 안좋게 만드는 요소를 검사하여 알려주는 탭.

<br/>

### 8. Console

[[Command Line API Reference]](https://github.com/GoogleChrome/devtools-docs/blob/master/docs/commandline-api.md)

<br/>

## 생활코딩 - 자바스크립트 디버깅

[[링크]](https://www.youtube.com/watch?v=ZdBv8h5Jteo)

내가 원하는 모션이 적용된 웹페이지 클론코딩 하는 방법

1. 특정 모션이 적용된 엘리먼트의 이벤트 리스너로 해당 모션이 어떤 js 파일로부터 온 건지 파악하기
2. 해당 js 파일에서 클론코딩 하기

<br/>

## NHN FORWARD 2020 - 천천히 읽어 보는 Chrome 개발자 도구

[[링크]](https://www.youtube.com/watch?v=cAIo4dEEPuc)

설명이 진짜 많고 유용하다

<img src="https://user-images.githubusercontent.com/56385667/147414236-f3e291ac-a3ef-41ed-91ce-6e010de98145.png"/>

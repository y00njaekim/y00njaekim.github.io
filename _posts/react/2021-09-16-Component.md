---
title:  "[React] 리액트 Component 사용법"
excerpt: "리액트 component"
toc: true
toc_sticky: true
header:
  teaser: "/assets/images/react.png"

categories:
  - react
tags:
  - 코딩애플_리액트
  - react
last_modified_at: 2021-09-16T08:06:00-05:00
---

## What is 'React Component'

html(jsx)를 반환하는 **함수**로서 html(jsx) 태그와 같이 사용할 수 있다.



## Why to use 'React Component'

많은 html(jsx) 태그들을 한 단어로 줄이고 싶을 때 사용한다.

특정 구조가 **반복해서 사용**되는 경우, 그 구조를 Component 로 만들면 관리하기 용이하다.

또한 **자주 변경되는 HTML UI** 를 Component 로 만들면 재렌더링 측면에서 성능적인 이점이 있다.

**다른 페이지를 만들 때** 그 페이지의 그 페이지의 html 내용을 하나의 컴포넌트로 많들기도 하며, 다른 팀원가 **협업할 때** 페이지를 컴포넌트 단위로 나눠서 작업을 분배하기도 한다.



하지만, Component 는 결국 함수로서 Component body scope 를 벗어나는 변수나 state 등을 사용할 수 없다. 이 때 scope 를 벗어나는 변수나 state 를 사용하려면 `props` 문법을 이용해야 한다.



## How to use 'React Component'

> `function Modal ()` 을 이용하여 Component 를 만들었다. 만들어진 Component 는 `App ()` 안에서 html tag 와 같이 사용된다.



```js
 function App (){
  return (
    <div>
      HTML 잔뜩있는 곳
      ...
      <Modal></Modal>
    </div>
  )
}

function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```



### 규칙

> 컴포넌트를 만드는 규칙과 관습을 소개한다.

우선, 컴포넌트의 첫 글자는 대문자로 시작하자. 관습이다.

다음으로, return() 안에 있는 html(jsx) 는 하나의 태그로 묶어야 한다.
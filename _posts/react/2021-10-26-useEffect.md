---
title: "[React] 리액트 useEffect 개념 및 사용 방법"
excerpt: "useEffect 와 컴포넌트 생명주기"
toc: true
toc_sticky: true
header:
  teaser: "/assets/images/react.png"

categories:
  - react
tags:
  - 코딩애플_리액트
  - react
last_modified_at: 2021-10-26T08:06:00-05:00
---

> 해당 포스팅은 컴포넌트에 대한 사전 이해가 필요하다. 컴포넌트에 관련한 내용은 [다음 링크](https://y00njaekim.github.io/react/Component/) 에서 살펴보자

## 🎯 Component Life Cycle

모든 컴포넌트는 생명주기가 있다. 생명 주기가 있다는 의미는 모든 컴포넌트가 **✔️ 등장 ✔️ 업데이트(재렌더링) ✔️ 퇴장** 을 거치며 자기 역할을 수행한다는 것이다.

<br/>

다음 코드를 살펴보자.

```react
import React, {useState} from 'react';
import './App.css';

function App() {
  return <Modal></Modal>;
}

function Modal() {
  const [click, setClick] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setClick(click + 1);
        }}
      >
        버튼
      </button>
      <div>총 {click}회 클릭하셨습니다.</div>
    </div>
  );
}

export default App;
```

해당 코드에서 `Modal` 컴포넌트는 `App` 컴포넌트의 `return` 부분을 통해 **등장**하며 Click 🖱️ 할 때마다 **업데이트** 되고 마지막으로 **퇴장**을 거치며 생명주기를 보낸다.

<img src="https://user-images.githubusercontent.com/56385667/138699000-c86e1d38-01ea-4479-8a1b-53d17591f824.png" />

우리는 이 세 개의 컴포넌트 생명주기**(등장-업데이트-퇴장)**의 순간들에 대하여 특정 명령을 **덧붙일 수** 있다.

가령,

❗**_등장하고 나서 ~해주세요_ / _업데이트 될 때마다 ~해주세요_ / _퇴장하기 전에 ~ 해주세요_**❗

와 같이 말이다.

<br/>

예전에, 그니까 클래스로 컴포넌트를 짤 때는, 이를 다음과 같이 사용했다고 한다.

```react
class Modal extends React.Component {
  componentDidMount() {
    // 등장하고 나서 ~해주세요
  }
  componentWillUnmount() {
    // 퇴장하기 전에 ~해주세요
  }
}
```

지금은 `useEffect()` 를 주로 사용하지만 말이다.

<br/>

## 🎯 Why to use useEffect()

```react
import React, {useState} from 'react';
import './App.css';

function App() {
  return <Modal></Modal>;
}

function Modal() {
  const [click, setClick] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setClick(click + 1);
        }}
      >
        버튼
      </button>
      <div>총 {click}회 클릭하셨습니다.</div>
    </div>
  );
}

export default App;
```

`App` 컴포넌트를 거친 후 `Modal` 컴포넌트가 등장한다. `Modal` 컴포넌트 안에는 `click` 이라는 `state ` 가 존재하며 `state` 값이 변경될 때마다 해당 컴포넌트는 업데이트(재렌더링) 된다.

이 때, **_재렌더링 된다_** 의 의미가 무엇일까?

바로 `function Modal() ` 에 적힌 **모든 코드가 처음부터 끝까지 다시 실행**된다는 의미이다.

<br/>

여기서부터 `useEffect() ` 를 사용하는 이유가 시작된다. 우리는 이런 질문을 할 수 있다. 정말 **모든 코드**가 다시 실행되어야 하는 걸까? 이게 효율적이라고 할 수 있을까?

이에 대한 답변으로 `useEffect` 가 존재한다. 우리가 `useEffect` 안에 적는 코드들은 `Modal` 컴포넌트가 등장, 업데이트, 퇴장 하는 순간순간에서 무조건적으로 다시 실행되는 것이 아니라 **특정 조건**이 성립할 때만 다시 실행된다.

즉, 아래 그림에서 빨간색으로 칠해진 부분은 `Modal()` 이 등장할 때, 업데이트 될 때 무조건 실행되지만 파란색으로 칠해진 부분은 **특정 조건**을 만족해야만 실행된다.

그 조건이 무엇인지에 대해서는 **How to use useEffect()** 에서 살펴보자.

<img src="https://user-images.githubusercontent.com/56385667/138708622-887b26e0-d119-4f1e-a7b0-9140c787951a.png" style="zoom:20%" />

## 🎯 How to use useEffect()

`useEffect()` 는 `useEffect( ( ) => { }, [ ] )` 와 같은 형식을 갖고있다.

**Why to use useEffect()** 에서 서술했 듯, `useEffect()` 안에 있는 코드는 특정 조건이 성립할 경우에만 반복적으로 실행된다.

그 경우는 바로 useEffect( ( ) => { }, `[ ]` ) 에서 두 번째 인자로 사용되는 `[ ]` 에 의해 결정된다. 이 대괄호 안에는 특정 `state` 변수 명을 적는다. 그 `state` 가 변경되었을 때, 리액트는 `useEffect()` 안에 있는 함수를 실행한다.

그렇기에 `[ ]` 가 비어있는 경우에는, 해당 컴포넌트가 **등장**할 경우에만 `useEffect` 안에 있는 함수가 실행될 뿐, 특정 `state` 가 업데이트 될 때는 실행되지 않는다.

다음 코드와 결과를 확인하자.

```react
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  return <Modal></Modal>;
}

function Modal() {
  const [click, setClick] = useState(0);
  console.log('This is Modal!');

  useEffect(() => {
    console.log('Hello useEffect!');
    console.log(`${click} click detected`);
    return () => {
      console.log('Bye useEffect!');
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setClick(click + 1);
        }}
      >
        버튼
      </button>
      <div>총 {click}회 클릭하셨습니다.</div>
    </div>
  );
}

export default App;
```

![Gif1](https://user-images.githubusercontent.com/56385667/138707336-f9c398aa-29a9-4bf7-97eb-06aef99753d4.gif)

우선 `Modal` 이 등장하는 경우 `Modal` 안에 있는 모든 코드들이 실행된다. `useEffect` 를 포함한 모든 코드들이 말이다.

때문에 옆에 콘솔 창에서 _This is Modal!_ , _Hello useEffect!_, _0 clicked detected_ 등의 출력을 볼 수 있다.

하지만`[ ]` 와 같이 대괄호 안이 비어있기 때문에, `Modal` 에 존재하는 `click` state 가 변경되어도 _This is Modal!_ 만 반복적으로 실행될 뿐, `useEffect` 안에 존재하는 _Hello useEffect!_, _0 clicked detected_ 등은 더이상 반복적으로 출력되지 않는다.

<br/>

이 때 대괄호 안에 `click` 을 넣게 된다면 어떻게 될까?

```react
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  return <Modal></Modal>;
}

function Modal() {
  const [click, setClick] = useState(0);
  console.log('This is Modal!');

  useEffect(() => {
    console.log('Hello useEffect!');
    console.log(`${click} click detected`);
    return () => {
      console.log('Bye useEffect!');
    };
  }, [click]);

  return (
    <div>
      <button
        onClick={() => {
          setClick(click + 1);
        }}
      >
        버튼
      </button>
      <div>총 {click}회 클릭하셨습니다.</div>
    </div>
  );
}

export default App;
```

`[ click ]` 과 같이 대괄호 안에 특정 state 를 작성하면, 우리가 작성한 `click` state 가 업데이트 될 때 `useEffect` 안의 코드를 반복적으로 실행한다. 그 결과는 다음과 같다. 출력 창을 보면 `useEffect` 안에 작성한 `console.log()` 들이 반복적으로 실행되는 것을 볼 수 있다.

![Gif2](https://user-images.githubusercontent.com/56385667/138707369-cd2dcf7d-014d-49a9-870e-cc95abd3aa70.gif)

---

한편 `useEffect()` 안에 존재하는 `return` 은 `componentWillUnmount` (클래스 방식으로 컴포넌트를 작성하는 경우) 의 역할을 수행한다. 즉, **퇴장하기 전에 ~ 해주세요** 의 역할을 담당하는 것이다.

뿐만 아니라, 특정 `state` 가 업데이트 되는 경우 이전 `effect` 를 청소하는 기능으로도 사용된다.

결론적으로 다음 두 개의 역할을 담당한다.

1. dependancy (두 번째 인자로 넘기는 배열) 가 바뀌어서 effect가 달라져야할 때 이전 effect 를 청소하는 용도
2. component가 unmount 되기 직전 (퇴장 직전)

때문에 위 **GIF**를 살펴보면 `click` state 가 변경되고 `Modal` 컴포넌트가 다시 실행될 때 `Modal` 안 `return` 에 적은 출력이 실행되어, 콘솔 창에 _Bye useEffect!_ 가 실행되는 것을 볼 수 있다.

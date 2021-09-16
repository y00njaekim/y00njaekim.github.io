버튼 눌렀을 때 모달창 띄우기



## 삼항연산자 Ternary Operator



> if/else 구문으로 표현 가능한 문법들을 `Ternary Operator` 를 이용해서도 표현할 수 있다. 아래 두 코드는 같은 기능을 수행한다.



```js
let isNightTime = true; 

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}


```



이를 `Ternary Operator` 를 이용해서 표현하면 다음과 같다.

```js
isNightTime 
? console.log('Turn on the lights!')
: console.log('Turn off the lights!');
```



## html(jsx) 안에 java script 문법 사용하는 방법



html(jsx) 안에 html 태그뿐만 아니라  java script 문법도 사용할 수 있다.

사용하기 위해서는 java script 표현을 `{}` 중괄호로 감싸주어야 한다.

가령 특정 조건이 성립하는 경우에만 어떤 html(jsx) tag 를 띄울 때, 위의 삼항연산자를 이용할 수 있는데 코드는 다음과 같다.



```js
function App() {
  return (
    {
      1 < 3
      ? <div>3은 1보다 커요</div>
      : <div>3은 1보다 작아요</div>
    }
  )
}
```

---



### 삼항연산자 조건으로 사용하는 state

> 삼항연산자를 사용헐 땨 조건식이 필요하다. 조건식은 true/false 반환하는데 리액트에서는 **보통 조건식으로  state 를 많이 이용**한다.



가령 버튼을 클릭했을 때 특정 html(jsx) ui가 보이고 버튼을 다시 클릭하면 그 ui가 사라지는 코드를 작성해보면 다음과 같다.

```js
function App() {
  let [onUI, setOnUI] = useState(false);
  
  return {
    <div>
      {
        onUI === true
        ? <div>버튼이 클릭되었습니다</div>
        : null  
      }

      <button onClick={() => {
        setOnUI(!onUI);
      }}>
      버튼
      </button>
		</div>
  }
}
```


---
title:  "[Flutter] future, async, await 개념 정리"
excerpt: "비동기란?"
toc: true
toc_sticky: true
# header:
#   teaser:

categories: 'flutter'
tags:
  - flutter
  - dart
last_modified_at: 2021-08-16T08:06:00-05:00
---

### Future

future 의 값으로 세가지의 상태가 가능하다.

1. Uncompleted
2. Completed, data return
3. Completed, error return



처음 `Future` 를 사용해서 data 를 만들면 `Uncompleted future` 가 들어간다.

이후 `Future` 가 작업을 끝내면 `Completed future` 가 들어간다.



### async, await

- `await` 는 `async` 함수 내에서만 사용 가능하다.
- `async` 함수 내에서 `await` 가 붙은 작업은 해당 작업이 끝날 때까지 다음 작업으로 넘어가지 않고 기다린다.

```dart
main() {
  print('start main()');

  var myFuture = getData();
  print('result : $myFuture');

  print('end main()');
}

Future<String> getData() {
  var test = Future(() {
    for(int i=0; i<1000000000; i++) {}
    return 'I got a lot of data! Tehre are 1000000000';
  });
  return test; 
}
```

이 경우, `var myFuture = getData();` 에 의해 호출된 getData() 의 for 문이 다 돌아가기 전에 `print('result : $myFuture')` 이 실행된다.

`getDtata() ` 의 작업이 완료되지 않은 상태에서 `Future`은 `Uncomplete instance ` 값이 들어가 있기에 결과는 다음과 같이 출력된다.

![fig1](https://user-images.githubusercontent.com/56385667/129482763-94447960-5e0b-4d58-af4b-beed9046f984.png)

<br/>

```dart
main() async {
  print('start main()');

  var myFuture = await getData();
  print('result : $myFuture');

  print('end main()');
}

Future<String> getData() {
  var test = Future(() {
    for(int i=0; i<1000000000; i++) {}
    return 'I got a lot of data! Tehre are 1000000000';
  });
  return test; 
}
```



반면 이 경우에는, `var myFuture = await getData();` 에 의해 호출된 getData() 의 for 문이 다 돌아갈 때까지 event queue가 멈춰있다.

`getDtata() ` 의 작업이 완료된 후 `var myFuture` 에 `Completed data` 값이 들어가므로 다음과 같이 출력된다.

![fig2](https://user-images.githubusercontent.com/56385667/129482797-ff015288-7c3d-455c-98c3-1069da7183e8.png)


### Reference
[https://brunch.co.kr/@mystoryg/134](https://brunch.co.kr/@mystoryg/134)


화면 전체를 쓰는 태그 inline vs 자기 자신의 크기만큼만 쓰는 태그 block

display property 를 통해 inline - block 설정 변경 가능

박스모델 border 표현해놓고 css 건드리기! 볼 수 있어서 좋음

인라인에서는 width height property 가 무시된다

box-sizing: 은 크기를 예측할 때 그 기준으로 content 를 기준으로 삼을지 border 를 기준으로 삼을지 를 결정할 수 있음

position

기본적으로 position: static

position: relative 가 되어야 offset 적용 가능. offset 이란 left right 등의 property

absolute position 은 부모 태그 중 static이 아닌 position 을 갖고 있는 부모 태그에 대한 relative 라고 이해해도 괜찮을 듯

position 이 absolute일 떄 기본 오프셋은 원래 있어야 할 위치에 있음

absolute postion 하면 부모와의 링크가 끊킴

이 의미는

1. 부모의 크기 100% 를 사용하다가 안함 즉, 컨텐트의 크기만큼 width height 가 설정됨
2. 부모 엘리먼트의 크기도 자식 엘리먼트를 포함하는 방향으로 설정되지 않음 (자식을 없는 셈 친다)

fixed

고정된. 스크롤에 독립적으로 기능

fixed 와 같이 쓰면 좋은게 body 에 대한 padding

fixed postion 하면 부모와의 링크가 끊킴

이 의미는

1. 부모의 크기 100% 를 사용하다가 안함 즉, 컨텐트의 크기만큼 width height 가 설정됨
2. 부모 엘리먼트의 크기도 자식 엘리먼트를 포함하는 방향으로 설정되지 않음 (자식을 없는 셈 친다)

Flex 레이아웃 잡을 때 쓰는 기능

<container>

<item></item>

<item></item>

</container>

![Screen Shot 2021-10-04 at 3.00.32 PM](/Users/yoonjae/Dropbox/스크린샷/Screen Shot 2021-10-04 at 3.00.32 PM.png)

부여해야하는 속성 위에 그림 참조

flex 기본 설정 = flex-direction:row

item > flex-basis : 크기

item > flex-grow: 여백을 차지하는 비율 - grow 의 방향

item > flex-shrink: 줄어드는 비율 - flex-basis 로부터 줄어들음

align-items: 기본값은 stretch

holy-grail-layout

traansform

block level element 에만 적용 가능

mdn 싸이트에 document 처럼 css 양식 잘 나오는듯?

transition

🙋‍♂️ 아마 justify 가 가로정렬 align 이 세로정렬?

[[링크]](https://studiomeal.com/archives/197)

## 타이포그래피



### font-size

`font-size` property 에 대해 알아보자. 가장 중요한 것은 **단위**이다. 단위는 총 세가지가 있는데 하나하나 알아보자.

🎯 px

픽셀 단위를 의미한다. 모니터 상의 화소 크기를 기준으로 한 단위이며 사용자가 글꼴 크기를 상대적으로 조정할 수 없기 때문에 가급적 사용을 하지 않는 것이 좋다.

🎯 em

부모 태그의 영향을 받는다 (상대적인 크기를 나타내는 단위이다). 부모 태그의 폰트 사이즈 크기를 항시 파악하기 어렵기 때문에 사용을 권고하지 않는다.

🎯 rem

html 태그에 적용된 폰트 사이즈의 영향을 받는다 (상대적인 크기를 나타내는 단위이다). html 태그의 폰트 사이즈만 파악하면 되므로 가장 바람직한 단위로 여겨진다. 

<br/>

> 크롬 기준 Settings > appearance > font size 를 변경하면 `px` font-size 가 적용된 글씨는 크기가 고정되어 변하지 않지만 `rem` font-size 가 적용된 글씨는 크기가 같이 변경됨.



타이포그래피에는 이 외에도 [color](https://opentutorials.org/course/2418/13359), [text-align](https://opentutorials.org/course/2418/13360), [font](https://opentutorials.org/course/2418/13361) 등의 property 를 조정할 수 있다. 자세한 내용은 링크를 참고하자.
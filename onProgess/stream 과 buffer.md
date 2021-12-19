개인적으로 기억할 용어

호출 객체 리턴



---



![제목 없음 2_6932535472280089549](/Users/yoonjae/Dropbox/스크린샷/제목 없음 2_6932535472280089549.png)

---

### stream 과 buffer

1349 pg

우리가 매번 쓰는 #include <iostream> 이 input output stream 이다.



입력 -> 프로그램 -> 출력

입력장치 -> 입력스트림 -> 프로그램 -> 출력스트림 -> 출력장치



씨쁠쁠에서 버퍼를 비우는 촉매는 대부분 개행문자



버퍼는 댐 스트림은 말그때로 강의 흐름





한편 우리는 #inlcude string  은 iostream 생성 이후에 생성되었다

string 이전에는 문자열 배열 char* 을 이용하였다. 이 둘은 분명하게 구별된다.



![Screen Shot 2021-12-11 at 5.43.50 PM](/Users/yoonjae/Dropbox/스크린샷/Screen Shot 2021-12-11 at 5.43.50 PM.png)



## <iostream> 의 getline()

getline 은 다음과 같은 느낌으로 사용해야한다.

스트림.getline(저장할곳, 받아올 문자 개수), 스트림.getline(저장할곳, 받아올 문자 개수, 구분자) 구분자는 디폴트로 개행문자이다.

이 때 getline 은 iostream 의 method 이며 그렇기 때문에 아직 문자열 배열만 사용하고 string 을 사용하기 이전이라 다음과 같이 하면 괜찮지만 그 다음과 같이 하면 에러가 난다.



 ![carbon (1)](/Users/yoonjae/Dropbox/My Mac (KIMYOONJAEs-MacBook-Pro.local)/Downloads/carbon (1).png)

![carbon (2)](/Users/yoonjae/Dropbox/My Mac (KIMYOONJAEs-MacBook-Pro.local)/Downloads/carbon (2).png)

![carbon (3)](/Users/yoonjae/Dropbox/My Mac (KIMYOONJAEs-MacBook-Pro.local)/Downloads/carbon (3).png)

10개가 넘어 딱 10개까지만 출력된다. 실제로는 9개까지인데 그 이유는 마지막 1글자에는 널포인트가 들어가야하기 때문이다.



![carbon (4)](/Users/yoonjae/Dropbox/My Mac (KIMYOONJAEs-MacBook-Pro.local)/Downloads/carbon (4).png)

![carbon (5)](/Users/yoonjae/Dropbox/My Mac (KIMYOONJAEs-MacBook-Pro.local)/Downloads/carbon (5).png)

이 형태는 스트림.getline(저장할 곳, 받아올 문자 개수) 중 저장할 곳을 문자 배열이 아닌 문자열로 했기에 해당하는 method 가 없다고 에러가 나온다.



### sstream 의 getline

한 편 string 을 처리하기 위해 새로운 stream 객체를 만들었다. 그 라이브러리가 sstream.

~~cin 도 스트림인데 이거는 표준입력스트림이라 알아서 표준 입력 장치를 마련해주었지만 sstream 은 그 렇지 않음. 그래서 그냥 문자열을 때려 박아줘야함~~

다음과 같이 사용.

getline(스트림, 저장할곳, 구분자)

getline(cin, str) 예시 넣기

### getline 써서 문자열 쪼개기

그예시

eofbit 등의 의미와 while 문이 종료되지 않는 이유 (getline 의 return 값)

eofbit -> (1215pg, chapter 17)

이 방법의 한계 -> 문자열로는 못쪼갬

~~-> ignore 써서 야매로? -> 안될거같은데?~~

### cin.ignore()



![제목 없음 2_8900652964745448189](/Users/yoonjae/Dropbox/스크린샷/제목 없음 2_8900652964745448189.png)



### find

좀 더 일반적인 방법으로 find 의 사용법도 말해주자.

여기서 주의 unsigned int



find 는 delimiter, pos 받고

substr 은 pos, count 받음

```


```



### npos 의 의미

unsigned int 라 -1 을 의미하고 이는 string class 최대 허용 문자수임.

![제목 없음 2_3139505435026289047](/Users/yoonjae/Dropbox/스크린샷/제목 없음 2_3139505435026289047.png)



### get vs getline

한편 get 과 getline 의 차이는 멈추냐 아님 내다버리냐.



---

substr(pos, len) default 값 까지 잘 기억

```
string substr (size_t pos = 0, size_t len = npos) const;
```

find 도

size_type find (const string & str, size_type pos = 0) const;

호출한 문자열의 pos 위치에서부터 시작하여 처음으로 발생하는 부분 문자열 str 을 검색한다. 부분 문자열이 발견되면 첫 문자의 인덱스를 리턴한다. 그렇지 않으면 string::npos 를 리턴한다.


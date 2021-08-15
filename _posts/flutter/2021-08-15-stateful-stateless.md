---
title:  "[Flutter] stateful 위젯이란!?"
excerpt: "stateful, stateless 위젯 차이점"
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

#### stateful 위젯

- 사용자와 상호작용 존재
- 재렌더링 가능, 동적 화면 구현
- LifeCycle 이 길고 build가 1회 이상 발생



#### stateless 위젯

- 사용자와 상호작용 없음
- 재렌더링 없음, 정적 화면 구현
- LifeCycle이 짧고 build가 1회만 발생. 성능이 좋음



> React 의 state 를 생각하면 될 듯!
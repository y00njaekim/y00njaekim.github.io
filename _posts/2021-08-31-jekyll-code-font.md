---
title:  "[Jekyll] jekyll 코드 폰트 바꾸는 법"
excerpt: ""
toc: true
toc_sticky: true
# header:
#   teaser:

categories:
  - Jekyll
tags:
  - Jekyll
last_modified_at: 2021-08-31T08:06:00-05:00
---

아니, 'Jekyll 기반의 블로그 글씨체 바꾸는 법' 에 관한 가이드 글은 너무나 많은데,

왜 코드 글씨체 바꾸는 법은 아무도 안알려줄까..!!

<br/>
![fig1](https://user-images.githubusercontent.com/56385667/131066966-8fa07166-2400-4821-abdc-71f05f9713aa.png)

본문 글씨체는 내가 바라는 대로 정갈하게 맞추어 놓았지만 코드 글씨체가 너무 귀여워서 안어울린다..

**그래서 이번에는 코드 글씨체를 바꾸는 방법을 알아보고 적용해 보려한다.**

<br/>

### @font-face 와 font-family
---

<br/>
ms word 혹은 ms ppt 에서 새로운 서체를 이용하던 순간을 생각해보자. 우선 서체를 다운받고, 그 이후 서체를 적용시킨다. '다운로드' 와 '적용' 을 담당하는 css 명령어가 바로 `@font-face` 와 `font-family` 이다. `@font-face` 를 통해 서체를 다운받고 `font-family` 를 이용하여 서체를 적용한다.

![fig2](https://user-images.githubusercontent.com/56385667/131068267-b6409517-6898-4e7b-b4eb-2cdf353489f9.png)

![fig3](https://user-images.githubusercontent.com/56385667/131068273-a3fa26e2-9b05-408d-94d1-cccaa8e8594f.png)

아래 사진을보면 `font-family: $monospace` 가 적혀있는 줄을 볼 수 있다. 특정 영역 (ppt 에서 특정 텍스트박스에 글씨체를 적용하 듯이)에 `font-family` 명령어를 이용하여 `monospace` 라는 글씨체~~(정확히는 서체배열?)~~를 적용한다.

위 사진에 나와있는 `$monospace` 를 보면 `Monaco, Consolas, ...` 등 여러 글씨체가 나열되어 있는데, 이는 `Monaco` 글씨체가 있으면 이를 우선으로 적용하고 만약 없으면 `Consolas` 를 적용하라는 의미로 1순위, 2순위, ... 등의 우선순위를 나타낸다.



### @font-face 를 이용한 글씨체 적용
---

<br/>
자, 그럼 이제 적용하고 싶은 폰트를 다운받아보자. 서체는 웹 폰트 형식의 **woff 확장자**를 이용하면 된다. Reference 1 블로그를 살펴보면 ttf -> woff 변환이 가능하다는 내용이 있으니 필요시 참고하길 바란다!

폰트를 다운받았다면 `/assets/fonts` 경로에 복사하자. (다른 reference 를 보니 폰트를 아무 곳에나 다운받아도 되지만, assets 하위 폴더로 통일하는 것이 좋다고 한다!)

<img src="https://user-images.githubusercontent.com/56385667/131451274-3db2c6d4-622a-4d88-be8c-818b4b9d995d.png" alt="fig4" style="zoom:40%;" />

폰트를 경로에 잘 붙여 넣었다면 이제 jekyll 에서 불러올 차례이다. `assets/css/main.css` 에 아래 코드를 추가하자

```css
@font-face {
  font-family: 'D2Coding';
  src: url('/assets/fonts/D2Coding.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'D2Coding';
  src: url('/assets/fonts/D2CodingBold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}
```



![fig5](https://user-images.githubusercontent.com/56385667/131452023-538964bd-a2ea-4ee9-9c43-655ca48570b7.png)

코드의 폰트는 `_sass > minimal-mistakes > _base.scss` 에서 수정할 수 있다.

![fig6](https://user-images.githubusercontent.com/56385667/131452551-bb37511e-22f6-47ed-8303-2261eedaa725.png)

이 사진에 나오는 부분의 `font-family` 를 바꾸면 코드 글씨체가 변경된다. 이 때 방법은 두가지이다.

1. `font-family: $monospace` 는 유지한 채 `$monospace`  에 다운로드 받은 폰트를 넣는다.
2. `font-family: '다운로드 받은 폰트'` 의 문법으로 폰트를 바로 적용한다.

<br/>
나는 1번의 방법을 이용해서 폰트를 바꾸어 보겠다.

`_sass > minimal-mistakes > _variable.scss` 를 살펴보면 아래와 같은 부분을 찾을 수 있다.

![fig7](https://user-images.githubusercontent.com/56385667/131452954-b1fe328d-7cb8-4ec2-beda-4b126279ee66.png)

<br/>
여기서 `$monospace` 에 내가 다운로드 받은 폰트 (여기서는 'D2Coding') 를 넣으면 끝!

<br/>
그러면, 다음과 같이 코드의 글씨체가 바뀐 것을 볼 수 있다

![fig8](https://user-images.githubusercontent.com/56385667/131453147-ce85fb72-50bd-41bb-8561-1d0b315a94b8.png)
<br/>

### Reference
---

1. [https://webclub.tistory.com/261](https://webclub.tistory.com/261)
2. [https://oilmlio.com/blog/Change-the-GitHub-Blog-Font-RIDIBatang/](https://oilmlio.com/blog/Change-the-GitHub-Blog-Font-RIDIBatang/)


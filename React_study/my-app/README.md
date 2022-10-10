# React_study

<hr/>

### JSX

- 자바스크립트의 문법을 확장 - javascript + XML / HTML
  ex) JSX 코드

```
const element = <h1>Hello, world!</h1>;
```

- JSX코드 -> javascript 코드로 변환하는 것이React의createElement

```
React.createelement{
    type,
    [props],
    [...children]
}
```

jsx 사용 : <div>Hello, {name} </div>

jsx 사용x : React.createElement('div', null, `Hello, ${name}`);

### Element

- [요소, 성분] 어떤 물체를 구성하는 성분
- Elements는 화면에서 보이는 것들을 기술

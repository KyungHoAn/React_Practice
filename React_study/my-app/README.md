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
- immutable : 변경할 수 없는 불변의(불변성)
- elements 생성후에는 children이나 attributes를 바꿀 수 없다.

### Component-Based

- 리액트에서는 모든 페이지가 compoennt로 되어 있다.

### props

- 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체
- Read-only : 읽을수만 있다 , 값 변경 불가

### 함수 compoennt , class compoennt

- class component는 React.component를 상속받는다.
- compoennt이름은 항상 대문자로 시작해야 한다.
- compoennt 렌더링

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

### State 상태

- 리액트 Component의 상태
- 리액트 compennt의 변경가능한 상태
- state는 개발자가 정한다.
- 렌더링이나 데이터 흐름에 사용되는 값만state에 포함시켜야한다.
- 모든 class컴포넌트에는 constructor 생성자 함수가 존재하며
  클래스가 생성될때 실행된다.
- 클래스 컴포넌트의 경우 state를 생성자 컴포넌트에서 정의한다.
- 함수 컴포넌트는 state를 useState라는 hook을 사용하여 정의한다.
- state는 직접 수정할 수 없다. 꼭 setState를 사용해야한다.

```
// state를 직접 수정(잘못된 사용법)
this.state = {
    name: 'Inje'
};
// setState 함수를 통한 수정 (정상적인 사용법)
this.setState({
    name: 'Inje'
});
```

- LifeSycle 생명주기: 컴포넌트가 생성 및 소멸되는 주기

  - Component가 계속 존재하는 것이 아니라, 시간의 흐름에 따라 생성되고 업데이트 되다가 사라진다.

- map함수를 사용할때에는 key가 반드시 들어가야한다. 오류메시지 뜸

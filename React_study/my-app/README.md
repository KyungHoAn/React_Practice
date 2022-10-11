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

### React Hook
- 함수 component
  - state 사용 불가
  - Lifecycle에 따른 구현 불가
  - Hook

- class component
  - 생성자에서 stat를 정의
  - setState() 함수를 통해 state업데이트
  - Lifecycle methods 제공

- useState Hook
  - state를 사용하기 위한 hook
```
import React, {useState} from 'react';
...

//사용법
const [변수명, set함수명] = useState(초기값);
// 변수 각각에 대하여 setState함수가 존재한다.
```

- useEffect
  - side effect( 리액트에서 의미하는 것은 효과, 영향)
  - useEffect(이펙트 함수, 의존성 배열);
  - componentWillUnmount와 같은 역할을 한다.(component가 unmount될 때 호출된다.)
```
useEffect(() => {
  // 컴포넌트가 마운트 된 이후
  // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
  // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행됨
  // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
  ...
  
  return () => {
    // 컴포넌트가 마운트 해제되기 전에 실행됨
    ...
  }
},[의존성 변수1, 의존성 변수2, ...]);
```

- useMemo
  - Memoized value를 리턴하는 Hook
  - Memoization : 최적화를 위해 사용하는 것
  - useMemo() 사용법
```
const memoizedValue = userMemo(
  () => {
    //연산량이 높은 작업을 수행하여 결과를 반환
    return computeExpensiveValue(의존성 변수, 의존성 변수2);
  },
  [의존성 변수1, 의존성 변수2]
);
```

- useCallBack()
  - useMemo() Hook과 유사하지만 값이 아닌 함수를 반환한다.
  - 컴포넌트가 렌더링될때마다 함수를 새로 정의하는 것이 아니라 의존성 배열의 값이 바뀐 경우에만 함수를 새로 정의해서 리턴해준다.

```
const memoizedCallback = useCallback(
  ()=> {
    doSomething(의존성 변수1, 의존성 변수2);
  },
  [의존성 변수1, 의존성 변수2]
); 
```

- useRef() Hook
  - Reference를 사용하기 위한 Hook
  - 리액트에서 reference란 특정 컴포넌트에 접근할 수 있는 객체
  - reference에는 current라는 속성이 있음 -> 현재 참조하고 있는 element를 의미한다.
  - 사용법
```
const refContainer = useRef(초긱값);
```

- Hook 규칙
  - 무조건 최상위 레벨에서만 호출해야함
  - 컴포넌트가 렌더링될 때마다 매번 같은 순서로 호출되어야 한다.
  - 리액트 함수 컴포넌트에서만 Hook을 호출해야 한다.
eslint-plugin-react-hooks

- Custom Hook 만들기
  - 이름이 use로 시작하고 내부에서 다른 Hook을 호출하는 하나의 자바스크립트 함수
  
- Event Handler = Evnet Lisener
  - 특정 사건을 의미
  - ex) 버튼 클릭
  - 함수 컴포넌트에서의 eventhandler
```
function Toggle(props){
  const [isToggleOn, setIsToggleOn] = useState(true);

  //방법1 함수안에 함수로 정의
  function handleClick() {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  //방법2: arrow function 상용하여 정의
  const handleClick = () => {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  return (
    <button onClick={handleClick}>
      {isToggleOn ? "켜짐" : "꺼짐"}
    </button>
  );
}
```

- Aurgument : 주장, 함수의 전달할 데이터 <=> parameter : 매개변수
- 함수컴포넌트에서 매개변수를 전달할 때
```
function MyButton(props){
  const handleDelete = (id, event) => {
    console.log(id, event.target);
  };

  return(
    <button onClick={(event) => handleDelete(1, event)}>
      삭제하기
    </button>
  );
}
```

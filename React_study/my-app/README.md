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

- condition : 조건부 렌더링
  - 어떠한 조건에 따라서 렌더링이 달라지는 것

- && 현산자
ex) length가 0 보다 크면 h2가 실행되고 작으면 아무것도 실행되지 않는다.
```
...
return(
  <div>
    <h1>안녕하세요</h1>
    {unreadMessage.length > 0 &&
      <h2>
        현재 {unreadMessage.length} 갱의 읽지 않은 메시지가 있습니다.
      </h2>
    }
  </div>
)
```

- list & key
```
// list
const numbers = [1,2,3,4,5];
```

- map() 함수
```
const doubled = numbers.map((number) => number*2)
```
- map 함수를 사용하여 리액트에서 렌더링
```
const numbers = [1,2,3,4,5];
const listItems = numbers.map((number) => 
  <li>{number}<li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```

- 숫자 목록을 나타내는 numberlist component -> key가 없다는 error 메시지 뜬다.
```
function NumberList(props) {
  const { numbers } = props;

  const listItmes = numbers.map((number) =>
    <li>{number}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

- key로 값을 사용하는 경우
```
const numbers = [1,2,3,4,5];
const listItmes = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```
=> key값은 고유해야하는데 중복되면 경고메시지 출력
- _map()함수 안에 있는 Elements는 꼭 key가 필요하다!_

*** Form
- Controlled Component
  - 모든 데이터를 state에서 관리
```
function NameForm(props) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value); //event.target -> 현재 발생한 이벤트의 타겟
  }

  const handleSubmit = (event) => {
    alert('입력한 이름: '+ value);
    event.perventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={value} onChange={handleChange}/>
      </label>
      <button type="submit">제출</button>
    </form>
  )
}
```
- 모든 입렧값을 대문자로 변경
```
const handleChange = (event) => {
  setValue(event.target.value.toUpperCase());
}
```

- select
```
function FruitSelect(props) {
  const [value, setValue] = useState('grape');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('선택한 과일: ' +value);
    event.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>
        과일 선택:
        <select value= {value} onChange={handleChange}>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="grape">포도</option>
          <option value="watermelon">수박</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  )
}
```

- file input tag -> 디바이스 저장 장치로부터 하나 또는 여러 개의 파일을 선택할 수 있는 해줌
:: Uncontrolled Component
```
<input type="file">
```
```
function reservation(props) {
  const [haveBreakfast, setHaveBreakFast] = useState(ture);
  const [numberOfGuest, setNumberOfGuest] = useState(2);

  const handleSubmit = (event) => {
    alert(`아침식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
    event.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>
        아침식사 여부:
        <input
          type="checkbox"
          checked ={habeBreakfast}
          onChange = {(event) => {
            setHaveBreakfast(event.target.checked);
          }}/>
      </label>
      <br/>
      <label>
        방문객 수:
        <input
          type="number"
          value={numberOfGuest}
          onChange={(event) => {
            setNumberIfGuest(event.target.value);
          }}/>
      <label>
      <button type="submit">제출</button>
    </form>
  )
}
```

- shard component
```
function Calculator(props) {
  const [temperature, setTemperature] = useState('');

  const handleChange = (event) => {
    setTemperature(event.target.value);
  }

  return(
    <fieldset>
      <legend>섭씨 온도를 입력하세요: </legend>
      <input
        value={temperature}
        onChange={handleChange} />
      <BoilingVerdict
        celsius={parseFloat(temperature)}/>
    </fieldset>
  )
}
```

- context
  - 일일이 PROPS로 데이터를 전달하지 않고 필요할때마다 데이터 전달 가능
  - 로그인 여부, 로그인 정보, UI 테마, 현재 언어 등...
```
// props로 데이터를 전달하는 방법
function App(props) {
  return <Toolbar theme="dark" />;
}

function Toolbar(props) {
  // 이 Toolbar 컴포넌트는 TemedButton에 theme를 넘겨주기 위해서 'theme' prop을 가져야만 한다.
  // 현재 테마를 알아야 하는 모든 버튼에 대해서 props로 전달하는 것은 괸장히 비효율적이다.
  return (
    <div>
      <ThemedButton theme={props.theme}/>
    </div>
  );
}

function ThemedButton(props) {
  return <Button theme={props.theme} />;
}
```
```
// context로 데이터를 전달하는 방법
// 컨텍스트는 데이터를 매번 컴포넌트를 통해 전달할 필요 없이 컴포는트 트리를 곧바로 전달하게 해준다.
// 여기에는 현재 테마를 위한 컨텍스트를 생성하며 기본값은 light이다.
const ThemeContext = React.createContext('light');

//Provider를 사용하여 하위 컴포넌트들에게 현재 테마 데이터를 전달한다.
// 모든 하위 컴포넌트들은 컴포넌트 트리 하단에 얼마나 같이 있는지에 관계없이 데이터를 읽을 수 잇다
// 여기에는 현재 테마값으로 dark를 전달하고 잇다.
function App(props){
  return(
    <ThemeContext.Provider value="dark">
      <Toolbar/>
    </ThemeContext.Provider>
  );
}

//이제 중간에 위치한 컴포넌트는 테마 데이터를 하위 컴포넌트로 전달할 필요가 없다.
function Toolbar(props){
  return(
    <div>
      <ThemedButton/>
    </div>
  );
}

function ThemedButton(props) {
  //리액트는 가장 가까운 상위 테마 Provider를 찾아서 해당하는 값을 사용한다.
  // 만약 해당하는 provider가 없을 경우에는 기본값을 사용
  // 여기에는 상위 Provider가 있기 때문에 현재 테마는 값은 dark가 된다.
  return(
    <ThemeContext.Consumer>
      {value => <Button theme={value}>}
    </ThemeContext.Consumer>
  );
}
```


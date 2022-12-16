# React Practice

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). <br/>
Atomic Design : KH_Wiki = "https://github.com/KyungHoAn/React_Practice/wiki"

1. Component
- Component 는 특정 코드를 다른 부분에 이식하거나 재사용하기 위해 사용하는 코드 블록 단위 / 다른 파일에 Import 하여 사용한다.

- render()는 return되는 html 형식의 코드를 화면에 그려주는 함수 (화면 내용이 변경돼야 할 시점에 자동 호출)
```
class ~~ {
  render() {
    return (
      ~~
    )
  }
}
```
[생명주기 함수]
- constructor(props) 함수는 생명주기 함수 중 가장 먼저 실행, 처음 한번만 호출된다.
- getDerivedStateFromProps(props, state) 함수는 constructor() 함수 다음으로 실행 / 컴포넌트가 새로운 props를 받게 됐을 때 state를 변경해준다. 
- componentDidMount() 함수는 작성한 함수들 중 가장 마지막으로 실행 / render() 함수가 return 되는 html 형식의 코드를 화면에 그려준 후 실행된다.
  - '생성' 단계의 생명주기 함수중 가장 마지막으로 실행된다.
- setState() 함수는 변수의 선언과 초기화를 동시에 실행된다. state 의 변경이 일어나면 '변경' 단계의 생명주기 함수 shouldComponentUpdate()가 실행된다. 
- shouldComponent()는 boolean 유형의 데이터를 반환, return 값이 true 일 경우 render 함수를 한번더 호출한다.

[템플릿 문자열]
- 따옴표가 아닌 배틱(`)으로 전체 문자열과 변수를 묶어 사용하며, 변수는 ${ 변수명} 형태로 넣고 코드상에서 줄바꿈을 하면 개행 문자 없이도 사용할 수 있다. 
- startWith(), endWith(), includes() 는 Es6에 추가된 String 함수들, true / false 반환
- startWith() 는 변수 앞
- endWith()는 뒤에서부터 일치하는 문자열이 있는지 확인
- includes()는 위치에 상관없이 변수에 특정 문자열이 포함돼 있는지 판단. 
```
var LongString = "ES6에 추가된 String 함수들입니다.";
console.log('startsWith : '+LongString.startsWith("ES6에 추가"));
console.log('endsWite : '+LongString.endsWith("함수들입니다."))
console.log('includes : '+LongString.includes("추가된 String"));
```
[var / let / const]
var : 재할당 가능 - erorr messgae 출력되어도 정상 출력
let : 재할당 가능, 같은 이름 변수 선언시 error 출력
const : 재할당 불가 

[전개 연산자 사용]
- 전개 연산자는 배열이나 객체 변수를 좀 더 직관적이고 편리하게 함치거나 추출할 수 있게 도와주는 문법
```
       var varArray1 = ['num1','num2'];
        var varArray2 = ['num3','num4'];
        var sumVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
        //var sumVarArr = [].concat(varArray1, varArray2);
        console.log('1. sumVararr : '+sumVarArr);
        //ES6 Array
        let sumLetArr = [...varArray1, ...varArray2];
        console.log('2. sumletArr : '+sumLetArr);
        const [ sum1, sum2, ...remain] = sumLetArr;
        console.log('3. sum1 : '+sum1+', sum2 : '+sum2+ ', remain : '+remain);

        var varObj1 = {key1 : 'val1', key2 : 'var2'};
        var varObj2 = {key2 : 'new2', key3 : 'var3'};
        //javascript Object
        var sumVarObj = Object.assign({}, varObj1, varObj2);
        console.log('4. sumVarObj : ' +JSON.stringify(sumVarObj));
        //ES^ Object
        var sumLetObj = {...varObj1, ...varObj2};
        console.log('5. sumLetObj : '+JSON.stringify(sumLetObj));
        var {key1, key3, ...others} = sumLetObj;
        console.log('6. key1 : '+key1+', key3 : '+key3+', others : '+JSON.stringify(others));
```
[화살표 함수]
-ES6에서 등장한 화살표 함수는 'function' 대신 '=>' 문자열을 사용하여 'return' 문자열을 생략할 수 있다.

[ForEach]
- ForEach 함수에서는 순번과 배열의 크기 정보를 사용하지 않느다.
```
var For_Arr = [3,2,8,8];
var For_newArr = [];
for(var i=0; i< For_Arr.length; i++){
  For_newArr.push(For_Arr[i]);
}

console.log("1. For_newArr : ["+For_newArr+"]");

var ForEach_Arr = [3,3,9,8];
var ForEach_newArr = [];
ForEach_Arr.forEach((result) => {
  ForEach_newArr.push(result);
})
console.log("2. ForEach_newArr : ["+ForEach_newArr+"]");
```
[jQuery]
- npm install jquery
```
import $ from 'jquery';
```

[props]
- props는 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 사용
- props를 전달받은 자식 컴포넌트에서는 데이터를 수정할 수 없다.
[props 자료형 선언]
- props 값들 각각에 적합한 자료형을 선언
```
문자열 유형인 props.String 변수의 자료형을 number로 선언해 경고 메시지가 발생할 수 있도록 한다. 에러가 아닌 경고 메시지이기 때문에 화면에 String변수가 정상적 표시 확인가능
R018_PropsDatatype.propTypes = {
  String: datatype.number,
  Number: datatype.number,
  Boolean: datatype.bool,
  Array: datatype.array,
  ObjectJson: datatype.object,
  Function: datatype.func,
};
```

[props 객체형 사용]
- props 값을 객체로 하위 컴포넌트에 전달 경우, 자료형을  object로 선언, but 객체 형태의 자료형 선언시 shape 유형 사용

```
R020_PropsObjVal.propTypes = {
  ObjectJson: datatype.shape({
    react: datatype.string,
    twohundred: datatype.number,
  }),
};
```
- App.js의 객체 형태
```
<PropsObjVal ObjectJson={{ react: "react", twohundred: "200" }} />  //해당 자료형 선언시 shape 활용
```

[props 필수값으로 사용]
- props의 자료현을 선언할 때 prop-types를 사용, 자료형 설정 대신 isRequired를 조건으로 추가하면 변수값이 없는 경우 경고 메시지 발생

[state 사용]
- props를 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 사용했다면 state는 하나의 컴포넌트 안에서 전역 변수처럼 사용

[setState() 함수]
- this.state.변수명 = value 와 같이 state를 직접 변경하면 render() 함수를 호출하지 않으므로 화면에 보이는 state 값은 바뀌기 전 상태로 남게됨
- setState() 하수로 state를 변경해야 render() 함수를 호출해 변경되 값을 화면에 뿌릴 수 있음

[forceUpdate() 함수]
- forceUpdate() 함수는 화면을 강제로 새로 고침하기 때문에 render() 함수를 다시 실행시켜 화면에 변경된 state 값을 표시할 수 있다.

[Component 사용(Class형 컴포넌트)]
- class형 컴포넌트에는 Component 화 PureComponent가 있다.
- 두 컴포넌트 모두 props 와 state의 변경에 따라 render() 함수 호출
- Componet에서는 비교 대상이 완저히 동일하지 않으면 변경이 발생했다고 본다.
- PureComponent 에서는 비교 대상의 값을 비교해 동일하지 않으면 변경이 발생했다고 본다. 불필요한 render함수실행을 줄이면 페이지 성능을 향상시킬 수 있다.

[함수형 컴포넌트]
- 함수형 컴포넌트는 return 값이 있는 function과 동일한 구조를 갖는다.

[hook사용]
- useState() 함수 : state 변숫값을 선언 및 할당, 이때 두 가지 인자가 선언된 배열이 반환 된다. 첫 번재 인자 contents는 state 변수명, 두 번째 인자 setContents는 state 변수값을 변경
- useEffect() 함수는 생명주기 함수 componentDidMout()와 같이 return 되는 html 코드들이 화면에 그려진 이후에 실행
  - React component가 렌더링 될 때마다 특정 작업을 실행할 수 있도록하는 리액트 Hook 이다.
  - 컴포넌트가 렌더링 될 때 특정 작업을 실행할 수 있도록 하는 Hook이다.
  - 페이지가 처음 렌더링 되고 난 후 useEffect 는 무조건 한번 실행된다.
  - useEffect에 배열로 지정한 useState의 값이 변경되면 실행된다.
  즉. useEffect는 렌더링, 혹은 변수의 값 혹은 오브젝트가 달라지게 되면, 그것을 인지하고 업데이트를 해주는 함수
  - useEffect는 콜백 함수를 부르게 되며 렌더링 혹은 값, 오브젝트의 변경에 따라 어떠한 함수 혹은 여러 개의 함수들을 동작시킬 수 있다.
```
useEffect(function, deps)
```
- function : 실행하고자 하는 함수
- deps : 배열 형태 function실행시킬 조건, deps에 특정값을 넣게 되면 컴포넌트가 mount 될 때, 지정한 값이 업데이트될 때 useEffect를 실행
- useEffect 함수 불러오기
```
import React, {useEffect} from 'react';
```
1. component 가 Mount되었을 때 (나타날 때)
```
useEffect(() => {
  console.log("렌더린 될때마다 실행");
});
```
2. component가 update될 때 (특정 props, state가 바뀔 때)
- 특정값이 업데이트 될 때 실행하고 싶을 때는 deps위치의 배열 안에 검사하고 싶은 값을 넣어준다.
- 업데이트 될 때만 실행하는 것이 아니라 마운트 될 때도 실행된다.
```
const mounted = useRef(false);

useEffect(() => {
  if(!mounted.current) {
    mounted.current = true;
  } else {
    //ajax
  }
},[바뀌는 값]);
```
- 컴포넌트가 마운트 될때는 if문에서 아무것도 실행x mounted 값만 바꿔주고, else 에서 배열 안에 있는 값이 바뀌면,
 ajax 서버 통신이라던지 원하는 코드를 실행할 수 있다.
 
 3. Component가 unmount될 때(사라질 때) & update 되기 직전에
 - cleanup 함수 반환 (return 뒤에 나오는 함수이며 useEffect에 대한 뒷정리 함수라고 하낟.
 - 언마운트 될 때만 cleanup 함수를 실행하고 싶을 때
 : 두 번째 파라미터로 빈 배열을 넣는다.
 
 - 특정값이 업데이트 되기 직전에 cleanup 함수를 실행하고 싶을 때
 : deps 배열 안에 검사하고 싶은 값을 넣어준다.
 

[Fragment 사용]
- 컴포넌트 단위로 element 를 return 할때마다 ,<html> 태크로 전체를 감싸지 않으면 에러 발생
- <Fragment> 태그로 감싸면 불필요한 <html> 태그를 추가하지 않고 사용 가능

[reactstrap Breadcrumbs]
- Breadcrumbs 패키지는 페이지 위치 경로를 지정한 웹 내비게이션에 사용된다.
```
<Breadcrumb tag="nav" listTag="div">
  <BreadcrumbItem tag = "a" href = "#top">Go_top</BreadcrumbItem>
  <BreadcrumbItem tag="a" href="#bottom">Go_buttom</BreadcrumbItem>
</Breadcrumb>
```

[reactstrap Buttons]
```
<Button color="primary">blue</Button>
<Button color="info">teal</Button>
<Button color="success">green</Button>
<Button color="warning">yellow</Button>
<Button color="danger">red</Button>
<Button color="dark">darg gray</Button>
<Button color="secondary">gray</Button>
<Button color="light">whilte</Button>
```
- Bottons 패키지는 <Button> 태그에 color 속성에 약속된 문자열을 넣으면, 용도에 맞는 버튼 스타일을 지원해준다.

[carousel 슬라이드]
- carousel 패키지는 슬라이드를 자동으로 회전시키는 기능 제공

[Collapse]
- Collapse 패키지는 특정 영역을 숨기는 기능을 제공한다. 버튼 이벤트로 펼치고 숨기는 기능 제어 가능
- 상단부터 점차적으로 펼쳐지고 하단부터 숨겨진다는 것이 show(), hide() 함수와의 차이

[Fade]
- 특정 영역을 서서히 나타내고 숨기는 기능 제공
- constructor 에서 state = fadeInOut 이 true면 선언 초깃값 true
```
toggle = (e) => {
        this.setState({fadeInOut: !this.state.fadeInOut})
    }
    
...
//Button 클릭시 toggle 실행
<Button color="success" onClick={this.toggle}>Fade In/Out</Button>
```

[jumbotron]
- Jumbotron은 대형 전광판을 의미, 넓은 영역에 눈에 띄게 정보를 표시해 사용자의 관심을 부름

[reactstrap List Group 사용]
- List Group 패키지는 정돈된 스타일의 목록을 표시할 때 사용
- html에서 목록을 만드는 태그인 <ul> <li>로 반환함

[Modal]
```
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
```

[fetch get 호출]
- 자바스크립트 내장 함수인 fetch를 사용하면 쉽게 비동기 통신 구현 가능
- React에서 비동기 처리를 할대 Promise를 사용하지만 Promise의 단점을 보완하기 위해 ES7에서 async와 await라는 키워드 추가
  
[axios get 사용]
- axios도 fetch와 마찬가지로 비동기 통신을 지원
- axios는 fetch와 달리 별도로 설치한 후 임포트 사용
```
 axios.get('http://date.jsontest.com/').then(response=>{alert(response.data.date)})
```
- url호출이 완료되면 then 함수가 실행, 이때 호출 결과로 response가 반환
- response와 호출된 변수명 사이에 data를 붙이면 변수 사용 가능
  
[콜백함수]
- 자바스크립트는 비동기적으로 동작하기 때문에 콜백 함수를 이용하여 특정 코드에 순서를 정해 원하는 시점에 실행 가능 하게 한다.
  

[Hoc]

[Context api]
- 컨텍스트를 사용하면 하위 컴포넌트가 여러 개인 구조에서 유용하게 사용 가능
- 몇 번째 하위 컴포넌트인지와는 상관없이 필요한 하위 컴포넌트에서 소비자를 임포트해 필요한 데이터를 사용할 수 있다.

[redux 리듀서 스토어 생성]
- redux는 컨텍스트와 마찬가지로 데이터를 필요한 컴포넌트에서만 요청해 사용 가능
- 컨텍스트는 부모 컴포넌트에서 생성한 데이터에 모든 자식 컴포넌트에서 접근 가능 하지만,
- redux에서는 컴포넌틍 ㅚ부의 스토어라는 곳에서 관리하기 때문에 컴포넌트의 위치에 상관없이 스토어에 접근해
- 데이터를 사용하고 변경할 수 있다.

[cookie]
- path는 쿠키 값을 저장하는 서버 경로
- ex) path가 /react라면 localhost:3000/에서는 저장된 쿠키를 확인할 수 없고 localhost:3000/react에서만 확인 가능 path가 /라면 모든 페이지에서 쿠키 접근 가능

[react-router-dom BrowserRouter 사용]
- 라우팅 : 호출되는 url에 따라 페이지(view)이동 설정 
- react에서 view는 component를 사용, react에서 라우팅을 지원하느 패키지는 여럿 있지만 웹 개발을 위한 패키지로 적합한 react-router-dom 설치
- npm install --save react-router-dom
- react-router-dom 패키지는 BrowserRouter, Route, Link의 기능 제공
- Route는 호출되는 url에 따라 이동할 component를 정의
- Link는 <a>태그와 같이 페이지에 표시되는 링크를 클릭하면 url을 호출

[react서버와 node 서버 프록시 연결]
- 프록시 : 클라이언트가 다른 서버에 간접적으로 접속할 수 있도록 중계해주는 프로그램
ex) 웹 브라우저(클라이언트)에 react 서버를 띄우고 react페이지에서 node api를 호출해 데이터 표시 가능, 이때 프록시를 설정하면node 서버 url을 localhost:5000/users가 아닌 /users로 간략하게 사용 가능 

[react 서버 api Get / Post]
- react 에서 json데이터를 받아 사용하기 위해 node 서버에서 josn형태로 데이터를 response에 담아 보낸다
~~~
    componentDidMount = async () => {
        const response = await fetch('/users');
        const body = await response.json();
        console.log("body.message : "+body.message)
    }
~~~
- react에서 post 호출로 json데이터를 받아오기 위해 node 서버에서 post 호출을 받는 라우터 코드를 추가한다.
~~~
    componentDidMount() {
        axios.post('/users',{            
        })
        .then(response => {
            console.log("response data.message : "+response.data.message)
        })
    }
~~~

[nodemon]
- nodemon : node 폴터의 소스가 수정될 때 자동으로 node서버 재시작

[axios]
- react 컴포넌트에서 post 방식으로 axios를 사용하여 node api를 호출, 호출된 데이터를 가공하여 html코드 생성 state변수에 할당




<hr/>

## React 문법
- userRef 로 특정 DOM 선택
o javascript를 사용할 때 특정 DOM을 선택해야 하는 상황에 getElementById, querySelector같은 DOM selector 함수를 사용해서 DOM을 선택 <br/>
o react에서는 ref를 사용<br/>
o 함수형 컴포넌트에서 ref를 사용할 때에는 useRef라는 Hook함수를 사용, 클래스형 컴포넌트에서는 콜백 함수를 사용하거나 React.createRef라는 함수를 사용<br/>
o ref 를 콘솔로 찍으면 current 프로퍼티 하나를 가진 객체가 나타난다.<br/>

- window.pageYoffset
o 스크롤시 스크롤값 구하는 구문

- react-asynxc & Await
o react에서 비동기 처리를 할때 Promise를 사용하지만 Promise의 단점을 보완하기 위해 ES7에서 async와 await라는 키워드 추가됨<br/>
o Async함수<br/>
```
async function {return "id"}
const users = async() => {return "id"}
```
o 비동기 함수를 만들기 위해서는 단순하게 함수 앞에 async를 붙여서 일반 함수를 async함수로 만들면 된다.<br/>
o 함수 비동기 사용 예시<br/>
```
async getMovices() {
  const movies = await axios.get("~~url~~");
  console.log(movies);
}
```
위에처럼 async-await을 이용하여 구현 가능 아래도 같음
```
getMovies = async () => {
  const movies = await axios.get("~~~url~~~");
  console.log(movies);
}
```

- Promis
o Javascript(React)에서 Promise는 비동기 처리에 활용되는 객체<br/>
o Promise는 주로 웹 서비스 구현 시 원활한 데이터 통신을 위해 활용된다.<br/>
o 서버에 데이터를 요청했을 때, 데이터가 모두 받아오기 전에 웹에 출력하려고 할 때 발생하는 오류를 방지하기 위해 활용되며 예로는<br/>
o Promise 객체는 A,B,C 로직이 있을 때 A로직이 모두 완료될 때까지 B,C 로직을 대기시키지 않고 실행시키는데 주로 활용된다.<br/>
o Promise객체가 생성되고 종료될 때까지는 아래와 같은 상태를 같는다. 상태 => Process<br/>
1. Pending(대기) : 비동기 로직 처리의 미완료 상태
2. Fulfilled(이행) : 비동기 로직 처리가 완료된 상태 Promise 결과값 반환 상태
3. Rejected(실패) : 비동기 로직 처리 실패 또는 오류 상태

1-1. Pending(대기)
```
new Promise();
```
```
new Promise((resolve, reject) => {});
```

2-1. Fulfilled(이행)
```
new Promise(function(resolve, reject) {
  resolve();
});
```
- 이행 상태가 되면 then()을 활용하여 결과값 받을 수 있다.
```
function getData() {
  return new Promise((resolve, reject) => {
    let data = 10;
    resolve(data);
  })
}
getData().then((resolvedData) => console.log(resolvedData));
```

3-1 Rejected(실패)
```
new Promise(function(resolve, reject) {
  reject();
});
```
- resolve와 마찬가지로, 실패 상태가 되면 catch()를 활용하여 결과값을 받고 예외 처리 가능
```
function getData() {
  return new Promise((resolve, reject) => {
    reject(new Error("This is rejected!"));
    })
}
getData().catch((err) => console.log(err));
```

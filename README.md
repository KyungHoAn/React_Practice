# React Practice

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

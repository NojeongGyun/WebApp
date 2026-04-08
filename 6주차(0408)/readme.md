<pre>
2024/05.pdf p1, p2 
- Component State - 
랜더링 결과물에 영향을 주는 정보
Component(props)는 원래 값을 바꿀 수 없는데, Component State을 하면 변경 가능하다.
state - 화면 변경
state는 이벤트로 바뀌면 화면 변경

객체가 바뀌면 화면도 바뀜(자동으로) -> 그것을 state에 저장하자

Counter.js에서 onclick이라는 이벤트가 발생하면 함수가 실행된다, 실행되면 함수에 대한 실행결과가 바뀌게 되고 보여지는 화면도 바뀌게 된다. 

- 화살표 함수 -
자바스크립트에 도입된 **람다 함수**
상위 스코프의 this를 상속받음

**람다 함수** 
매개 변수와 반환값을 간단하게 적는 함수 const add = (a, b) => a + b;


<code>
import { useState } from 'react';
const Counter = () => {
const [count, setCount] = useState(0); // counter은 전역변수 느낌이고, setCount는 변환되는 값으로 setCount가 counter에 바뀐값을 전달한다.
console.log(count);
const plus = () => {
setCount(count + 1);
}
const minus = () => {
setCount(count - 1);
}
</code>

p8, 9
            동기적 = 실행하고 응답사인을 받아야 그 다음 동작을 시행 할 수 있다.
sesttate는 비동기적으로 작동함(실행하고 응답사인을 받지 않고 그 다음 동작을 시행 할 수 있다.)

p8에 보면 setCount로 count를 변경했는데, 변경후에 console.log(f12)로 찍어보니 값이 바로 바뀌지 않았다. 그 즉은 비동기적으로 행동하기
            때문에 바꾸었는데 적용되는 시간보다 실행하는 시간이 더 빠르기에 적용이 되지 않을 것을 확인 할 수 있다.


</pre>

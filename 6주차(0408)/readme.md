<pre>
- <mark>State</mark> -
- <strong>Component State</strong> -
Component State란 컴포넌트의 렌더링 결과에 영향을 주는 데이터입니다.
state는 컴포넌트 내부에서 관리되는 변수이며, state 값이 변경되면 React는 해당 컴포넌트를 재렌더링하여 화면을 업데이트합니다.
예를 들어, 시계 컴포넌트에서 현재 시간을 state로 관리하면 시간이 1초마다 변경될 때마다 state 값이 바뀌고, 이에 따라 화면도 자동으로 갱신됩니다.
ㄴ<strong>Class Component state</strong> 
  Class Component state는 this.state를 사용하여 상태를 바꿔주고, **this.setState**를 사용하여 재렌더링합니다.
  
           **setState**
           setState는 기존의 state와 병합되어 상태를 업데이트하며, **비동기적**으로 동작합니다.
           따라서 여러 번의 setState 호출이 있을 경우 이를 한 번에 처리하여 불필요한 렌더링을 줄이고 성능을 향상시킵니다.
           이 과정에서 state 값은 즉시 반영되지 않을 수 있으며, 이전 state 값을 기반으로 업데이트할 때는 함수를 사용하는 것이 안전합니다.
           
                      **<strong>비동기적</strong>**
                      요청을 하고 응답을 받지 않아도, 다른 요청을 할 수 있는 특징을 말합니다.
                      장점은 여러 작업을 동시에 처리 가능하기에 React에서 렌더링 횟수를 줄일 수 있다라는 장점이 있고,
                      단점은 완료되지 않는 작업에 대한 결과를 확인하기 힘들다 라는 단점이 있습니다.
  
ㄴ<strong>Function Component state</strong>
함수형 컴포넌트에서는 state를 관리하기 위해 useState를 사용합니다.

**useState**
useState는 초기값을 인자로 받아 상태 값과 상태 변경 함수를 반환하며, 값을 직접 전달하여 변수에 저장합니다.
           
<strong>State 설정 및 사용</strong>
React에서 state는 가변적으로 변경가능한 값이지만, state에 직접적으로 값을 설정하면 안됩니다.
State에 직접적으로 값을 설정하면 React가 변경을 감지 못하여, 화면 업데이트가 안됩니다.
하지만 직접적으로 값을 설정하고 싶은 경우 this.state에 state을 초기화하는 생성자에서만 가능합니다.




- <mark>화살표 함수</mark> -
자바스크립트에 도입된 **람다 함수**입니다. const add = (a, b) => {return a + b;};
화살표함수는 this는 자기 객체를 참조하지 않고, 바깥 객체를 참조하여 값을 가집니다.

**람다 함수** 
매개 변수와 반환값을 간단하게 적는 함수 const add = (a, b) => a + b;

</pre>

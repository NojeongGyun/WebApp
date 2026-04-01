<pre>
  - component 역할 -
  입력받아 출력하는 역활(return)
  React는 component 기반의 구조라는 특징을 가지고 있음
  태그의 집합을 component라고 하고 모여서 각 가지의 화면 구성을 만든다.


  2024/04.pdf page3
  props를 통해 입력을 조정할 수 있다.

  2024/04.pdf page8
  Component는 항상 대문자로 시작해야 되고, HTML태그는 소문자로 적어야한다.
  (Class이름을 대문자로, 다른걸 소문자로 해야되듯이 똑같음)

  2024/04.pdf page 15
  props(프로퍼티 - 속성)

[App.js]
import React from 'react';
import MyComponent from './MyComponent';
function App() {
  return (
    &it;div&gt;&it;MyComponent name="HTML" /&gt;
    &it;MyComponent name="Javascript" //&gt;
    &it;MyComponent name="React" //&gt;&it;/div/&gt;
  );
}
export default App;

[MyComponent.js]
import React from 'react';
const MyComponent = (props) => {
    return &it;div&gt; {props.name}로 만드는 테스트 페이지&it;/div&gt;;
};
export default MyComponent;

  
</pre>

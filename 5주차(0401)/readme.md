<pre>
  - <mark>component 역할</mark> -
  입력받아 출력하는 역활(return)
  React는 component 기반의 구조라는 특징을 가지고 있음
  태그의 집합을 component라고 하고 모여서 각 가지의 화면 구성을 만든다.

  - <mark> React Component </mark> -
  React Component에서 입력은 Props 출력은 React Element가 됩니다.
  즉, Props를 통해 입력을 조절할 수 있고, 그에 따라 화면에 렌더링됩니다.

  <strong>React Component 주의 사항</strong> - 
  Component는 항상 대문자로 시작해야 되고, HTML태그는 소문자로 적어야합니다.
  만약 Component를 소문자로 적게되면 Dom태그로 인식하여 사용자가 원치 않게 디자인이 될 수 있기 떄문입니다.

  <strong>Props</strong> -
  Props는 상위Component가 하위Component에 값을 전달할 때 사용합니다.
  단방향 성질과 Props를 수정할 수 있다는 특징을 가집니다. 
    
[ - Props 예시 - ]

[App.js]
<code>
import React from 'react';
import MyComponent from './MyComponent';
function App() {
  return (                                                      - return될때 props.name을 MyComponent에서 칠 때 해당 적은 내용을 리턴
    &it;div&gt;&it;MyComponent name="HTML" /&gt;                -  Mycomponent.js에 props.name 호출하면 HTML을 리턴 시킴
    &it;MyComponent name="Javascript" /&gt;                    -  Mycomponent.js에 props.name 호출하면 Javascript을 리턴 시킴
    &it;MyComponent name="React" /&gt; &it;/div&gt;            -  Mycomponent.js에 props.name 호출하면 React을 리턴 시킴
  );
}
export default App;
</code>
  
[MyComponent.js]
import React from 'react';
const MyComponent = (props) => {
    return &it;div&gt; {props.name}로 만드는 테스트 페이지&it;/div&gt;;
};
export default MyComponent;

- 예시를 보면 알 수 있듯이 상위 컴포넌트인 App.js가 하위 컴포넌트인 MyComponent로 props를 통해 단방향으로 데이터를 전달하는 걸 알 수 있습니다.
(상위) index.hmtl -> index.js -> App.js -> MyComponent (하위)

</pre>

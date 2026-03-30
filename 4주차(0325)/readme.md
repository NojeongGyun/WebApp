<pre>
- <mark>Element</mark> -
 웹 페이지의 구조를 이루는 기본 단위(노드)
  ㄴ - <> </> - Element
  ㄴ - <> </> 안에 있는 내용 - 컨텐츠 

<strong>Rendering Element</strong> - 
리액트 앱을 구성하는 가장 작은 블록들(JSX문법을 사용해 HTML의 태그처럼 작성 시킴)
  
- <mark>Compoent</mark> -
Compoent는 HTML에서는 Ui를 구분하는 단위(Header, Menu, Content, Footer)이고, React에서는 화면을 나누는 재사용 가능한 단위입니다(element를 그룹화 시킨것이 Component)
종류로는 #Function compoenet#와 #Class compoenet#가 있습니다.

<strong>Function component</strong> -
Function Component는 함수를 사용하여 JSX를 return 하고, UI를 구성하는 React 컴포넌트 문법입니다.
ex) <code>function Welcome() {
      return &lt;h1&gt;Hello, React Component!&lt;/h1&gt;
    } </code>
JSX문법으로 function 이름() { return 내용 } 이고, 해당 이름(Welcome())을 가진 함수를 호출 하게 되면 Hello, React Component!가 출력이 되고, 재사용도 가능합니다. 
다만 주의 할 점은 하나의 부모태그로 감싸고 return을 해야 한다는 것입니다.
ex) (1)<code>function Welcome() {
      return &lt;h1&gt;Hello, React Component!&lt;/h1&gt; &lt;h2&gt;Hi&lt;/h2&gt;  (x) 잘못된 예시(2개의 루트 요소가 있음)
      }</code>

    (2)<code>function Welcome() {
      return &lt;div&gt;&lt;h1&gt;Hello, React Component!&lt;/h1&gt;&lt;h2&gt;Hi&lt;/h2&gt;&lt;/div&gt;  (o) 올바른 예시(Div로 모두를 감싸 1개로 만든 후 return)
      }</code>
  
<strong>class component</strong> - 
React에서 함수말고 class로 만드는 compoenet입니다.
render()을 통해서만 사용가능하고, 그 안에 두개의 루트요소가 있으면 안됩니다.
ex) <code>render() {
     return (
     <>
      &lt;h1&gt;Hello&lt;/h1&gt;
      &lt;h2&gt;Hi&lt;/h2&gt;
    </>
  );
}</code>

- <mark>React 변화 감지 후 변동 순서</mark> -
 초기 렌더링 -> 상태 변화 -> 비교(디프) -> 업데이트

<strong>초기 rendering</strong> -
React가 처음 실행되면, component가 렌더링되고 가상 DOM이 생성됩니다. 가상 Dom을 기반으로 실제 DOM을 만들어 브라우저에 렌더링됨

<strong>상태 변화</strong> -
component의 상태나 속성이 변경되면, React는 해당 component를 다시 rendering하여 새로운 가상 DOM을 생성합니다

<strong>비교(디프)</strong> -
비교 혹은 디프 단계는 이전 가상 DOM과 새로운 가상 DOM을 비교하여 어떤 부분이 변경되었는지를 확인하는 과정입니다.

<strong>업데이트</strong> -
변경된 부분이 확인되면, React는 실제 DOM을 업데이트합니다. 업데이트 할 떄 변경된 부분과 하위 객체들만 바꾸어 최소한으로 변경하여 성능을 최적화 시킵니다.

<mark>Root Node</mark>
Root Node는 제일 위에 위치한 최상위 객체이고, 모든 component를 담고 있습니다.
React는 index.html의 id="root"를 시작점으로 component 트리를 부모에서 자식 방향으로 렌더링 할 수 있는걸 볼 수 있습니다.

block element - 이미 할당을 하였기 때문에 줄바꿈이 없음
line element - 사용한 후 무조권 줄바꿈이 있음

function return은 하나의 엘리멘트만 return가능하여 많은 정보를 div로 압축해 return하는 경우도 있음
clock component - div로 묶어서 react에 return하는 1개의 묶음
p14 <clock/> 실습

http://localhost:3000/clock_test1.html(시간을 1초간 현재시간을 바꾼다)
{new Date().toLocaleTimeString()}이 코드가 계속 바뀌니깐 react에서는 바뀐부분의 엘리먼트만 바뀌기에 다른 구조는 건들지 않고 시간만 바뀐다.
  
  
</pre>

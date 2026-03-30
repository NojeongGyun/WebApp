<pre>
- <mark>Element</mark> -
 웹 페이지의 구조를 이루는 기본 단위(노드)
  ㄴ - <> </> - Element
  ㄴ - <> </> 안에 있는 내용 - 컨텐츠 


<strong>Rendering Element</strong> - 
리액트 앱을 구성하는 가장 작은 블록들(JSX문법을 사용해 HTML의 태그처럼 작성 시킴)
  
- <mark>Compoent</mark> -
Compoent는 HTML에서는 Ui를 구분하는 단위(Header, Menu, Content, Footer)이고, React에서는 화면을 나누는 재사용 가능한 단위입니다.
종류로는 #Function compoenet#와 #Class compoenet#가 있습니다.

<strong>Function component</strong> -
Function Component는 함수를 사용하여 JSX를 return 하고, UI를 구성하는 React 컴포넌트 문법입니다.
ex) `function Welcome() {
      return <h1>Hello, React Component!</h1>;
    }` 
// JSX문법으로 function 이름() { return 내용 } 이고, 해당 이름(Welcome())을 가진 함수를 호출 하게 되면 Hello, React Component!가 출력이 되고, 재사용도 가능합니다. 
    
   다만 주의 할 점은 하나의 부모태그로 감싸고 return을 해야 한다는 것입니다.
ex) (1) function Welcome() {
      return <h1>Hello, React Component!</h1> <h2>Hi</h2>;  (x) 잘못된 예시(두개의 엘리먼트가 있음)
      }

    (2) function Welcome() {
      return <div><h1>Hello, React Component!</h1><h2>Hi</h2></div>;  (x) 올바른 예시(Div로 모두를 감싸 1개로 만든 후 return)
      }
  
<strong>class component</strong> - 
  




element를 그룹화 시킨것이 Component이다.


캐스트케이팅 - 상위 객체가 바뀌면 하위 객체가 무조권 바꿔야한다. 그 작업을 하는게 케스트 케이팅이다.

  
p8 디프하고 순서

p10
 React 애플리케이션의 시작점 역할은 ID = root 로 시작합니다. index.html안에 id = root가 있음
  

block element - 이미 할당을 하였기 때문에 줄바꿈이 없음
line element - 사용한 후 무조권 줄바꿈이 있음

function return은 하나의 엘리멘트만 return가능하여 많은 정보를 div로 압축해 return하는 경우도 있음
clock component - div로 묶어서 react에 return하는 1개의 묶음
p14 <clock/> 실습

http://localhost:3000/clock_test1.html(시간을 1초간 현재시간을 바꾼다)
{new Date().toLocaleTimeString()}이 코드가 계속 바뀌니깐 react에서는 바뀐부분의 엘리먼트만 바뀌기에 다른 구조는 건들지 않고 시간만 바뀐다.
  
  
</pre>

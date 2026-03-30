<pre>
- <mark>Element</mark> -
 웹 페이지의 구조를 이루는 기본 단위(노드) 입니다.
  ㄴ - <> </> - Element
  ㄴ - <> </> 안에 있는 내용 - 컨텐츠 


<strong>Rendering Element</strong> - 
리액트 앱을 구성하는 가장 작은 블록들(JSX문법을 사용해 HTML의 태그처럼 작성 시킴)

compoent
ㄴfunction component
ㄴclass component




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

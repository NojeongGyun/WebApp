<pre>
마크업 언어 - 데이터를 구조화하고 서식을 지정

메타 데이터 - 데이터를 위한 설명 데이터 
ex) 사진을 찍으면 상세정보안에 데이터(날짜, 시간 등 택스터화된 데이터를 제공함)

SPA - single page Application (ex - 페이스북)
    하나의 HTML 페이지에서 모든 동작이 이루어지는 웹 애플리케이션입니다. 빠른 화면전환이라는 장점이 있지만, 전체 내용을 로딩을 해야하지만 로딩을 빠르게 할 수 있기에, 초반 로딩이 느리다는 단점이 있습니다.
   
MPA - multi page Application ( ex - 경성포탈) 
    페이지마다 별도의 HTML을 가진 전통적인 웹 애플리케이션 구조입니다. 즉 페이지를 링킹하여 링킹된 페이지를 새페이지로 로드하는 것입니다.

Node.js - 클라이언트는 서버에서 내용을 받아 화면에 출력해줍니다. Node.js는 브라우저 외의 환경(특히 서버)에서도 클라이언트 없이 JavaScript를 실행할 수 있도록 해주는 런타임 환경입니다.
         HTML과 css는 오직 브라우저를 통해서만 화면 출력이 가능한데, javascript는 브라우저를 통해서 페이지 동작 처리를 할 수 있는데, Node.js를 사용하면 브라우저 없이 서버 환경에서 JavaScript를 실행할 수 있습니다.

p21 Vs코드 관련 내용

------------------------------------------------------- 2 chapter -----------------------------------------------------------------------
npm(Node Package Manger) - Node 패키지를 설치 및 관리(실행, 삭제, 업데이트 등) 할 수 있는 도구 

npx(Node Package  Execute) - Node 패키지 설치 없이 실행 할 수 있는 도구이고, 보통 임시 실행 일 떄 사용합니다.

React - SPA는 하나의 페이지에서 JavaScript를 이용하여 필요한 부분만 갱신하기 때문에 페이지 전체를 다시 로드하지 않아 일반적으로 더 빠른 사용자 경험을 제공합니다.
        반면 MPA는 페이지 이동 시 서버로부터 새로운 HTML 페이지를 받아 전체 페이지를 다시 로드해야 하므로 상대적으로 시간이 더 걸릴 수 있습니다.
        React는 가상 DOM을 사용하여 변경된 부분만 실제 DOM에 반영함으로써 효율적인 화면 갱신을 수행하며 SPA 방식에 적합한 구조를 가집니다.

- <mark>React 실습</mark> -
1. npx create-react-app my-react-app3 
        npx : 별도의 설치없이 명령으로 node.js 실행
        creat-react-app : (React 프로젝트 구조로 만듬) + my -react-app3 : (my-react-app폴더를 만듬) = my-react-app 폴더 안에 React구조를 만듬
        --use-npm : 패키지 설치를 npm 으로 진행

2. cd my-react-app3
        my-react-app3 디렉토리로 이동

3. npm start
        script안의 start명령을 실행(react로 만들면 .json안에 start문장이 있음)

- information - 
    ctrl + c : 리엑트 종료
    컨트롤  + / : 드래그한 내용 주석처리 

JSX - JSX는0 JavaScript 코드 안에서 HTML과 유사한 문법으로 UI를 작성할 수 있게 해주는 React의 문법 확장입니다
      JSX는 자바스크립트도 아니고 HTML도 아니기에 Babel을 이용하여 javascript문으로 변환하여 실행시킵니다. JSX는 브라우저가 직접 해석할 수 없기에 Babel을 통해 java script로 변환시켜서 해석하게 해주는 것이며
      코드에서는 따로 JSX이라는 키워드 추가 없이 HTML와 유사한 형식으로 작성하면 자동으로 JavaScript로 변환됩니다.

</pre>




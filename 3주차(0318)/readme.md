<pre>
      
<mark>React에 대한 추가 설명</mark>
DOM(Document Object Model)은 브라우저가 HTML을 해석해 트리 구조의 객체로 만든 것으로, 브라우저는 이 DOM을 기반으로 화면을 렌더링합니다. 
전통적인 방식에서는 DOM의 일부가 바뀌면 전체 구조를 다시 <strong>**렌더링(Rendering)**</strong>해야 하는 경우가 많아 성능에 부담이 생깁니다.
React는 가상 DOM(Virtual DOM)을 사용하여, 변경이 일어난 부분만 계산하고 실제 DOM에 최소한의 수정만 적용합니다. 
이렇게 하면 상위 컴포넌트나 관련 객체에 영향을 주지 않고도 화면을 효율적으로 업데이트할 수 있습니다.

 <strong>**Rendering**</strong> 
      HTML을 파싱하여 Dom트리만들고, Css을 파싱하여 CSSDOM트리를 만듭니다. 이 구조를 만들고 화면에 보여지는 과정을 렌더링이라고 합니다.
      웹페이지는 Dom트리와 CSSDOM트리를 분석하여 Render Tree를 만들고 화면은 Render Tree기반으로 화면에 보여집니다.

      
<mark>자바 스크립트의 위치</mark>
자바스크립트는 head나 body쪽에 위치할 수 도 있습니다. 하지만 Body쪽에 자바 스크립트를 지향하는 이유는 웹페이지를 실행하면 
Head에서부터 시작하여 Body를 거쳐 스캔하기 때문에, 동적인 자바스크립트가 계속해서 업데이트를 한다면 
상속받을 객체들이 많아지기에 수정 시간이 보다 더 걸리기에 자바스크립트를 넣는것을 지향합니다.

      
<mark>웹페이지 만드는 과정</mark>
      Dom트리 -> 스타일 규칙생성 -> Render tree생성 -> 레이아웃 -> 페인트

      
<mark>웹 서버 기술</mark>

      - <strong>IIS(</strong> -
      IIS는 Internet Information Services의 줄임말입니다. 마이크로소프트에서 제공하는 서버이고, 클라이언트의 HTTP/HTTPS의 요청을 받고 웹페이지를 서비스 해주는 서버 역활을 합니다.
      웹페이지에 동적인 기술을 넣고 싶을 떄 <strong>**ASP**</strong>라는 기술을 써 웹페이지를 동적이게 할 수 있습니다.

            <strong>**ASP**</strong>
                  ASP는 Active Server Pages 이며 HTML 안에 VBScript나 JScript를 넣어 동적인 웹 페이지를 생성하게 해주는 IIS 위에서 동작하는 기술입니다.

      
      - <strong>JSP</strong>-
      JSP는 JavaServer Pages의 줄임말입니다. Java 기반의 서버 사이드 기술이며, HTML 안에 Java 코드를 넣고 <strong>**Tomcat**</strong>로 동적인 웹 페이지를 생성합니다.
      
            <strong>**Tomcat**</strong>
                  Java 코드로 HTTP 요청을 직접 처리하는 서버 프로그램인 서블릿과 HTML을 자바코드로 짠 JSP를 브라우저 사이에서 요청을 받아 처리하고 결과를 전달하는 역할을 합니다.

      
      - <strong>PHP</strong> -
      PHP는 Hypertext Preprocessor의 줄임말입니다. HTML 안에 PHP 코드를 넣어 <strong>**Apache**</strong>로 동적 웹 페이지를 생성합니다.    
            
            <strong>**Apache**</strong>
                  PHP를 실행할 수 있는 웹 서버입니다.
      

      build를 사용하여 폴더를 만들고, 포팅하여 서버를 연다면 서버는 build라는 명령을 사용하여 만든 폴더의 정보만으로 서버를 열 수 있다.
      
      
      /2024/02.pdf - 24page
      react를 사용하여 생성하면 Index.html, index.js, App.js 등이  public으로 폴더 및 파일로 생성됨

      25page
      App.js -> index.js -> index.html 과정을 거치고 렌더링 되어 react 속성을 화면에 보여준다.
  (component)


      - 과제 -
      build 디렉토리를 만들고, 폴더를 깃허브에 넣고 호스팅

      vs code & github 
      클릭하면 깃허브에 올라감
      
</pre>

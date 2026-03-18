<pre>
React에 대한 추가 설명 -
      Dom이라는 것은 서버에서 웹브라우저에서 주는 구조를 해석하여 웹페이지를 만들게 되는데, 서버에서 웹브라우저에 주는 구조를 Dom이라고 합니다.
      만약 한쪽이 바뀐다면  대상 객체는 바뀔 것이고, super객체에 영향을 받은 상속된 객체들은 바뀔 가능성이 큽니다. 원래라면 모든 구조를 바꾸는데,
      React는 바뀐 객체만 고쳐 적용 시킵니다.

자바스크립트는 head나 body쪽에 위치할 수 도 있는데, body쪽에 추천하는 이유가 웹페이지를 실행하면 head쪽을 읽고 body쪽을 스캔하기 때문에, 동적인 자바스크립트가 계속해서 
      바뀐다면 상속받을 객체들이 많아지기에 body쪽에 자바스크립트를 넣는것을 지향합니다.

scss가 더 많이 쓰임
      
      - rendering -
      HTML을 파싱하여 Dom트리만들고, Css을 파싱하여 CSSDOM트리를 만듭니다. 이 구조를 만들고 화면에 보여지는 과정을 렌더링이라고 합니다.
      Render tree기반으로 화면에 보여진다.

      
      - 웹페이지 만드는 과정 -
      Dom트리 -> 스타일 규칙생성 -> Render tree생성 -> 레이아웃 -> 페인트


      /2024/01pdf - 25page
      IIS(web server를 만드는 도구이고 windows에 기본적으로 깔려있음)
      ASP (옛날꺼)

      JSP
      Tomcat (지금꺼)

      PHP
      Apache (옛날꺼)

      build를 사용하여 폴더를 만들고, 포팅하여 서버를 연다면 서버는 build라는 명령을 사용하여 만든 폴더의 정보만으로 서버를 열 수 있다.
      
      
      /2024/02.pdf - 24page
      react를 사용하여 생성하면 Index.html, index.js, App.js 등이  public으로 폴더 및 파일로 생성됨

      25page
      App.js -> index.js -> index.html 과정을 거치고 렌더링 되어 react 속성을 화면에 보여준다.
  (component)



      build 디렉토리를 만들어서 호스팅
      
</pre>

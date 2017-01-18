MVC패턴 : models , views , controllers

app->app의 기능에 관련
-models : db의 정의 등
-controllers : views와 models를 연결하는 역할, ui에 동작을 보여줄때 사용
-views : 클라이언트가 보는 화면단
-routes : 미들웨어, 즉 클라이언트의 요청이나 서버의 요청의 길잡이 역할, 사용자가 접속에 따라 응답을 선보임, controllers의 작업을 routing해야 응답을 할수 있음
static->html, js,images등 외부 정적파일
config->모듈을 구성하기 위한 파일들

controllers->routes->express->app
-controllers에서 작업
-routes에서 routing하여 '/'로 들어올 경우 controllers의 작업을 응답함.
-이때 routes에서 app.get을 사용해야 하므로 express에서 routes를 불러온뒤 express를 return
-app에서는 express모듈을 불러와서 controllers->routes 작업을 자동으로 수행후에 앱을 실행 

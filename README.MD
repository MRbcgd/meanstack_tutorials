MVC패턴 : models , views , controllers

app->app의 기능에 관련
-models : db의 정의 등
-controllers : views와 models를 연결하는 역할, ui에 동작을 보여줄때 사용
-views : 클라이언트가 보는 화면단
-routes : 미들웨어, 즉 클라이언트의 요청이나 서버의 요청의 길잡이 역할, 사용자가 접속에 따라 응답을 선보임, controllers의 작업을 routing해야 응답을 할수 있음
static->html, js,images등 외부 정적파일
config->모듈을 구성하기 위한 파일들
-------------------------------------------
controllers->routes->express->app
-controllers에서 작업
-routes에서 routing하여 '/'로 들어올 경우 controllers의 작업을 응답함.
-이때 routes에서 app.get을 사용해야 하므로 express에서 routes를 불러온뒤 express를 return
-app에서는 express모듈을 불러와서 controllers->routes 작업을 자동으로 수행후에 앱을 실행
-------------------------------------------
morgan:개발자환경에서 logger를 보기위해 사용
compression:사용자 입장에서 깔끔하게 압축된 응답데이터를 보여줌
body-parser:요청 데이터처리(body 사용..)
method-override:delete, put등 http동사 지원
config/env ->환경에 관련된 파일들
config.js->개발자, 사용자에 따라 config.env의 코드를 불러옴
-------------------------------------------
ejs : jade와 같은 html 템플릿 엔진
app.use(express.static('파일경로')) : 이를 통해 정적파일을 불러올 경로를 정한다.
-------------------------------------------
express-session 미들웨어 :express에서 session 처리하기 위해
sessionSecret 설정
지난 세션 정보 불러오기 

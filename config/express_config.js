var express=require('express'),
    morgan=require('morgan'),//LOGGER 사용위해
    compression=require('compression'),//응답데이터 압축
    bodyParser=require('body-parser'),//요청 데이터처리
    methodOverride=require('method-override')//PUT,DELETE등 HTTP 동사 지원,
    config=require('./config'),//development.js 호출을 위해
    session=require('express-session')//세션사용 위해

module.exports=function(){
  var app=express();

  if(process.env.NODE_ENV === 'development') {//개발자 환경이라면
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {//사용자 환경이라면
        app.use(compress());
    }

  app.use(bodyParser.urlencoded({//body-parser 사용 위해
      extended : true
  }));
  app.use(bodyParser.json());//JSON 사용위해
  app.use(methodOverride());//method-override 사용 위해
  app.use(session({//session사용 위해
        saveUninitialized : true,
        resave : true,
        secret : config.sessionSecret//development.js의 sessionSecret을 불러옴
    }));


  app.set('views', './app/views');//ejs사용을 위해
  app.set('view engine', 'ejs');//ejs사용을 위해

  require('../app/routes/index.server.routes.js')(app)
  //주의 할점은 정적파일은 라우팅호출 밑으로 해야한다.(응답을 빠르게 하기 위해)
  app.use(express.static('./static'))//정적파일 컨트롤 static에 있는 파일들을 유동성있게 불러오기위해
  return app;
}

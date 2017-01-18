var express=require('express'),
    morgan=require('morgan'),//LOGGER 사용위해
    compression=require('compression'),//응답데이터 압축
    bodyParser=require('body-parser'),//요청 데이터처리
    methodOverride=require('method-override')//PUT,DELETE등 HTTP 동사 지원

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

  require('../app/routes/index.server.routes.js')(app)
  return app;
}

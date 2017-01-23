var config=require('./config'),
    mongoose=require('mongoose')

module.exports=function(){
  mongoose.Promise = global.Promise;
  var db=mongoose.connect(config.db,function(){
    console.log('mongodb connected')
  })

  require('../app/models/user.server.model.js')//crud하기 위해선 정의해돈 Schema가 필요하다.
  require('../app/models/article.server.model.js')
  return db;
}

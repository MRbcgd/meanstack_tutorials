var config=require('./config'),
    mongoose=require('mongoose')

module.exports=function(){
  var db=mongoose.connect(config.db,function(){
    console.log('mongodb connected')
  })

  require('../app/models/user.server.model.js')//crud하기 위해선 정의해돈 Schema가 필요하다.
  return db;
}

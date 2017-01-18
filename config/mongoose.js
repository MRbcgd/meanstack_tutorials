var config=require('./config'),
    mongoose=require('mongoose')

module.exports=function(){
  var db=mongoose.connect(config.db,function(){
    console.log('mongodb connected')
  })

  return db;
}

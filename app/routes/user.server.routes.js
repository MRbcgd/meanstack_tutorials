var users=require('../controllers/user.server.controller.js')

module.exports=function(app){//users url로 접속시 post하면 user테이블이 생성된다
  app.route('/users').post(users.create).get(users.list)
}
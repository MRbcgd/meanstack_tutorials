var users = require('../controllers/user.server.controller'),
    passport = require('passport');

module.exports = function(app) {
    app.route('/signup')
    .post(users.signup)
    .get(users.renderSignup);


    app.route('/signin')
    .get(users.renderSignin)
    .post(passport.authenticate('local', {
        successRedirect : '/',
        failureRedirect : '/signin',
        failureFlash : true
    }));

    app.get('/signout', users.signout);


};
// var users=require('../controllers/user.server.controller.js')
//
// module.exports=function(app){//users url로 접속시 post하면 user테이블이 생성된다
//   app.route('/users').post(users.create).get(users.list).delete(users.deleteAll)
//
//   app.route('/users/:userId')
//   .get(users.read)
//   .put(users.update)
//   .delete(users.delete)
//   app.param('userId',users.userByID)
// }

/*
각 지역마다 전략을 가지고 있다. 전략마다 독자적인 파일을 구성해야함.
*/
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');

module.exports = function() {
    passport.use(new LocalStrategy(function(username, password , done) {
        User.findOne({
            userid : username//view에서 입력받아올 username
        }, function(err, user){
            if(err) {
                return done(err);
            }

            if(!user) {//로그인시 해당 사용자가 없을 경우
                return done(null, false, {
                    message : 'Unknown user'
                });
            }
            if(!user.authenticate(password)) {//비밀번호가 틀렸을 경우
                return done(null, false, {
                    message : 'Invalid password'
                });
            }
            return done(null, user);//username과 password과 인증됬다면 인증절차를 밟으러 간다
        });
    }));
};

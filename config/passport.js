var passport = require('passport'),
    mongoose = require('mongoose');

module.exports = function() {
    var User = mongoose.model('User');

    passport.serializeUser(function(user, done){//사용자가 인증을 받으면 session에 user의 id를저장해놨다
       done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        User.findOne({//user의 id가 맞는지 직렬화를 통한 재인증
            _id : id
        }, '-password -salt', function(err, user){//암호를 해독하기 위한 hash
            done(err, user);
        });
    });
    require('./strategies/local.js')();//지역 전략을 호출
};

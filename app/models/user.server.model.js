var mongoose=require('mongoose'),
    Schema=mongoose.Schema

var UserSchema=new Schema({//schema 정의
  username : String ,
  userid :  {
    type : String ,
    trim : true//빈공간 삭제
  },
  password : String ,
  email : String,
  created : {//생성시간 추가
        type : Date,
        default : Date.now
      },
  website : {//url이 없다면 무시, 있다면 앞에 http나 https가 있는지 확인후 없으면 앞에 추가
        type : String ,
        get : function(url) {//set이라면 조회시 모두 보여주고 get은 있는 데이터만 website행을 보여줌
          if(!url) {
            return url;
          } else {
              if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
                url = 'http://' + url;
              }
              return url;
            }
        }
  }
})
UserSchema.virtual('idpass').get(function() {//id+pass를 컬렉션의 행으로 추가해서 보여줌
  return this.userid + ' ' + this.password;
})
UserSchema.set('toJSON',{ getters : true });//get을 쓰려면 이것을 써주어야함!
mongoose.model('User',UserSchema)
